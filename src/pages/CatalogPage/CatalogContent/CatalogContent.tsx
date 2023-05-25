import React, {useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import {Grid} from "@mui/material";
import ProductCard from "../../../components/ProductCard/ProductCard";
import catalog from "../../../store/catalog";
import {IProduct} from "../../../models/IProduct";
import {Simulate} from "react-dom/test-utils";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import banana from '../../../assets/banana.png'
import category from "../../../store/category";
import groupCategories from "../../../store/groupCategories";

export const loader = async ({ params }) => {
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

	const {loadedProducts, grouped} = useLoaderData();


	const categories = category.categories.filter(cat => cat.group?.id === +grouped[0])

	console.log(categories)
	console.log(loadedProducts)

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
				{loadedProducts.map(item => (
					<Grid item xs={3}>
						<ProductCard product={item}/>
					</Grid>
				))}

			</Grid>
		</>

	);
};

export default CatalogContent;