import {Button, ButtonProps, styled} from "@mui/material";


export const CartButton = styled(Button)<ButtonProps>( ({theme}) => ({
	height: '40px',
	backgroundColor: '#1f7d63',
	color: '#ffffff',
	textTransform: 'none',
	"&:hover": {
		backgroundColor: theme.palette.primary.secondary,
	},
	borderRadius: 8
}))