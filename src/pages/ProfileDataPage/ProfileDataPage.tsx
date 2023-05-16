import React, {useState} from 'react';
import {Box, Button, Collapse, TextField, Typography} from "@mui/material";
import styles from "../AdressPage/AdressPage.module.css";
import BoldH from "../../components/styled/BoldH";
import {ProfileTextField} from "../../components/styled/ProfileTextField";
import {DefaultButton} from "../../components/styled/DefaultButton";

const ProfileDataPage = () => {

	const [open, setOpen] = useState(false);
	const [user, setUser] = useState('');
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')

	const handleUserChange = (e) => {
		setUser(e.target.value);
	}

	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	}

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	}

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
						value={phone}
						onChange={handleEmailChange}
						sx={{width: '100%'}}
					/>
				</Box>


				<Box  onClick={() => setOpen(!open)} sx={{height: '60px', alignItems: 'center', display: 'flex'}}>
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
				</Collapse>

				<DefaultButton sx={{width: '200px', fontSize: 16, mb: 2}}>
					Сохранить изменения
				</DefaultButton>
			</Box>


		</Box>
	);
};

export default ProfileDataPage;