import React from 'react';
import {Button, styled} from "@mui/material";
import {ButtonProps} from "@mui/material/Button/Button";

const NavButton = styled(Button)<ButtonProps>(({theme}) => ({
	color: 'black',
	"&:hover": {
		backgroundColor: "#f7f7f7"
	},
	"&:acitve": {
		backgroundColor: "#f7f7f7"
	},
	height: 2,
	textTransform: 'none',
	fontSize: 16,
}))

export default NavButton;