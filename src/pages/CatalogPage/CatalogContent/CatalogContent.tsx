import React, {useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import {Grid} from "@mui/material";
import ProductCard from "../../../components/ProductCarouselItem/ProductCard";
import catalog from "../../../store/catalog";
import {IProduct} from "../../../models/IProduct";
import {Simulate} from "react-dom/test-utils";
import CategoryCard from "./components/CategoryCard/CategoryCard";
import banana from '../../../assets/banana.png'
import category from "../../../store/category";

export const loader = async ({ params }) => {
	console.log(params)
	const grouped = params.id.split('_');
	console.log(grouped)
	const loadedProducts: IProduct[] = catalog.products.filter(value => params.id.includes(value.category.value)) // await getProducts
	return { loadedProducts, grouped };
}

const CatalogContent = () => {

	const {loadedProducts, grouped} = useLoaderData();


	const [products, setProducts] = useState<IProduct[]>([])
	const categoryTitles = grouped.map(item => category.categories.find(cat => cat.value === item))
	console.log(categoryTitles)

	return (
		<>
			{grouped.length > 1 &&
				<Grid container spacing={2}>
					{categoryTitles.map(item => (
						<Grid item xs={3} sx={{p: 2}}>
							<CategoryCard category={item} img={banana}/>
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