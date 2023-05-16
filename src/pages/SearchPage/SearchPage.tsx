import React, {useState} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import {SearchTextField} from "../../components/styled/SearchTextField";
import SearchBar from "../../components/SearchBar/SearchBar";
import catalog from "../../store/catalog";
import { useLoaderData } from 'react-router-dom';
import ProductCard from "../../components/ProductCard/ProductCard";


export const loader = ({params}) => {
	const searchQuery = params.searchId.toLowerCase();
	console.log(searchQuery)
	const products = catalog.products.filter((item) => item.title.toLowerCase().includes(searchQuery)
		|| item.category.title.toLowerCase().includes(searchQuery)
	);
	return { products }
}

const SearchPage = () => {

	const {products} = useLoaderData();
	const [searchQuery, setSearchQuery] = useState('');

	const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	}

	return (
		<Box sx={{gap: 2, display: 'flex', flexDirection: 'column'}}>
			<BoldH>
				Поиск
			</BoldH>
			<SearchBar
				value={searchQuery}
				onChange={handleChange}
				sx={{width: '400px'}}
			/>

			<Grid container>
				{products.map((item) => (
					<Grid item xs={2.2}>
						<ProductCard product={item}/>
					</Grid>
				))}
			</Grid>

		</Box>
	);
};

export default SearchPage;