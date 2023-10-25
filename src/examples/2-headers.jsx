import { useState } from 'react';
import axios from 'axios';

const URL = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const Headers = () => {
	const [joke, setJoke] = useState('random dad joke');

	const fetchDadJoke = async () => {
		console.log('fetch dad joke');
	};

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