import {Button, ButtonProps, styled} from "@mui/material";

export const DefaultButton = styled(Button)<ButtonProps>(({ theme }) => ({
	backgroundColor: '#1f7d63',
	color: '#ffffff',
	fontWeight: 'bold',
	"&:hover": {
		backgroundColor: theme.palette.primary.secondary,
	},
	height: '48px',
	textTransform: 'none',
}))