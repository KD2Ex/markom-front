import {createTheme} from "@mui/material";


export const defaultTheme = createTheme({

	palette: {
		primary: {
			main: '#fff',
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
		Mui: {
			styleOverrides: {
				root: {
					"& .MuiOutlinedInput": {
						root: {
							"& .Mui-focused .MuiOutlinedInput-notchedOutline": {
								borderColor: '#000',
								color: 'red',
							}
						}
					}

				}
			}
		}
	},

})