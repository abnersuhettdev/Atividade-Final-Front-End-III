import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';

import { useAppThemeContext } from '../../contexts/ThemeContexts';
import { ThemeSwitch } from '../ThemeSwitch';

export const Header = () => {
	const { toggleTheme } = useAppThemeContext();
	return (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1 }}
					>
						News
					</Typography>
					<ThemeSwitch onChange={toggleTheme} />
				</Toolbar>
			</AppBar>
		</>
	);
};
