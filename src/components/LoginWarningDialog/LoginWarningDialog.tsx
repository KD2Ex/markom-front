import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from "@mui/material";
import {useNavigate} from 'react-router-dom'

const LoginWarningDialog = ({open, setOpen}) => {

	const handleClose = () => {
		setOpen(false);
	}

	const handleClick = () => {
		setOpen(false);
		navigate('/login')
	}

	const navigate = useNavigate();

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>
				Необходима авторизация
			</DialogTitle>
			<DialogContent>
				<Typography>
					Авторизуйтесь, чтобы воспользоваться корзиной.
				</Typography>

			</DialogContent>
			<DialogActions>
				<Button
					sx={{
					width: '100%',
					}}
					onClick={handleClick}
				>
					Авторизоваться
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default LoginWarningDialog;