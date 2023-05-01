import { Grid } from '@mui/material';
import React from 'react';

import { ButtonWithModal } from '../../shared/components/ButtonWithModal';
import { Header } from '../../shared/components/Header';
import { HomeContainer } from '../../shared/components/HomeContainer';

const Home: React.FC = () => {
	return (
		<>
			<Header />
			<HomeContainer />
			<Grid
				item
				gap={2}
				sx={{
					display: 'flex',
				}}
			>
				<ButtonWithModal text="cadastrar"></ButtonWithModal>
				<ButtonWithModal text="cadastrar"></ButtonWithModal>
			</Grid>
		</>
	);
};

export default Home;
