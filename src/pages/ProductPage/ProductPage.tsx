import React, {useEffect, useState} from 'react';
import {Box, Divider, Grid, Typography} from "@mui/material";
import {IProduct} from "../../models/IProduct";
import BoldH from "../../components/styled/BoldH";
import catalog from "../../store/catalog";
import {useLoaderData} from 'react-router-dom'
import {CartButton} from "../../components/styled/CartButton";
import CartGroupButtons from "../../components/CartGroupButtons/CartGroupButtons";
import {getCartCount} from "../../utils/getCartCount";
import cart from "../../store/cart";
import measurement from "../../store/measurement";
import {observer} from "mobx-react-lite";

interface ProductPageProps {
	product: IProduct;
}

export const loader = async ({params}) => {
	console.log(params)
	await measurement.fetchMeasures();
	await catalog.fetchProducts()
	await cart.fetchCart()
	const product = catalog.products.find((item) => item.id == params.productId)
	return {product}
}



const ProductPage = observer(() => {

	const {product}: {product: IProduct} = useLoaderData()
	const [cartQuantity, setCartQuantity] = useState(0);


	const handleClick = async () => {
		await cart.addCartItem(
			product
		)

	}

	useEffect(() => {
		console.log('loaded')
	}, [])

	useEffect(() => {
		setCartQuantity(cart.cartItems.items.filter((item) => item.product.id === product.id).length)
	}, [JSON.stringify(cart.cartItems.items)])

	return (
		<Box>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<img style={{width: '90%', height: '90%'}} src={product.image} alt=""/>

				</Grid>
				<Grid item xs={6} sx={{p: 2}}>
					<BoldH>
						{product.title}, {product.amount} {product.measurement.name}
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

						<Box sx={{
							display: 'flex',
							alignItems: 'center',
							gap: 2
						}}>


							<BoldH>
								{product.discount !== 0
									? `${Math.round(product.price * ((100 - product.discount) / 100))} ₽`
									:`${product.price} ₽`
								}
							</BoldH>
							{product.discount !== 0 &&
                            <Typography sx={{
								textDecoration: 'line-through',
								color: 'rgba(0,0,0,0.5)'
							}}>
								{product.price} ₽
                            </Typography>
							}

							{product.discount !== 0 &&
                            <Typography sx={{
								bgcolor: '#fd3c17',
								px: 1,
								borderRadius: 1,
								color: 'white',

							}}>
                                -{product.discount}%
                            </Typography>
							}
						</Box>

						<Box>

							{!getCartCount(product.id)
								? <CartButton sx={{ width: '100%'}} onClick={handleClick}>
									В корзину
								</CartButton>
								: <CartGroupButtons product={product} height={'40px'}
													content={
														`В корзине ${getCartCount(product.id)} ${product.measurement.name}
														Перейти`
													}
								/>
							}
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
});

export default ProductPage;