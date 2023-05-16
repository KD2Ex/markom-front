import {OutlinedInput, OutlinedInputProps, styled, TextField, TextFieldProps} from "@mui/material";
import {InputProps} from "@mui/material/Input/Input";

export const ProfileTextField = styled(TextField, {name: "ProfileTextField"})<TextFieldProps>( ({ theme }) => ({
	"& .MuiInputBase-root": {
		height: 40,
		padding: 0,
		border: '0.5px solid black',
		borderRadius: 8
	},
	"&:focus .MuiInputBase-root": {
		borderColor: 'rgba(0,0,0,0.5)'
	},
	"& .MuiOutlinedInput-root": {
		'&.Mui-focused fieldset ': {
			borderColor: 'black',
			borderWidth: 0,
		},
		'&:hover fieldset': {
			borderWidth: 0,
		},
		'& fieldset': {
			borderWidth: 0,
		},
	},
	padding: 0,
	margin: 0
}))