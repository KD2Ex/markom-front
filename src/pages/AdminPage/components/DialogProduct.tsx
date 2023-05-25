import React, {useCallback, useState} from 'react';
import {
	Box,
	Button, Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	MenuItem,
	Select,
	TextField,
	Typography
} from "@mui/material";
import measurement from "../../../store/measurement";
import category from "../../../store/category";
import {IProduct} from "../../../models/IProduct";
import ProductService from "../../../api/services/ProductService";
import catalog from "../../../store/catalog";

const DialogProduct = ({open, setOpen}) => {

	const [unitId, setUnitId] = useState('');
	const [categoryId, setCategoryId] = useState('');
	const [name, setName] = useState('');
	const [price, setPrice] = useState(1);
	const [amount, setAmount] = useState(1);
	const [id, setId] = useState('');
	const [discount, setDiscount] = useState(0);
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');


	const handleClose = () => {

		setImage('');
		setName('')
		setOpen(false)
	}

	const handleAddProduct = async () => {
		const newProduct = {
			id: 1,
			title: name,
			price: price,
			amount: amount,
			discount: discount,
			description: description,
			image: image,
			categoryId: categoryId,
			measurementId: unitId,
		} as IProduct
		console.log('handled')
		console.log(await ProductService.addNewProduct(newProduct))
		await catalog.fetchProducts();
		handleClose();
	}

	const handleNameChange = useCallback((e) => {
		setName(e.target.value);
	}, [])

	const handleUnitChange = useCallback((e) => {
		setUnitId(e.target.value);
	}, [])

	const handleCategoryChange = useCallback((e) => {
		setCategoryId(e.target.value);
	}, [])

	const handlePriceChange = useCallback((e) => {
		setPrice(e.target.value);
	}, [])

	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	}

	const handleImageChange = (e) => {
		setImage(e.target.value);
	}

	const handleDiscountChange = (e) => {
		setDiscount(e.target.value);
	}

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	}

	return (
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
						<Typography >Изображение</Typography>
						<TextField
							value={image}
							onChange={handleImageChange}
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
	);
};

export default DialogProduct;