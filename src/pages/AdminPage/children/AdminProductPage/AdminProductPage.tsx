import React, {useCallback, useEffect, useMemo, useState} from 'react';
import catalog from "../../../../store/catalog";
import {IMeasurement} from "../../../../models/IMeasurement";
import measurement from "../../../../store/measurement";
import {ICategory} from "../../../../models/ICategory";
import category from "../../../../store/category";
import {DataGrid, GridActionsCellItem, GridRowParams} from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import ClearIcon from "@mui/icons-material/Clear";
import ProductService from "../../../../api/services/ProductService";
import {Box, Button} from "@mui/material";
import DialogProduct from "../../components/DialogProduct";
import {useForceUpdate} from "../../../../hooks/useForceUpdate";

const AdminProductPage = () => {

	const [open, setOpen] = useState(false);
	const forceUpdate = useForceUpdate();

	const rows = useMemo(() => catalog.products.map((item) => {
		return {
			id: item.id,
			image: item.image,
			title: item.title,
			price: item.price,
			amount: item.amount,
			measurementId: item.measurement.id,
			description: item.description,
			categoryId: item.category.id,
			discount: item.discount
		}
	}), [JSON.stringify(catalog.products), catalog.products.length]);
	//useMemo(() =>  ), [catalog.products.length, catalog.products]

/*	const [rows, setRows] = useState(catalog.products.map((item) => {
		return {
			id: item.id,
			image: item.image,
			title: item.title,
			price: item.price,
			amount: item.amount,
			measurementId: item.measurement.id,
			description: item.description,
			categoryId: item.category.id,
			discount: item.discount
		}
	}))*/

	const columns = useMemo(() => [
		{field: 'id', headerName: 'Артикул'},
		{field: 'image', headerName: 'Фото', editable: true,
			renderCell: (params) => (
				<img src={params.row.image} alt="" style={{width: '100%'}}/>
			)
		},
		{field: 'title', headerName: 'Название',editable: true},
		{field: 'price', headerName: 'Цена', editable: true, type: 'number'},
		{field: 'amount', headerName: 'Количество', editable: true, type: 'number'},
		{field: 'measurementId', headerName: 'Единицы измерения', editable: true, type: 'singleSelect',
			getOptionValue: (value: IMeasurement) => value.id, getOptionLabel: (value: IMeasurement) => value.name,
			valueOptions: measurement.measurements
		},
		{field: 'description', headerName: 'Описание', flex: 0.5, editable: true},
		{field: 'categoryId', headerName: 'Категория', editable: true, type: 'singleSelect',
			getOptionValue: (value: ICategory) => value.id, getOptionLabel: (value: ICategory) => value.name,
			valueOptions: category.categories
		},
		{field: 'discount', headerName: 'Скидка', editable: true, type:'number'},
		{field: 'actions', type:'actions', getActions: (params: GridRowParams) => [
				<GridActionsCellItem showInMenu={false} icon={<SaveIcon/>} label={'Сохранить'} onClick={handleSaveProduct(params.row)}/>,
				<GridActionsCellItem showInMenu={false} icon={<ClearIcon/>} label={'Удалить'} onClick={handleDeleteProduct(params.row)}/>
			]}

	], [])

	const handleSaveProduct = useCallback(
		(row: GridRowParams) => async () => {

			console.log(row.id)
			console.log(await ProductService.updateProduct(row))
			await catalog.fetchProducts();
			console.log(rows)
		},
		[]
	)

	const handleDeleteProduct =  useCallback(
		(row: GridRowParams) => async () => {

			console.log(row.id)
			console.log(await ProductService.deleteProduct(row.id))
			await catalog.fetchProducts();
			console.log(rows)
			setOpen(false)
			forceUpdate()
		},
		[]
	)

	const handleOpenDialog = () => {
		setOpen(true);
	}

	useEffect(() => {
		console.log('render')
	}, [rows, columns])


	return (
		<div>
			<Button variant={'contained'} onClick={handleOpenDialog}>
				Добавить товар
			</Button>

			<DialogProduct open={open} setOpen={setOpen}/>

			<Box sx={{width: '100%', height: '80vh'}}>
				<DataGrid
					columns={columns}
					rows={rows}
					processRowUpdate={(newRow, oldRow) => {
						//console.log(newRow)
						let product = catalog.products.find((item) => item.id === newRow.id)
						return newRow
					}}
					autoPageSize={true}
				>

				</DataGrid>
			</Box>

			{/*<Button variant={'contained'} onClick={hand}>
				Сохранить изменения
			</Button>*/}
		</div>
	);
};

export default AdminProductPage;