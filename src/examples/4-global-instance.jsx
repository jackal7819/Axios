import { useEffect } from 'react';

const PRODUCTS_URL = 'https://course-api.com/react-store-products';
const RANDOM_USER_URL = 'https://randomuser.me/api';

const GlobalInstance = () => {
	const fetchData = async () => {
		console.log('global axios instance');
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <h2 className='text-center'>global instance</h2>;
};

export default GlobalInstance;
