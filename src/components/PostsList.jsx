import Post from './Post';
import NewPost from './NewPost';

import classes from './PostsList.module.css';

export default function PostsList() {
	return (
		<>
			<NewPost />
			<ul className={classes.posts}>
				<Post
					author='Max'
					body='bla bla'
				/>
				<Post
					author='Idan'
					body='bla bla'
				/>
			</ul>
		</>
	);
}
