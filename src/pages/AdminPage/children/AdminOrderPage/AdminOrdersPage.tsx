import React, {useCallback, useEffect, useMemo, useState} from 'react';
import order from "../../../../store/order";
import {DataGrid, GridActionsCellItem, GridRowParams} from "@mui/x-data-grid";
import catalog from "../../../../store/catalog";
import {Box, Button, Grid, MenuItem, Select, Typography} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ProductItem from "./components/ProductItem";
import OrderService from "../../../../api/services/OrderService";
import {OrderStatus} from "../../../../models/enums/OrderStatus";
import DialogOrder from "./components/DialogOrder";
import {useForceUpdate} from "../../../../hooks/useForceUpdate";
import BoldH from "../../../../components/styled/BoldH";
import UserInfo from "./components/UserInfo";


export const loader = async () => {
	await order.fetchOrders();
	return null
}

const AdminOrdersPage = () => {

	const [rowSelectionModel, setRowSelectionModel] = useState();
	const [statusId, setStatusId] = useState(1);
	const [open, setOpen] = useState(false);
	const [changingOrder, setChangingOrder] = useState();
	const forceUpdate = useForceUpdate();
	const status = [
		{id: 1, name: 'Создан', disabled: true},
		{id: 2, name: 'Отменён'},
		{id: 3, name: 'Принят'},
		{id: 4, name: 'Выдан'},
	]

	const handleChangeStatus = (e) => {
		//console.log(rowSelectionModel)
		//const selectedOrder = order.orders.find(item => item.id === rowSelectionModel[0])
		setOpen(true)
	}

	const rows = useMemo(() => order.orders.map((item) => {
		return {
			id: item.id,
			cost: item.cost,
			orderDate: new Date(item.orderDate.slice(0, -1)).toLocaleString() ,
			status: item.status.id,
			cash: item.cash
		}
	}), [JSON.stringify(order.orders)]);

	const columns = useMemo(() => [
		{field: 'id', headerName: 'Id'},
		{field: 'cost', headerName: 'Стоимость'},
		{field: 'orderDate', headerName: 'Дата', flex: 2},
		{field: 'cash', headerName: ' Способ оплаты', flex: 1,
			renderCell: (params) => (
				<p>{params.value ? 'Наличные' : 'Банковской картой'}</p>
			)
		},
		{
			field: 'status',
			headerName: 'Статус',
			editable: false,
			flex: 1,
			renderCell: (params) => (
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%'
				}}>
					<p>{status.find(item => item.id === params.row.status).name}</p>
					<Button
						onClick={handleChangeStatus}
					>
						Изменить статус
					</Button>
				</Box>
			)
		},
		{field: 'actions', type:'actions', getActions: (params: GridRowParams) => [
				/*<GridActionsCellItem showInMenu={false} icon={<SaveIcon/>} label={'Сохранить'} onClick={handleSaveProduct(params.row)}/>,*/
				<GridActionsCellItem showInMenu={false} icon={<ClearIcon/>} label={'Удалить'} onClick={handleDeleteProduct(params.row)}/>
			]}

	], [])

	const handleSaveProduct = useCallback(
		(row: GridRowParams) => async () => {
			console.log(row)
			console.log(await OrderService.changeStatus(row.id, OrderStatus[row.status - 2]))

		},
		[]
	)

	const handleDeleteProduct =  useCallback(
		(row: GridRowParams) => async () => {

			console.log(await OrderService.deleteOrder(row.id))
			await order.fetchOrders();
			forceUpdate();

		},
		[]
	)

	useEffect(() => {

		(async () => {
			await order.fetchOrders();
			console.log(order.orders)
		})()
	}, [])

	useEffect(() => {

	}, [JSON.stringify(rowSelectionModel)])

	return (
		<>
			<Grid container spacing={2}>

				<Grid item xs={8}>

				<Box sx={{width: '100%'}}>
					<DataGrid
						columns={columns}
						rows={rows}
						processRowUpdate={(newRow, oldRow) => {
							//console.log(newRow)
							let product = catalog.products.find((item) => item.id === newRow.id)
							return newRow
						}}
						rowSelectionModel={rowSelectionModel}
						onRowSelectionModelChange={(newRow) => {
							console.log(newRow)
							setRowSelectionModel(newRow)
							//setChangingOrder(order.orders.find(item => item.id === newRow[0]))
						}}
						onRowClick={(props) => {
							console.log(props)
							setChangingOrder(props.row)
						}}
					>

					</DataGrid>




				</Box>
				</Grid>


				<Grid item xs={4} sx={{

				}}>
					{rowSelectionModel && rowSelectionModel.length > 0 ?
						<UserInfo rowSelectionModel={rowSelectionModel}/>
						: <Box sx={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							border: '4px dashed rgba(0,0,0,0.2)',
							width: '100%',
							height: '100%',
							bgcolor: 'rgb(248,248,247)'
						}}>
							<BoldH sx={{
								justifyContent: 'center',
								alignItems: 'center',
								color: 'rgba(0,0,0,0.6)',

							}}>
								Выберите заказ
							</BoldH>
						</Box>
					}
				</Grid>

			</Grid>


			<DialogOrder order={changingOrder ? changingOrder : null} open={open} setOpen={setOpen}/>

		</>
	);
};

export default AdminOrdersPage;