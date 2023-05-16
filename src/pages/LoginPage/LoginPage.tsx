import React, {useState} from 'react';
import {Box, Button, Typography, useTheme} from "@mui/material";
import styles from './LoginPage.module.css'
import BoldH from "../../components/styled/BoldH";
import {SearchTextField} from "../../components/styled/SearchTextField";
import {DefaultButton} from "../../components/styled/DefaultButton";
import {ProfileTextField} from "../../components/styled/ProfileTextField";
import {useSearchParams, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import user from "../../store/user";



const LoginPage = observer(() => {

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const theme = useTheme();
	const navigate = useNavigate();

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const handleLogin = () => {
		user.login()
		navigate('/profile')
	}

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
				}}>
					Восстановить пароль
				</Button>
				<Button sx={{
					color:theme.palette.primary.secondary,
					textDecoration: 'underline',
					textTransform: 'none',
					fontSize: 16
				}}>
					Зарегистрироваться
				</Button>
			</Box>

		</Box>
	);
});

export default LoginPage;