import React, {FC, useEffect, useState} from 'react';
import {Box, Button, ButtonGroup, Typography} from "@mui/material";
import fruit from '../../assets/banana.png'
import {DefaultButton} from "../styled/DefaultButton";
import {CartButton} from "../styled/CartButton";
import cart from '../../store/cart'
import {IProduct} from "../../models/IProduct";
import {UnitType} from "../../models/types/UnitType";
import {observer} from "mobx-react-lite";
import CartGroupButtons from "../CartGroupButtons/CartGroupButtons";
import {Link} from "react-router-dom";
import {useFetchData} from "../../hooks/useFetch";
import {catalog} from "../MainPageBar/data";
import measurement from "../../store/measurement";
import {getCartCount} from "../../utils/getCartCount";

interface ProductCarouselItemProps {
	product: IProduct,
}

const ProductCard: FC<ProductCarouselItemProps> = observer( ({product}) => {

	const [cartQuantity, setCartQuantity] = useState(0);

	const handleClick = () => {
		cart.addCartItem(
			product
		)
	}

	useEffect(() => {
		(async () => {
			if (measurement.measurements.length === 0) {
				await useFetchData()
			}

			setCartQuantity(cart.cartItems.items.filter((item) => item.product.id === product.id).length)
		})()
	}, [])

	useEffect(() => {
		console.log(cart.cartItems)
		setCartQuantity(cart.cartItems.items.filter((item) => item.product.id === product.id).length)
	}, [JSON.stringify(cart.cartItems.items)])

	return (
		<Box sx={{mr: 2, p: 2, border: '1px solid rgba(214,214,214,0.3)', borderRadius: 2, height: '100%'}} >
			<Link to={`/catalog/${product.category.name}/${product.id}`}>
				<img src={product.image} alt="" style={{width: '100%'}} />
			</Link>
			<Box  sx={{minHeight: '50px'}}>
				<Typography component={Link} to={`/catalog/${product.category.name}/${product.id}`}>
					{`${product.title}, ${product.amount} ${product.measurement.name}`}
				</Typography>
			</Box>

			<Typography variant={'h5'} fontWeight={700}>{`${product.price} ₽`}</Typography>

			{cartQuantity === 0
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
	);
});

export default ProductCard;