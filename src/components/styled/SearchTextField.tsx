import {OutlinedInput, OutlinedInputProps, styled, TextField, TextFieldProps} from "@mui/material";
import {InputProps} from "@mui/material/Input/Input";

export const SearchTextField = styled(TextField, {name: "SearchTextField"})<TextFieldProps>( ({ theme }) => ({
	"& .MuiInputBase-root": {
		height: 48,
		padding: 0,
	},
	"& .MuiOutlinedInput-root": {
		'&.Mui-focused fieldset': {
			borderColor: 'black',
			borderWidth: 1,
		}
	},
	p: 0,
	m: 0
}))