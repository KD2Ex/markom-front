import React, {useEffect, useState} from 'react';
import {Outlet, useLoaderData, useParams} from "react-router-dom";
import {
	Box,
	FormControl,
	Grid,
	InputLabel,
	List,
	ListItemButton,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography
} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import FilterItem from "./components/FIlterItem/FilterItem";
import {DefaultButton} from "../../components/styled/DefaultButton";
import Category from "./components/Category/Category";
import catalog from "../../store/catalog";
import category from "../../store/category";
import groupCategories from "../../store/groupCategories";
import {ICategory} from "../../models/ICategory";

export const loader = async () => {
	const categories: any = []; // await getCategories();
	console.log('loaded')
	return {categories};
}


const CatalogPage = () => {

	const {categories} = useLoaderData();
	const {id} = useParams();


	const [sortType, setSortType] = useState('');
	//title = title ?  title : groupCategories.groupCategories.find(item => item.value === id)?.title ;

	const ids = id?.split('_');
	let title = '';
	if (ids?.length === 1) {
		title = groupCategories.groupCategories.find(item => item.id === +ids[0])?.name
	} else if (ids) {
		title = category.categories.find(item => item.id === +ids[1])?.name
	} else {
		title = 'Каталог'
	}

	useEffect(() => {

		//const groupedCategories = groupCategories.groupCategories.map(item => item.categories.map(cat => cat))
	/*	const arr1d = [].concat(...groupedCategories);
		const values = arr1d.map(item => item.value)
		const cat = category.categories.filter(item => !values.includes(item.value))
		setTotalCategories(cat)*/
	}, [])

	const handleChange = (event: SelectChangeEvent) => {
		setSortType(event.target.value as string);
	}


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
					<InputLabel>Сортировка</InputLabel>
					<Select
						size={'small'}
						value={sortType}
						onChange={handleChange}
						label={'Сортировка'}
						sx={{
							minWidth: '200px'
						}}
					>

						<MenuItem value={''}>
							Сортировка
						</MenuItem>

						<MenuItem value={'asc'}>
							По возрастанию цены
						</MenuItem>
						<MenuItem value={'desc'}>
							По убыванию цены
						</MenuItem>
						<MenuItem value={'new'}>
							Сначала новые
						</MenuItem>
						<MenuItem value={'title'}>
							По названию
						</MenuItem>

					</Select>
				</FormControl>

			</Box>


			<Grid container>
				<Grid item xs={3}>

					<Typography variant={'h5'} fontWeight={600}>
						Фильтры
					</Typography>

					<List
						sx={{
							width: '100%',

						}}
					>
						<FilterItem title={'Цена'} filterElements={[<DefaultButton/>]}/>
					</List>

					<DefaultButton
						sx={{
							width: '100%',
						}}
					>
						Применить
					</DefaultButton>



					<List
						sx={{
							width: '100%',

						}}
					>
						{groupCategories.groupCategories.map(item => (
							<Category
								title={item.name}
								subCategories={category.categories.filter(cat => cat.group?.id === item.id)}
								value={item.id}
							/>
						))}

						{category.categories.filter((item) => item.group === null).map(item => (
							<Category
								title={item.name}
								value={'0_'+item.id}
							/>
						))}

					</List>

				</Grid>
				<Grid item xs={9}>
					<Outlet/>
				</Grid>
			</Grid>

		</div>
	);
};

export default CatalogPage;