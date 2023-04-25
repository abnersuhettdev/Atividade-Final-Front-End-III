import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

const Home: React.FC = () => {
	const [title, setTitle] = useState('');

	return (
		<div>
			<Button
				variant="contained"
				color="secondary"
				onClick={() => setTitle('Olá Mundo')}
			>
				Testing
			</Button>
			<Typography variant="h1">{title}</Typography>
		</div>
	);
};

export default Home;
