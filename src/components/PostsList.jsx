import { useEffect, useState } from 'react';

import Post from './Post';
import classes from './PostsList.module.css';

export default function PostsList() {
	const [posts, setPosts] = useState([]);
	const [isFetching, setIsFetching] = useState(false);

	function addPostHandler(postData) {
		fetch('http://localhost:8080/posts', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(postData),
		});

		setPosts(exisitingPosts => [postData, ...exisitingPosts]);
	}

	// fetching all posts after the initial render of the component and not on any subsequent renders.
	useEffect(() => {
		async function fetchPosts() {
			setIsFetching(true);
			const response = await fetch('http://localhost:8080/posts', {
				method: 'GET',
			});
			const resData = await response.json();
			setPosts(resData.posts);
			setIsFetching(false);
		}
		fetchPosts();
	}, []);

	return (
		<>
			{!isFetching && posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post, index) => (
						<Post key={index} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{!isFetching && posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There are no posts yet.</h2>
					<p>Starting adding some!</p>
				</div>
			)}
			{isFetching && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<p>Loading posts...</p>
				</div>
			)}
		</>
	);
}
