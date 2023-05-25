import React, {useEffect, useState} from 'react';
import {useLoaderData, useSearchParams} from 'react-router-dom';
import {Grid} from "@mui/material";
import ProductCard from "../../../components/ProductCard/ProductCard";
import catalog from "../../../store/catalog";
import {IProduct} from "../../../models/IProduct";
import {Simulate} from "react-dom/test-utils";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import banana from '../../../assets/banana.png'
import category from "../../../store/category";
import groupCategories from "../../../store/groupCategories";
import {useFetchData} from "../../../hooks/useFetch";
import load = Simulate.load;
import BoldH from "../../../components/styled/BoldH";

export const loader = async ({ params }) => {
	await useFetchData();
	console.log(params)
	const grouped = params.id.split('_');
	console.log(grouped)
	let loadedProducts: IProduct[] = []
	if (grouped.length === 1) {
		loadedProducts = catalog.products.filter(product => product.category.group?.id === Number(grouped[0]))
	} else {
		loadedProducts = catalog.products.filter(product => product.category.id === Number(grouped[1]))

	}

	//const loadedProducts: IProduct[] = catalog.products.filter(value => params.id == value.category.id) // await getProducts
	return { loadedProducts, grouped };
}

const CatalogContent = () => {

	const {loadedProducts, grouped} = useLoaderData() as {loadedProducts: IProduct[], grouped: any[]};
	const [searchParams, setSearchParams] = useSearchParams();
	const [products, setProducts] = useState(loadedProducts);
	const categories = category.categories.filter(cat => cat.group?.id === +grouped[0])

	console.log(categories)
	console.log(loadedProducts)
	console.log(products)
	useEffect(() => {
		console.log(searchParams.get('startPrice'))
		let prod = loadedProducts.filter(item => item.price >= +searchParams.get('startPrice') && item.price <= +searchParams.get('endPrice'))

		switch (searchParams.get('sortType')) {
			case 'asc': {
				prod.sort((a,b) => a.price - b.price)
				break;
			}
			case 'desc': {
				prod.sort((a, b) => b.price - a.price);
				break;
			}
			case 'name': {
				prod.sort((a, b) => {
					if (a.title < b.title) {
						return -1;
					}
					if (a.title > b.title) {
						return 1;
					}
					return 0;
				})
				break;
			}
		}

		setProducts(prod);
	}, [searchParams])

	useEffect(() => {
		setProducts(loadedProducts)
	}, [JSON.stringify(loadedProducts)])

	return (
		<>
			{grouped.length === 1 &&
				<Grid container spacing={2}>
					{categories.map(item => (
						<Grid item xs={3} sx={{p: 2}}>
							<CategoryCard category={item} img={
								catalog.products.filter(product => product.category.id === item.id)?.find(item =>
									item?.image
								)?.image
							}/>
						</Grid>
					))}
				</Grid>
			}

			<Grid container spacing={2}>
				{products.length !== 0 ? products.map(item => (
					<Grid item xs={3}>
						<ProductCard product={item}/>
					</Grid>
				))
					: <BoldH sx={{p: 2}}>
						Товары не найдены
					</BoldH>
				}

			</Grid>
		</>

	);
};

export default CatalogContent;