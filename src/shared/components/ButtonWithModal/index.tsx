import { Box, Button, Modal, Typography } from '@mui/material';
import { useState } from 'react';

interface IButtonProps {
	text: string;
}

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

export const ButtonWithModal: React.FC<IButtonProps> = ({ text }) => {
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
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
						>
							Text in a modal
						</Typography>
						<Typography id="modal-modal-description" sx={{ mt: 2 }}>
							Duis mollis, est non commodo luctus, nisi erat
							porttitor ligula.
						</Typography>
					</Box>
				</Modal>
			</Box>
		</>
	);
};