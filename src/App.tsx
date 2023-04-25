import AppRoutes from './routes/AppRoutes';
import { AppThemeProvider } from './shared/contexts/ThemeContexts';

function App() {
	return (
		<AppThemeProvider>
			<AppRoutes />
		</AppThemeProvider>
	);
}

export default App;
