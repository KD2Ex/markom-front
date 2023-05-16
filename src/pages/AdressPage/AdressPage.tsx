import React, {useState} from 'react';
import {Box, TextField, Typography} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import {DefaultButton} from "../../components/styled/DefaultButton";
import {ProfileTextField} from "../../components/styled/ProfileTextField";
import styles from './AdressPage.module.css'

const AdressPage = () => {

	const [city, setCity] = useState('');
	const [address, setAddress] = useState('')

	const handleCityChange = (e) => {
		setCity(e.target.value);
	}

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	}

	return (
		<Box className={styles.box}>
			<BoldH>
				Адрес доставки
			</BoldH>


			<Box>

				<Box sx={{mb: 1}}>
					<Typography>
						Населенный пункт
					</Typography>
					<ProfileTextField
						value={city}
						onChange={handleCityChange}
						sx={{width: '100%'}}
					/>
				</Box>

				<Box>

					<Typography>
						Населенный пункт
					</Typography>
					<TextField
						value={address}
						onChange={handleAddressChange}
						multiline
						sx={{width: '100%'}}
					/>
				</Box>
			</Box>

			<DefaultButton sx={{width: '200px', fontSize: 16}}>
				Сохранить изменения
			</DefaultButton>
		</Box>
	);
};

export default AdressPage;