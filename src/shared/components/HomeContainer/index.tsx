import { Grid, Typography } from '@mui/material';

export const HomeContainer = () => {
	return (
		<Grid
			xs={12}
			height={'80vh'}
			flexDirection={'column'}
			justifyContent={'center'}
			alignItems={'center'}
			sx={{
				display: 'flex',
			}}
			gap={3}
		>
			<Typography variant="h4" component="h1">
				MoneySaver
			</Typography>
			<Grid item>
				<img
					height={300}
					src="../../../../public/assets/save-money.png"
					alt=""
				/>
			</Grid>
		</Grid>
	);
};
