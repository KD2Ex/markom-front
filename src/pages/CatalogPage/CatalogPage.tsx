import React, {useEffect, useState} from 'react';
import {Outlet, useLoaderData, useParams, useSearchParams} from "react-router-dom";
import {
	Box,
	FormControl,
	Grid, Input,
	InputLabel,
	List,
	MenuItem,
	Select,
	SelectChangeEvent, Slider, TextField,
	Typography
} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import FilterItem from "./components/FIlterItem/FilterItem";
import {DefaultButton} from "../../components/styled/DefaultButton";
import category from "../../store/category";
import groupCategories from "../../store/groupCategories";
import CategoryList from "./components/CategoryList/CategoryList";

export const loader = async () => {
	console.log('loaded')
	return null;
}

const CatalogPage = () => {

	const {id} = useParams();


	const [sortType, setSortType] = useState('');
	const [price, setPrice] = useState([0, 100000])

	const [items, setItems] = useState([])
	const [searchParams, setSearchParams] = useSearchParams();

	const ids = id?.split('_');
	let title = '';
	if (ids?.length === 1) {
		title = groupCategories.groupCategories.find(item => item.id === +ids[0])?.name
	} else if (ids) {
		title = category.categories.find(item => item.id === +ids[1])?.name
	} else {
		title = 'Каталог'
	}

	const handleStartCostChange = (e) => {
		setPrice(price => [e.target.value, price[1]])
	}
	const handleEndCostChange = (e) => {
		setPrice(price => [price[0], e.target.value])
	}

	const handleCostSliderChange = (event, newValue, ) => {
		/*setStartPrice(newValue[0])
		setEndPrice(newValue[1])*/
		setPrice(newValue)
	}

	const handleChange = (event: SelectChangeEvent) => {
		setSortType(event.target.value as string);
		setSearchParams({startPrice: price[0], endPrice: price[1], sortType: event.target.value})
	}

	const handleFilterApply = () => {
		setSearchParams({startPrice: price[0], endPrice: price[1], sortType: sortType})
	}

	useEffect(() => {
		window.scroll({top: 0, left: 0, behavior: 'smooth'})


	}, [])


	return (
		<div>

			<Box
				sx={{
					display:'flex',
					justifyContent: 'space-between',
					mb: 2
				}}
			>

				<BoldH>
					{title}
				</BoldH>
				<FormControl>
					<InputLabel size={'small'}>Сортировка</InputLabel>
					<Select
						size={'small'}
						value={sortType}
						onChange={handleChange}
						label={'Сортировка'}
						sx={{
							minWidth: '200px'
						}}
					>

						<MenuItem value={''} >
							Сортировка
						</MenuItem>

						<MenuItem value={'asc'}>
							По возрастанию цены
						</MenuItem>
						<MenuItem value={'desc'}>
							По убыванию цены
						</MenuItem>

						<MenuItem value={'title'}>
							По названию
						</MenuItem>

					</Select>
				</FormControl>

			</Box>


			<Grid container spacing={4}>
				<Grid item xs={3}>

					<Typography variant={'h5'} fontWeight={600}>
						Фильтры
					</Typography>

					<List
						sx={{
							width: '100%',

						}}
					>
						<FilterItem title={'Цена'} filterElements={[<>
							<Slider
								size="small"
								value={price}
								onChange={handleCostSliderChange}
								aria-label="Small"
								valueLabelDisplay="auto"
								max={100000}
								min={0}
								step={10}
							/>

							<Box sx={{
								display: 'flex',
								justifyContent: 'space-between',
								gap: 1
							}}>
								<TextField
									variant={'outlined'}
									value={price[0]}
									onChange={handleStartCostChange}
									type={'number'}
								></TextField>
								<TextField
									variant={'outlined'}
									value={price[1]}
									onChange={handleEndCostChange}
									type={'number'}
								></TextField>
							</Box>


						</>]}/>
					</List>

					<DefaultButton
						sx={{
							width: '100%',
						}}
						onClick={handleFilterApply}
					>
						Применить
					</DefaultButton>


					<CategoryList/>


				</Grid>
				<Grid item xs={9}>
					<Outlet/>
				</Grid>
			</Grid>

		</div>
	);
};

export default CatalogPage;