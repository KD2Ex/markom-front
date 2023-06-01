import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
	Box,
	Button,
} from "@mui/material";
import { observer } from 'mobx-react-lite';
import {useFetchData} from "../../hooks/useFetch";
import {Link, Navigate, Outlet, useLocation} from 'react-router-dom'
import user from "../../store/user";

export const loader = async () => {
	await useFetchData()
	console.log('admin loader')
	return null;
}

const AdminPage = observer(() => {


	useEffect(() => {
		console.log('first render')
	}, [])

	const location = useLocation();


/*	if (!user.isAdmin) {
		return <Navigate to={'/'}/>
	}*/

	return (
		<div>
			<Box sx={{
				display: 'flex',
				mb: 2
			}}>
				<Box sx={{
					flexGrow: 1,
					display: 'flex',
					gap: 1
				}}>
					<Button
						component={Link}
						to={'/admin/products'}
						variant={location.pathname.split('/')[2] === 'products' ?
							'contained' : 'outlined'}
					>
						Продукты
					</Button>
					<Button
						component={Link}
						to={'/admin/orders'}
						variant={location.pathname.split('/')[2] === 'orders' ?
							'contained' : 'outlined'}
					>
						Заказы
					</Button>
				</Box>

				<Button
					component={Link}
					to={'/'}
					sx={{
						flexGrow: 0
					}}
				>
					Вернуться на основную страницу
				</Button>
			</Box>

			<Outlet/>
		</div>
	);
});

export default AdminPage;