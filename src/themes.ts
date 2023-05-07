import {createTheme} from "@mui/material";


export const defaultTheme = createTheme({

	palette: {
		primary: {
			main: '#fff',
			bg: '#f7f7f7',
			secondary: '#1f7d63'
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