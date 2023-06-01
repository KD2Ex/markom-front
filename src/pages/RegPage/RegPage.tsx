import React, {useState} from 'react';
import styles from "../LoginPage/LoginPage.module.css";
import BoldH from "../../components/styled/BoldH";
import {Alert, Box, Button, Snackbar, Typography, useTheme} from "@mui/material";
import {ProfileTextField} from "../../components/styled/ProfileTextField";
import {DefaultButton} from "../../components/styled/DefaultButton";
import {Link, useNavigate} from "react-router-dom";
import UserService from "../../api/services/UserService";

const RegPage = () => {


	const theme = useTheme();
	const navigate = useNavigate();

	const [user, setUser] = useState('');
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')
	const [address, setAddress] = useState('')
	const [alertOpen, setAlertOpen] = useState(false);
	const [alert, setAlert] = useState({type: 'error', message: 'Ошибка'});

	const handleClose = () => {
		setAlertOpen(false);
	}

	const handleUserChange = (e) => {
		setUser(e.target.value);
	}

	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	}

	const handleRepeatPasswordChange = (e) => {
		setRepeatPassword(e.target.value);
	}

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	}

	const handleReg = async () => {

		//const [lastName, firstName, patronymic] = user.split(' ')
		//console.log(lastName, firstName, patronymic, phone, email, password)
		if (user && email && password && phone && address ) {

			if (password !== repeatPassword) {
				setAlert({type: 'error', message: 'Пароли не совпадают!'})
				setAlertOpen(true)
				return;
			}

			console.log(await UserService.reg(user, email, password, phone, address))
			navigate('/profile');
		} else {
			setAlert({type: 'error', message: 'Все поля должны быть заполнены!'})
			setAlertOpen(true)
		}
	}

	return (
		<Box className={styles.columnFlex}>

			<BoldH>
				Регистрация
			</BoldH>

			<Box>
				<Box sx={{mb: 1}}>
					<Typography>
						Контактное лицо (ФИО)
					</Typography>
					<ProfileTextField
						value={user}
						onChange={handleUserChange}
						sx={{width: '100%'}}
					/>
				</Box>

				<Box sx={{mb: 1}}>
					<Typography>
						Контактный телефон
					</Typography>
					<ProfileTextField
						value={phone}
						onChange={handlePhoneChange}
						sx={{width: '100%'}}
					/>
				</Box>

				<Box>
					<Typography>
						Email
					</Typography>
					<ProfileTextField
						value={email}
						onChange={handleEmailChange}
						sx={{width: '100%'}}
					/>
				</Box>

				<Box>
					<Typography>
						Адрес доставки
					</Typography>
					<ProfileTextField
						value={address}
						onChange={handleAddressChange}
						sx={{width: '100%'}}
					/>
				</Box>

				<Box>
					<Typography>
						Пароль
					</Typography>
					<ProfileTextField
						value={password}
						type={'password'}
						onChange={handlePasswordChange}
						sx={{width: '100%'}}
					/>
				</Box>
				<Box>
					<Typography>
						Повторите пароль
					</Typography>
					<ProfileTextField
						value={repeatPassword}
						type={'password'}
						onChange={handleRepeatPasswordChange}
						sx={{width: '100%'}}
					/>
				</Box>
			</Box>

			<Box className={styles.buttons}>
				<DefaultButton sx={{fontSize: 16, px: 2, height: '40px', fontWeight: 400}}
					onClick={handleReg}
				>
					Зарегистрироваться
				</DefaultButton>
				<Button sx={{
					color:theme.palette.primary.secondary,
					textDecoration: 'underline',
					textTransform: 'none',
					fontSize: 16
				}}
						component={Link}
						to={'/login'}
				>
					У меня уже есть аккаунт
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
};

export default RegPage;