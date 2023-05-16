import React from 'react';
import {Box, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import {observer} from "mobx-react-lite";
import order from "../../store/order";


const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
	// hide last border
	'&:last-child td, &:last-child th': {
		border: 0,
	},
	'*': {
		fontSize: 17
	}
}));

const OrdersPage = observer(() => {



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
					<caption style={{textAlign: 'end', fontSize: 17}}>Сумма заказов</caption>
					<TableHead>
						<TableRow sx={{'*': {fontSize: 17,color: 'rgba(0, 0, 0, 0.5)'}} }>
							<TableCell>Дата оформления</TableCell>
							<TableCell>Номер заказа</TableCell>
							<TableCell>Статус</TableCell>
							<TableCell>Оплата</TableCell>
							<TableCell align={'right'}>Сумма заказа</TableCell>
						</TableRow>
					</TableHead>

					<TableBody>
							{order.orders.map((order) => (
								<StyledTableRow key={order.id}>
									<TableCell>{order.date.toLocaleString()}</TableCell>
									<TableCell>{order.id}</TableCell>
									<TableCell>{order.status}</TableCell>
									<TableCell>{order.isPayed}</TableCell>
									<TableCell align={'right'}>{order.cost}₽</TableCell>
								</StyledTableRow>
							))}
						</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
});

export default OrdersPage;