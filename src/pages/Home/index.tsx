import { Button, Grid } from '@mui/material';
import React, { useState } from 'react';

import { Contexto } from '../../configs/types/Contexto';
import { Header } from '../../shared/components/Header';
import { HomeContainer } from '../../shared/components/HomeContainer';
import { MyModal } from '../../shared/components/Modal';

const Home: React.FC = () => {
	const [open, setOpen] = useState(false);
	const [contexto, setContexto] = useState<Contexto>('cadastro');

	function handleClick(contexto: Contexto) {
		setContexto(contexto);
		setOpen(true);
	}

	return (
		<>
			<Header />
			<HomeContainer />
			<Grid
				item
				gap={2}
				sx={{
					display: 'flex',
					height: '10vh',
				}}
			>
				<Button
					sx={{
						width: '50%',
					}}
					variant="contained"
					onClick={() => handleClick('cadastro')}
				>
					Cadastrar
				</Button>
				<Button
					sx={{
						width: '50%',
					}}
					variant="contained"
					onClick={() => handleClick('login')}
				>
					Logar
				</Button>
			</Grid>

			<MyModal
				aberto={open}
				contexto={contexto}
				fecharModal={() => setOpen(false)}
			/>
		</>
	);
};

export default Home;
