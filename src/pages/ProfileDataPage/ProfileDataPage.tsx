import React, {useEffect, useState} from 'react';
import {Alert, Box, Button, Collapse, Snackbar, TextField, Typography} from "@mui/material";
import styles from "../AdressPage/AdressPage.module.css";
import BoldH from "../../components/styled/BoldH";
import {ProfileTextField} from "../../components/styled/ProfileTextField";
import {DefaultButton} from "../../components/styled/DefaultButton";
import UserService from "../../api/services/UserService";

const ProfileDataPage = () => {

	const [open, setOpen] = useState(false);
	const [alertOpen, setAlertOpen] = useState(false);
	const [alert, setAlert] = useState({type: 'error', message: 'Ошибка'});
	const [user, setUser] = useState('');
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const [address, setAddress] = useState('')



	const handleUserChange = (e) => {
		setUser(e.target.value);
	}

	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	}

	const handleClose = () => {
		setAlertOpen(false);
	}

	const handleSaveChanges = async () => {

		if (user && phone && email && address) {
			console.log(await UserService.updateProfile(user, email, phone, address))
			setAlert({type: 'success', message: 'Данные успешно изменены.'})
			setAlertOpen(true)
		} else {
			setAlert({type: 'error', message: 'Все поля должны быть заполнены!'})
			setAlertOpen(true)
		}

	}


	useEffect(() => {
		(async () => {

			const profile = await UserService.getProfile();

			setAddress(profile.address);
			setUser(profile.fullName);
			setPhone(profile.phone);
			setEmail(profile.login)

		})();
	}, [])

	return (
		<Box className={styles.box}>
			<BoldH>
				Контакты
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
				{/*<Box  onClick={() => setOpen(!open)} sx={{height: '60px', alignItems: 'center', display: 'flex'}}>
					<Typography sx={{fontSize: 18}}>
						Сменить пароль
					</Typography>
				</Box>


				<Collapse in={open} sx={{mb: open && 2}}>
					<Box sx={{mb: 1}}>
						<Typography>
							Старый пароль
						</Typography>
						<ProfileTextField
							value={user}
							onChange={handleUserChange}
							sx={{width: '100%'}}
						/>
					</Box>

					<Box sx={{mb: 1}}>
						<Typography>
							Пароль
						</Typography>
						<ProfileTextField
							value={phone}
							onChange={handlePhoneChange}
							sx={{width: '100%'}}
						/>
					</Box>

					<Box>
						<Typography>
							Повторите пароль
						</Typography>
						<ProfileTextField
							value={phone}
							onChange={handleEmailChange}
							sx={{width: '100%'}}
						/>
					</Box>
				</Collapse>*/}

				<DefaultButton
					sx={{width: '200px', fontSize: 16, my: 2}}
					onClick={handleSaveChanges}
				>
					Сохранить изменения
				</DefaultButton>
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

export default ProfileDataPage;