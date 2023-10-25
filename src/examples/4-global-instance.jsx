import { useEffect } from 'react';
import axios from 'axios';

const PRODUCTS_URL = 'https://course-api.com/react-store-products';
const RANDOM_USER_URL = 'https://randomuser.me/api';

const GlobalInstance = () => {
	const fetchData = async () => {
		try {
			const resp1 = await axios.get(PRODUCTS_URL);
			const resp2 = await axios.get(RANDOM_USER_URL);
			console.log(resp1, resp2);
		} catch (error) {
			console.log(error.resp1);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return <h2 className='text-center'>global instance</h2>;
};

export default GlobalInstance;
