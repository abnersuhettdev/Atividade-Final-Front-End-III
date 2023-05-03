import { Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

interface IFormProps {
	tituloForm: string;
	submitText: string;

	handleSubmit: () => void;

	mostraBotaoNome?: boolean;
	mostraBotaoEmail?: boolean;
	mostraBotaoSenha?: boolean;
	mostraBotaoConfirmaSenha?: boolean;
}

export const Form: React.FC<IFormProps> = ({
	tituloForm,
	submitText,
	mostraBotaoNome,
	mostraBotaoEmail,
	mostraBotaoSenha,
	mostraBotaoConfirmaSenha,
	handleSubmit,
}) => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmSenha, setConfirm] = useState('');

	// function sendUser({ nome, email, senha, confirmSenha }: IUsuarioProps) {
	// 	const usuario = {
	// 		nome,
	// 		email,
	// 		senha,
	// 		confirmSenha,
	// 	};
	// 	return usuario;
	// }

	return (
		<Grid
			container
			alignItems={'center'}
			justifyContent={'center'}
			textAlign={'center'}
			flexDirection={'column'}
			gap={1}
		>
			<Typography id="modal-modal-title" variant="h5" component="h2">
				{tituloForm}
			</Typography>

			<Grid
				item
				sx={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
				gap={3}
			>
				{mostraBotaoNome && (
					<TextField
						id="name"
						label="Nome"
						placeholder="Digite seu nome"
						variant="outlined"
						onChange={(e) => setNome(e.target.value)}
					/>
				)}
				{mostraBotaoEmail && (
					<TextField
						id="email"
						placeholder="Digite seu email"
						label="Email"
						variant="outlined"
						onChange={(e) => setEmail(e.target.value)}
					/>
				)}
				{mostraBotaoSenha && (
					<TextField
						id="password"
						placeholder="Digite sua senha"
						label="Senha"
						type="password"
						onChange={(e) => setSenha(e.target.value)}
					/>
				)}
				{mostraBotaoConfirmaSenha && (
					<TextField
						id="confirm-password"
						label="Confirme sua senha"
						type="password"
						onChange={(e) => setConfirm(e.target.value)}
					/>
				)}
				<Button onClick={handleSubmit} variant="outlined">
					{submitText}
				</Button>
			</Grid>
		</Grid>
	);
};
