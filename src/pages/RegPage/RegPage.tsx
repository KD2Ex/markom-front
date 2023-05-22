import React, {useState} from 'react';
import styles from "../LoginPage/LoginPage.module.css";
import BoldH from "../../components/styled/BoldH";
import {Box, Button, Typography, useTheme} from "@mui/material";
import {ProfileTextField} from "../../components/styled/ProfileTextField";
import {DefaultButton} from "../../components/styled/DefaultButton";
import {useNavigate} from "react-router-dom";
import user from "../../store/user";
import UserService from "../../api/services/UserService";

const RegPage = () => {


	const theme = useTheme();
	const navigate = useNavigate();

	const [user, setUser] = useState('');
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatPassword, setRepeatPassword] = useState('')

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

	const handleReg = async () => {

		const [lastName, firstName, patronymic] = user.split(' ')
		console.log(lastName, firstName, patronymic, phone, email, password)
		const result = await UserService.reg(lastName, firstName, patronymic, email, password, phone)
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
						Пароль
					</Typography>
					<ProfileTextField
						value={password}
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
				}}>
					У меня уже есть аккаунт
				</Button>

			</Box>

		</Box>
	);
};

export default RegPage;