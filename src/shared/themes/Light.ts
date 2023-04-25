import { createTheme } from '@mui/material';

export const LightTheme = createTheme({
	palette: {
		primary: {
			main: '#00509D',
			dark: '#00296B',
			light: '#003F88',
			contrastText: '#ffff',
		},
		secondary: {
			main: '#FDC500',
			dark: '#FF8800',
			light: '#FFD500',
			contrastText: '#003566',
		},
		background: {
			default: '#f7f6f3',
			paper: '#ffffff',
		},
	},
});
