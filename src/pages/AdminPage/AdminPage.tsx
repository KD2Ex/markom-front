import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {
	Box,
	Button,
	Container,
	Dialog, DialogActions,
	DialogContent,
	DialogTitle,
	MenuItem,
	Select,
	TextField,
	Typography
} from "@mui/material";
import {DataGrid, GridActionsCellItem, GridRowId, GridRowParams} from '@mui/x-data-grid';
import catalog from "../../store/catalog";
import ProductService from "../../api/services/ProductService";
import {ProfileTextField} from "../../components/styled/ProfileTextField";
import { observer } from 'mobx-react-lite';
import measurement from "../../store/measurement";
import category from "../../store/category";
import {IProduct} from "../../models/IProduct";
import {ICategory} from "../../models/ICategory";
import {useFetchData} from "../../hooks/useFetch";
import {IMeasurement} from "../../models/IMeasurement";
import SaveIcon from '@mui/icons-material/Save';
import ClearIcon from '@mui/icons-material/Clear';

export const loader = async () => {
	await useFetchData()
	return null;
}

const AdminPage = observer(() => {

	const [open, setOpen] = useState(false);
	const [unitId, setUnitId] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState(1);
	const [amount, setAmount] = useState(1);
	const [id, setId] = useState('');
	const [discount, setDiscount] = useState(0);
	const [description, setDescription] = useState('');

	const rows = catalog.products.map((item) => {
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
	});

		//useMemo(() =>  ), [catalog.products.length, catalog.products]

	const columns = useMemo(() => [
		{field: 'id', headerName: 'Артикул', editable: true},
		{field: 'image', headerName: 'Фото'},
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
	},
		[]
	)

	const handleOpenDialog = () => {
		setOpen(true);
	}

	const handleClose = () => {
		setOpen(false)
	}



	const handleAddProduct = async () => {
		const newProduct = {
			id: Number(id),
			title: name,
			price: price,
			amount: amount,
			discount: discount,
			description: description,
			image: '',
			categoryId: categoryId,
			measurementId: unitId,
			quantityInCar: 0
		} as IProduct
		console.log(await ProductService.addNewProduct(newProduct))
		await catalog.fetchProducts();
		handleClose();
	}

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleUnitChange = (e) => {
		setUnitId(e.target.value);
	}

	const handleCategoryChange = (e) => {
		setCategoryId(e.target.value);
	}

	const handlePriceChange = (e) => {
		setPrice(e.target.value);
	}

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	}

	const handleIdChange = (e) => {
		setId(e.target.value);
	}

	const handleDiscountChange = (e) => {
		setDiscount(e.target.value);
	}

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	}

	useEffect(() => {
		console.log('render')
	}, [rows, columns])

	return (
		<div>
			<Button variant={'contained'} sx={{bgcolor: '#7c8fbe'}} onClick={handleOpenDialog}>
				Добавить товар
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				fullWidth
				maxWidth={'xl'}
			>
				<DialogTitle>
					Добавление товара
				</DialogTitle>
				<DialogContent>
					<Typography>Название товара</Typography>
					<TextField sx={{width: '100%', mb: 2}}
						value={name}
							   onChange={handleNameChange}
					/>

					<Box sx={{
						display: 'flex',
						gap: 2,
						justifyContent: 'space-between'
					}}>
						<Box>
							<Typography>Цена</Typography>
							<TextField
								type={'number'}
								value={price}
								onChange={handlePriceChange}
							/>
						</Box>

						<Box sx={{flexGrow: 0}}>
							<Typography>
								Количество
							</Typography>
							<Box sx={{
								display: 'flex'
							}}>
								<TextField
									type={'number'}
									value={amount}
									onChange={handleAmountChange}
								/>
								<Select sx={{width: '70px'}}
										value={unitId}
										size={'small'}
										onChange={handleUnitChange}
								>
									{measurement.measurements.map((item) => (
										<MenuItem value={item.id}>{item.name}</MenuItem>
									))}
								</Select>
							</Box>

						</Box>

						<Box>
							<Typography>Категория</Typography>
							<Select sx={{width: '250px'}}
								value={categoryId}
								onChange={handleCategoryChange}
							>
								{category.categories.map((item) => (
									<MenuItem value={item.id}>{item.name}</MenuItem>
								))}
							</Select>
						</Box>

						<Box>
							<Typography >Артикул</Typography>
							<TextField
								value={id}
								onChange={handleIdChange}
							/>
						</Box>

						<Box>
							<Typography >Скидка</Typography>
							<TextField
								value={discount}
								onChange={handleDiscountChange}
								type={'number'} />
						</Box>

					</Box>

					<Box >
						<Typography >Описание</Typography>
						<TextField
							value={description}
							onChange={handleDescriptionChange}
							fullWidth multiline/>
					</Box>

				</DialogContent>
				<DialogActions>
					<Button variant={'contained'} onClick={handleAddProduct}>
						Добавить
					</Button>
					<Button onClick={handleClose}>
						Отмена
					</Button>
				</DialogActions>
			</Dialog>

			<Box sx={{width: '100%'}}>
				<DataGrid
					columns={columns}
					rows={rows}
					processRowUpdate={(newRow, oldRow) => {
						//console.log(newRow)
						let product = catalog.products.find((item) => item.id === newRow.id)
						return newRow
					}}
					onCellEditStop={(params, event) => {
						//console.log(params)
						//console.log(event)
					}}
				>

				</DataGrid>
			</Box>

			{/*<Button variant={'contained'} onClick={hand}>
				Сохранить изменения
			</Button>*/}

		</div>
	);
});

export default AdminPage;