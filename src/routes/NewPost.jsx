import { Link, Form, redirect } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './NewPost.module.css';

export default function NewPost() {
	return (
		<Modal>
			<Form className={classes.form} method='post'>
				<p>
					<label htmlFor='body'>Text</label>
					<textarea id='body' name='body' required rows={3} />
				</p>
				<p>
					<label htmlFor='name'>Your name</label>
					<input type='text' id='name' name='author' required />
				</p>
				<p className={classes.actions}>
					<Link to='/' type='button'>
						Cancel
					</Link>
					<button type='submit'>Submit</button>
				</p>
			</Form>
		</Modal>
	);
}

// on submition, React Router sends the encoded data in Form to 'action'.
export async function action({ request }) {
	const formData = await request.formData();
	const postData = Object.fromEntries(formData); // {body: '...', author: '...'}
	console.log(postData);

	await fetch('http://localhost:8080/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(postData),
	});

	// 'redirect' takes a path as an argument and immediately redirects the user to that path.
	// It's recommended to use 'redirect' in loaders and actions rather than 'useNavigate'.
	// https://reactrouter.com/en/main/fetch/redirect
	return redirect('/');
}
