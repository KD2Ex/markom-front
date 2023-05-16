import {Button, ButtonProps, styled} from "@mui/material";

export const DefaultButton = styled(Button)<ButtonProps>(({ theme }) => ({
	backgroundColor: '#1f7d63',
	color: '#ffffff',
	fontWeight: 'bold',
	"&:hover": {
		backgroundColor: theme.palette.primary.hover,
		boxShadow: 'none'
	},
	height: '48px',
	textTransform: 'none',
	boxShadow: 'none',
	minWidth: 50,
	borderRadius: 8
}))