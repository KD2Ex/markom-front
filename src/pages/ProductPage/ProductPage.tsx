import React, {useEffect} from 'react';
import {Box, Divider, Grid, Typography} from "@mui/material";
import {IProduct} from "../../models/IProduct";
import BoldH from "../../components/styled/BoldH";
import catalog from "../../store/catalog";
import {useLoaderData} from 'react-router-dom'
import {CartButton} from "../../components/styled/CartButton";
import CartGroupButtons from "../../components/CartGroupButtons/CartGroupButtons";

interface ProductPageProps {
	product: IProduct;
}

export const loader = async ({params}) => {
	const product = catalog.products.find((item) => item.id == params.productId)
	console.log(product)
	return {product}
}



const ProductPage = () => {

	const {product}: {product: IProduct} = useLoaderData()

	useEffect(() => {
		console.log('loaded')
	}, [])

	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<img style={{width: '90%', height: '90%'}} src={product.img} alt=""/>

				</Grid>
				<Grid item xs={6} sx={{p: 2}}>
					<BoldH>
						{product.title}, {product.quantity} {product.unit}
					</BoldH>
					<Divider sx={{width: '100%', pb: 2}}/>
					<Box sx={{
						display: 'flex',
						justifyContent: 'space-between',
						mt: 2,
						bgcolor: 'rgb(246,246,246)',
						p: 4,
						borderRadius: 4,
					}}>
						<BoldH>
							{product.price}₽
						</BoldH>
						<Box>
							<CartGroupButtons product={product} height={'40px'} content={
								`В корзине ${product.quantityInCar} ${product.unit}
						Перейти`
							}/>
						</Box>
					</Box>
					<Box sx={{mt: 4}}>
						<Typography sx={{fontWeight: 700, fontSize: 18}}>
							Описание
						</Typography>
						<Typography>
							{product.description}
						</Typography>
					</Box>
				</Grid>
			</Grid>




		</Box>
	);
};

export default ProductPage;