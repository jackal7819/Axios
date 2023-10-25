import { useState, useEffect } from 'react';
import axios from 'axios';

const URL = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
	const [joke, setJoke] = useState('random dad joke');

	const fetchDadJoke = async () => {
		try {
			const { data } = await axios.get(URL, {
				headers: { Accept: 'application/json' },
			});
			setJoke(data.joke);
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchDadJoke();
	}, []);

	return (
		<section className='text-center section'>
			<button className='btn' onClick={fetchDadJoke}>
				random joke
			</button>
			<p className='dad-joke'>{joke}</p>
		</section>
	);
};

export default Headers;
