import React, {useEffect, useState} from 'react';
import {Alert, Box, Button, Snackbar, Typography, useTheme} from "@mui/material";
import styles from './LoginPage.module.css'
import BoldH from "../../components/styled/BoldH";
import {SearchTextField} from "../../components/styled/SearchTextField";
import {DefaultButton} from "../../components/styled/DefaultButton";
import {ProfileTextField} from "../../components/styled/ProfileTextField";
import {useSearchParams, useNavigate, Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import user from "../../store/user";
import UserService from "../../api/services/UserService";



const LoginPage = observer(() => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [alertOpen, setAlertOpen] = useState(false);
	const [alert, setAlert] = useState({type: 'error', message: 'Ошибка'});
	const theme = useTheme();
	const navigate = useNavigate();

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const handleLogin = async () => {
		if (username && password) {
			await user.login(username, password)
				.catch((reason) => {
					if (reason.response.data.code === 0) {
						setAlert({type: 'error', message: 'Данные не найдены'})
						setAlertOpen(true)
						return;
					}
				})
			await user.getAdmin();
			setAlert({type: 'success', message: 'Вы успешно авторизованы.'})
			setAlertOpen(true)
		} else {
			setAlert({type: 'error', message: 'Все поля должны быть заполнены!'})
			setAlertOpen(true)
		}

	}

	const handleClose = () => {
		setAlertOpen(false);
	}

	useEffect(() => {

		if (user.isAuth) {
			navigate('/profile')
		}
	}, [user.isAuth])

	return (
		<Box className={styles.columnFlex}>

			<BoldH>
				Вход в кабинет покупателя
			</BoldH>

			<Box>
				<Typography>
					Телефон или Email
				</Typography>
				<ProfileTextField
					sx={{width: '100%'}}
					value={username}
					onChange={handleUsernameChange}
				/>
				<Typography sx={{mt: 1}}>
					Пароль
				</Typography>
				<ProfileTextField
					sx={{width: '100%'}}
					type={'password'}
					value={password}
					onChange={handlePasswordChange}
				/>
			</Box>

			<Box className={styles.buttons}>
				<DefaultButton sx={{fontSize: 16, px: 2, height: '40px', fontWeight: 400}} onClick={handleLogin}>
					Войти
				</DefaultButton>

				<Button sx={{
					color:theme.palette.primary.secondary,
					textDecoration: 'underline',
					textTransform: 'none',
					fontSize: 16
				}}
					component={Link}
						to={'/reg'}
				>
					Зарегистрироваться
				</Button>
			</Box>


			<Snackbar
				open={alertOpen}
				autoHideDuration={3000}
				onClose={handleClose}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
			>
				<Alert variant={"filled"} onClose={handleClose} severity={alert.type} sx={{width: '100%'}}>
					{alert.message}
				</Alert>
			</Snackbar>

		</Box>
	);
});

export default LoginPage;