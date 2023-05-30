import React from 'react';
import BoldH from "../../components/styled/BoldH";
import {Box, Typography} from "@mui/material";

const ContactsPage = () => {
	return (
		<Box sx={{
			display: 'flex',
			flexDirection: 'column',
			gap: 2
		}}>
			<BoldH>
				Контакты
			</BoldH>
			<Typography>
				Телефон отдела продаж: +7(800) 800-80-80 (многоканальный)
			</Typography>
			<Typography>
				Телефон отдела оптовых продаж: +7(800) 800-80-80
			</Typography>
			<Typography>
				Email: plastprime@plastprime.ru
			</Typography>

			<Typography fontStyle={'italic'} fontWeight={'bold'}>
				Адрес:
			</Typography>

			<Typography>
				Вы можете найти нас по адресу: г. Краснодар, ул. Российская, дом 80, офис 120
			</Typography>

			<Typography fontWeight={'bold'}>
				График работы офиса и склада
			</Typography>

			<ul style={{
				listStyle: 'none',
				padding: 0,
				margin: 0
			}}>
				<li>Понедельник с 9:00 до 21:00</li>
				<li>Вторник с 9:00 до 21:00</li>
				<li>Среда с 9:00 до 21:00</li>
				<li>Четверг с 9:00 до 21:00</li>
				<li>Пятница с 9:00 до 21:00</li>
				<li>Суббота с 10:00 до 20:00</li>
				<li>Воскресенье с 10:00 до 20:00</li>
			</ul>

			<Typography fontWeight={'bold'}>
				Реквизиты:
			</Typography>

			<Typography>
				ИП Иванов Иван Иванович
			</Typography>

			<Typography>
				ОГРНИП: 123456789012345
			</Typography>

			<Typography>
				ИНН: 123456789012
			</Typography>

			<Typography>
				КПП: 123456789
			</Typography>
		</Box>
	);
};

export default ContactsPage;