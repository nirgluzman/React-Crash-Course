import { useState } from 'react';

import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';

export default function App() {
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function showModalHandler() {
		setModalIsVisible(true);
	}

	function hideModalHandler() {
		setModalIsVisible(false);
	}

	return (
		<>
			<MainHeader onCreatePost={showModalHandler} />
			<main>
				<PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
			</main>
		</>
	);
}
