import classes from './Modal.module.css';

export default function Modal({ onClose, children }) {
	return (
		<>
			<div className={classes.backdrop}>
				<dialog open className={classes.modal}>
					{children}
				</dialog>
			</div>
		</>
	);
}
