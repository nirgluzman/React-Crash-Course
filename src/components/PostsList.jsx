import Post from './Post';
import classes from './PostsList.module.css';

export default function PostsList() {
	return (
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
	);
}
