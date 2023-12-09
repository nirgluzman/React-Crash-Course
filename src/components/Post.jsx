import { Link } from 'react-router-dom';

import classes from './Post.module.css';

export default function Post({ id, author, body }) {
	return (
		<li className={classes.post}>
			<Link to={id}>
				{/* note that <Link> renders an accessible <a> element */}
				<p className={classes.author}>{author}</p>
				<p className={classes.text}>{body}</p>
			</Link>
		</li>
	);
}
