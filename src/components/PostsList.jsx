import { useState } from 'react';

import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

import classes from './PostsList.module.css';

export default function PostsList({ isPosting, onStopPosting }) {
	const [posts, setPosts] = useState([]);

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

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}
			{posts.length > 0 && (
				<ul className={classes.posts}>
					{posts.map((post, index) => (
						<Post key={index} author={post.author} body={post.body} />
					))}
				</ul>
			)}
			{posts.length === 0 && (
				<div style={{ textAlign: 'center', color: 'white' }}>
					<h2>There are no posts yet.</h2>
					<p>Starting adding some!</p>
				</div>
			)}
		</>
	);
}
