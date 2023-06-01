import React, {useEffect, useState} from 'react';
import {
	Box,
	IconButton,
	Paper,
	styled,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import {observer} from "mobx-react-lite";
import order from "../../store/order";
import OrderService from "../../api/services/OrderService";
import {KeyboardArrowDown} from "@mui/icons-material";
import {KeyboardArrowUp} from "@mui/icons-material";
import Row from "./components/Row/Row";


const OrdersPage = observer(() => {



	useEffect(() => {

		(async () => {
			await order.fetchOrders();


		})();

	}, [])

	return (
		<Box>
			<BoldH sx={{mb: 4}}>
				История заказов
			</BoldH>

			<TableContainer sx={{
				border: '1px solid ',
				borderColor: 'rgba(0,0,0, 0.2)',
				borderRadius: 1,
				mb: 4
			}}>
				<Table size={'small'} sx={{minWidth: '100%', fontSize: 16}}>
					<caption style={{textAlign: 'end', fontSize: 17}}>
						Сумма заказов: {order.orders.reduce(((prev, next) => prev + next.cost), 0)} ₽
					</caption>
					<TableHead>
						<TableRow sx={{'*': {fontSize: 17,color: 'rgba(0, 0, 0, 0.5)'}} }>
							<TableCell></TableCell>
							<TableCell>Дата оформления</TableCell>
							<TableCell>Номер заказа</TableCell>
							<TableCell>Статус</TableCell>
							<TableCell align={'right'}>Сумма заказа</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
							{order.orders.map((order) => (
								<Row order={order}/>
							))}
						</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
});

export default OrdersPage;