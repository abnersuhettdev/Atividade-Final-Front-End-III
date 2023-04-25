import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
	palette: {
		primary: {
			main: '#00132D',
			dark: '#001E45',
			light: '#002657',
			contrastText: '#EDEDED',
		},
		secondary: {
			main: '#26B29D',
			dark: '#13594E',
			light: '#26B29D',
			contrastText: '#0A2D27',
		},
		background: {
			default: '#11151C',
			paper: '#212D40',
		},
	},
});
