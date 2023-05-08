import React, {FC} from 'react';
import {Box, Button, Typography} from "@mui/material";
import fruit from '../../assets/banana.png'
import {DefaultButton} from "../styled/DefaultButton";
import {CartButton} from "../styled/CartButton";
import cart from '../../store/cart'
import {IProduct} from "../../models/IProduct";
import {UnitType} from "../../models/types/UnitType";

interface ProductCarouselItemProps {
	product: IProduct,
}

const ProductCard: FC<ProductCarouselItemProps> = ({product}) => {

	const handleClick = () => {
		cart.addCartItem(
			{
				id: product.id,
				img: product.img,
				price: product.price,
				quantity: 1,
				title: product.title,
				unit: product.unit,
				weight: product.weight,
				category: product.category,
				discountPrice: null,
			} as IProduct
		)
	}

	return (
		<Box sx={{mr: 2, p: 2, border: '1px solid rgba(214,214,214,0.3)', borderRadius: 2}} >
			<img src={product.img} alt="" style={{width: '100%'}}/>
			<p>{`${product.title}, ${product.quantity} ${product.unit}`}</p>
			<Typography variant={'h5'} fontWeight={700}>{`${product.price} ₽`}</Typography>
			<CartButton sx={{height: '32px', width: '100%'}} onClick={handleClick} >
				В корзину
			</CartButton>
		</Box>
	);
};

export default ProductCard;