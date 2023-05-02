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
				<ButtonWithModal
					tituloForm="Cadastrar"
					text="cadastrar"
					submitText="Cadastrar"
					mostraBotaoNome
					mostraBotaoEmail
					mostraBotaoSenha
					mostraBotaoConfirmaSenha
				></ButtonWithModal>
				<ButtonWithModal
					tituloForm="Fazer Login"
					text="Login"
					submitText="Login"
					mostraBotaoEmail
					mostraBotaoSenha
				></ButtonWithModal>
			</Grid>
		</>
	);
};

export default Home;
