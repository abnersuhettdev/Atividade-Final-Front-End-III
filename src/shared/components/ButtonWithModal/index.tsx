import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';

import { Form } from '../Form';

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

interface IButtonAndFormProps {
	text: string;
	tituloForm: string;
	submitText: string;

	mostraBotaoNome?: boolean;
	mostraBotaoEmail?: boolean;
	mostraBotaoSenha?: boolean;
	mostraBotaoConfirmaSenha?: boolean;
}

export const ButtonWithModal: React.FC<IButtonAndFormProps> = ({
	text,
	tituloForm,
	submitText,
	mostraBotaoNome,
	mostraBotaoEmail,
	mostraBotaoSenha,
	mostraBotaoConfirmaSenha,
}) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Box
				sx={{
					flexGrow: 1,
				}}
			>
				<Button
					sx={{
						width: '100%',
						color: 'white',
						bgcolor: 'primary.main',
						borderRadius: '0',
						padding: '10px',
					}}
					onClick={handleOpen}
				>
					{text}
				</Button>
				<Modal
					open={open}
					onClose={handleClose}
					aria-labelledby="modal-modal-title"
					aria-describedby="modal-modal-description"
				>
					<Box sx={style}>
						<Form
							tituloForm={tituloForm}
							submitText={submitText}
							mostraBotaoNome={mostraBotaoNome}
							mostraBotaoEmail={mostraBotaoEmail}
							mostraBotaoSenha={mostraBotaoSenha}
							mostraBotaoConfirmaSenha={mostraBotaoConfirmaSenha}
						/>
					</Box>
				</Modal>
			</Box>
		</>
	);
};
