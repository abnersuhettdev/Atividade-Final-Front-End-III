/* eslint-disable react/prop-types */
import { Alert, Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { Contexto, IUser } from '../../../configs/types/Contexto';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

interface IModalProps {
	aberto: boolean;
	contexto: Contexto;
	fecharModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MyModal: React.FC<IModalProps> = ({
	aberto,
	contexto,
	fecharModal,
}) => {
	const [nome, setNome] = useState('');
	const [email, setEmail] = useState('');
	const [senha, setSenha] = useState('');
	const [confirmaSenha, setConfirmaSenha] = useState('');

	function handleSubmit() {
		switch (contexto) {
			case 'cadastro':
				if (!(nome && email && senha && confirmaSenha)) {
					console.log('Cadastro inválido');
					return;
				}
				break;
			case 'login':
				console.log(email, senha);
				break;
		}

		const user: IUser = {
			nome,
			email,
			senha,
		};

		console.log(user);
	}

	function handleInputs(input: HTMLTextAreaElement | HTMLInputElement) {
		const tipoInput = input.name;
		const valorInput = input.value;

		switch (tipoInput) {
			case 'nome':
				if (valorInput.trim().length < 3) {
					console.log('Nome inválido, insira no minimo 3 caracteres');
					return;
				}
				console.log('nome ok');
				setNome(valorInput);
				break;
			case 'email':
				if (!valorInput.includes('com' && '@')) {
					console.log('Email invalido');
					return;
				}
				setEmail(valorInput);
				console.log('email ok');
				break;
			case 'password':
				if (valorInput.trim().length < 5) {
					console.log('Senha Inválida');
					return;
				}
				console.log('senha Ok');
				setSenha(valorInput);
				break;
			case 'password2':
				if (valorInput !== senha) {
					console.log('Senha inválida');
					return;
				}
				console.log('Senha confirmada');
				setConfirmaSenha(valorInput);
				break;
			default:
		}
	}

	return (
		<div>
			<Modal
				open={aberto}
				onClose={fecharModal}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Alert severity="warning">
						This is a warning alert — check it out!
					</Alert>
					<Grid
						display={'flex'}
						flexDirection={'column'}
						justifyContent={'center'}
						alignItems={'center'}
						gap={1}
					>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
						>
							{contexto === 'cadastro'
								? 'Cadastrar'
								: 'Fazer Login'}
						</Typography>

						{/* FORM DE CADASTRO */}
						{contexto === 'cadastro' && (
							<Grid
								item
								display={'flex'}
								flexDirection={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								gap={1}
							>
								<TextField
									placeholder="Nome"
									onChange={(ev) => handleInputs(ev.target)}
									name="nome"
									required
								/>
								<TextField
									placeholder="Email"
									type="text"
									required
									name="email"
									onChange={(ev) => handleInputs(ev.target)}
								/>
								<TextField
									placeholder="Senha"
									type="password"
									name="password"
									onChange={(ev) => handleInputs(ev.target)}
									required
								/>
								<TextField
									placeholder="Confirme sua senha"
									required
									type="password"
									name="password2"
									onChange={(ev) => handleInputs(ev.target)}
								/>
							</Grid>
						)}

						{/* FORM DE LOGIN */}
						{contexto === 'login' && (
							<Grid
								item
								display={'flex'}
								flexDirection={'column'}
								justifyContent={'center'}
								alignItems={'center'}
								gap={1}
							>
								<TextField
									placeholder="Email"
									onChange={(ev) => setEmail(ev.target.value)}
									required
								/>
								<TextField
									placeholder="Senha"
									onChange={(ev) => setSenha(ev.target.value)}
									required
								/>
							</Grid>
						)}

						<Grid item display={'flex'} gap={3}>
							<Button variant="contained" onClick={handleSubmit}>
								Salvar
							</Button>
							<Button
								variant="outlined"
								color="error"
								onClick={() => fecharModal(true)}
							>
								Cancelar
							</Button>
						</Grid>
					</Grid>
				</Box>
			</Modal>
		</div>
	);
};
