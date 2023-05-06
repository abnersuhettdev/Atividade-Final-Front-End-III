/* eslint-disable react/prop-types */
import { Button, Grid, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { Contexto } from '../../../configs/types/Contexto';

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
				console.log(nome, email, senha, confirmaSenha);
				break;
			case 'login':
				console.log(email, senha);
				break;
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
									onChange={(ev) => setNome(ev.target.value)}
									required
								/>
								<TextField
									placeholder="Email"
									type="text"
									required
									onChange={(ev) => setEmail(ev.target.value)}
								/>
								<TextField
									placeholder="Senha"
									type="password"
									onChange={(ev) => setSenha(ev.target.value)}
									required
								/>
								<TextField
									placeholder="Confirme sua senha"
									required
									type="password"
									onChange={(ev) =>
										setConfirmaSenha(ev.target.value)
									}
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
