import { useEffect } from 'react';

const RANDOM_USER_URL = 'https://randomuser.me/api';

const CustomInstance = () => {
	const fetchData = async () => {
		console.log('custom axios instance');
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <h2 className='text-center'>custom instance</h2>;
};

export default CustomInstance;
