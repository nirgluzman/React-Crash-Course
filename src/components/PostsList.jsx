import { useState } from 'react';

import Modal from './Modal';
import NewPost from './NewPost';
import Post from './Post';

import classes from './PostsList.module.css';

export default function PostsList({ isPosting, onStopPosting }) {
	const [posts, setPosts] = useState([]);

	function addPostHandler(postData) {
		setPosts(exisitingPosts => [postData, ...exisitingPosts]);
	}

	return (
		<>
			{isPosting && (
				<Modal onClose={onStopPosting}>
					<NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
				</Modal>
			)}
			<ul className={classes.posts}>
				{posts.map((post, index) => (
					<Post key={index} author={post.author} body={post.body} />
				))}
			</ul>
		</>
	);
}
