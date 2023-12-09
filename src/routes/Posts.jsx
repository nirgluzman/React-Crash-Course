import { Outlet } from 'react-router-dom';

import PostsList from '../components/PostsList';

export default function Posts() {
	return (
		<>
			<Outlet />
			<main>
				<PostsList />
			</main>
		</>
	);
}

export async function loader() {
	const response = await fetch('http://localhost:8080/posts', {
		method: 'GET',
	});
	const resData = await response.json();
	return resData.posts;
}
