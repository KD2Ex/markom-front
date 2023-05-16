import {createTheme} from "@mui/material";


export const defaultTheme = createTheme({

	palette: {
		primary: {
			main: '#000',
			bg: '#f7f7f7',
			secondary: '#1f7d63',
			hover: '#29a07c',
		}
	},

	typography: {
		fontFamily: 'Ubuntu',

	},

	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {

				}
			}
		},
		MuiToolbar: {
			styleOverrides: {
				root: {

				}
			}
		},

	},

})