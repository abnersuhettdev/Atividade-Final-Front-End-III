import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeSwitch } from '../shared/components/Switch';
import { useAppThemeContext } from '../shared/contexts/ThemeContexts';

const AppRoutes: React.FC = () => {
	const { toggleTheme } = useAppThemeContext();

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<ThemeSwitch onChange={toggleTheme} />}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
