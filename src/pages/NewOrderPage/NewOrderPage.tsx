import React, {useState} from 'react';
import {Box, Divider, FormControlLabel, Grid, Radio, RadioGroup, Typography} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import {DefaultButton} from "../../components/styled/DefaultButton";
import {ProfileTextField} from "../../components/styled/ProfileTextField";

const NewOrderPage = () => {

	const [user, setUser] = useState(null);

	return (
		<Grid container>
			<Grid item xs={6}>
				<BoldH>
					Оформление заказа
				</BoldH>

				<Box sx={{
					display: user ? 'flex' : 'none',
				}}>
					<Typography sx={{
						fontWeight: 'bold',
						fontSize: 18
					}}>
						Вы авторизовались как
					</Typography>
					<Typography>
						89002818784
					</Typography>
					<Typography>
						kountdown@mail.ru
					</Typography>
					<DefaultButton>
						Выход
					</DefaultButton>
				</Box>

				<Box sx={{
					display: user ? 'none' : 'flex',
					flexDirection: 'column'
				}}>
					<Typography sx={{
						fontWeight: 'bold',
					}}>
						Доставка
					</Typography>

					<Box>
						<Typography>
							Населенный пункт
						</Typography>
						<ProfileTextField/>
					</Box>

					<RadioGroup>
						<FormControlLabel sx={{'&>:nth-child(2)': {width: '100%'}, py: 2,}} value="selfDelivery" control={<Radio />} label={
							<Box sx={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '100%',
								px: 1
							}}>
								<Box>
									<Typography sx={{
										fontWeight: 'bold',
										fontSize: 20
									}}>
										Самовывоз
									</Typography>
									<Typography>На пункте выдачи</Typography>
								</Box>
								<Typography sx={{
									fontWeight: 'bold',
									fontSize: 20
								}}>
									+ 0 ₽
								</Typography>
							</Box>
						} />
						<FormControlLabel sx={{
							'&>:nth-child(2)': {width: '100%'},
							py: 2,

						}} value="courier" control={<Radio />} label={
							<Box sx={{
								display: 'flex',
								justifyContent: 'space-between',
								width: '100%',
								px: 1
							}}>
								<Box sx={{
									display: 'flex',
									justifyContent: 'center',
									flexDirection: 'column'
								}}>
									<Typography sx={{
										fontWeight: 'bold',
										fontSize: 20
									}}>
										Курьером
									</Typography>
									<Typography>Доставка курьером</Typography>
								</Box>
								<Typography sx={{
									fontWeight: 'bold',
									fontSize: 20
								}}>
									+ 0 ₽
								</Typography>
							</Box>
						} />
					</RadioGroup>

				</Box>

			</Grid>
			<Divider orientation="vertical"/>
			<Grid item xs={6}>

			</Grid>
		</Grid>
	);
};

export default NewOrderPage;