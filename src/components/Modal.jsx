import { useNavigate } from 'react-router-dom';

import classes from './Modal.module.css';

export default function Modal({ children }) {
	const navigate = useNavigate();

	function closeHandler() {
		navigate('/');
	}

	return (
		<>
			<div className={classes.backdrop} onClick={closeHandler} />

			{/* <dialog> tag is used to define a dialog box or subwindow.
			Modal dialogs are interactive windows that overlay the rest of the web page,
			preventing users from interacting with the main content until they close the dialog */}
			<dialog open className={classes.modal}>
				{children}
			</dialog>
		</>
	);
}
