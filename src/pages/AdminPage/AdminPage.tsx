import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
	Box,
	Button,
	Container,
	Dialog, DialogActions,
	DialogContent,
	DialogTitle,
	MenuItem,
	Select, Tabs, Tab,
	TextField,
	Typography
} from "@mui/material";
import {DataGrid, GridActionsCellItem, GridRowId, GridRowParams} from '@mui/x-data-grid';
import catalog from "../../store/catalog";
import ProductService from "../../api/services/ProductService";
import { observer } from 'mobx-react-lite';
import measurement from "../../store/measurement";
import category from "../../store/category";
import {IProduct} from "../../models/IProduct";
import {ICategory} from "../../models/ICategory";
import {useFetchData} from "../../hooks/useFetch";
import {IMeasurement} from "../../models/IMeasurement";
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';
import DialogProduct from "./components/DialogProduct";
import {Link, Outlet, useLocation} from 'react-router-dom'

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