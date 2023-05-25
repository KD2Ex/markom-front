import React, {FC, useEffect, useState} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select} from "@mui/material";
import {IOrder} from "../../../../../models/IOrder";
import {OrderStatus} from "../../../../../models/enums/OrderStatus";
import OrderService from "../../../../../api/services/OrderService";

interface DialogOrderProps {
	order: IOrder,
	open: boolean,
	setOpen: any
}

const DialogOrder: FC<DialogOrderProps> = ({order, open, setOpen}) => {

	const [statusId, setStatusId] = useState(1);

	const status = [
		{id: 1, name: 'Создан', disabled: true},
		{id: 2, name: 'Отменён'},
		{id: 3, name: 'Принят'},
		{id: 4, name: 'Выдан'},
	]

	const handleStatusChange = (e) => {
		setStatusId(e.target.value)
		console.log(e.target.value)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleSave = async () => {
		console.log(await OrderService.changeStatus(order.id, OrderStatus[statusId - 2]))
		order.status = statusId;
		setOpen(false)
	}

	useEffect(() => {
		setStatusId(order?.status)
	}, [])

	useEffect(() => {
		setStatusId(order?.status)
	}, [open])

	if (order) {

		return (
			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
			>
				<DialogTitle>
					Заказ № {order.id}
				</DialogTitle>
				<DialogContent>
					<Select
						value={statusId ?? " "}
						onChange={handleStatusChange}
						sx={{
							width: '100%'
						}}>
						{status.map(item => (
							<MenuItem value={item.id} disabled={item.id === 1 ? true : false}>
								{item.name}
							</MenuItem>
						))}
					</Select>
				</DialogContent>
				<DialogActions>
					<Button
						variant={'contained'}
						onClick={handleSave}
					>
						Сохранить
					</Button>
					<Button
						onClick={handleClose}
					>
						Отмена
					</Button>
				</DialogActions>
			</Dialog>
		);
	}

	return <></>

};

export default DialogOrder;