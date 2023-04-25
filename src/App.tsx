import { ThemeProvider } from '@mui/material';

import AppRoutes from './routes/AppRoutes';
import { DarkTheme } from './shared/themes';

function App() {
	return (
		<ThemeProvider theme={DarkTheme}>
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
