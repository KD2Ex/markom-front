import React, {FC} from 'react';
import {Box, Button, Typography} from "@mui/material";
import fruit from '../../assets/banana.png'
import {DefaultButton} from "../styled/DefaultButton";
import {CartButton} from "../styled/CartButton";
import cart from '../../store/cart'
import {ICartItem} from "../../models/ICartItem";
import {UnitType} from "../../models/types/UnitType";

interface ProductCarouselItemProps {
	id: number,
	img: any,
	name: string,
	unitValue: string,
	unit: UnitType,
	price: number,
	discountPrice: number | null,
}

const ProductCarouselItem: FC<ProductCarouselItemProps> = ({id, img, name, price, unit, unitValue, discountPrice= null}) => {

	const handleClick = () => {
		cart.addCartItem(
			{
				id: id,
				img: img,
				price: price,
				quantity: 1,
				title: name,
				unit: unit,
				weight: unitValue
			} as ICartItem
		)
	}



	return (
		<Box sx={{mr: 2, p: 2, border: '1px solid rgba(214,214,214,0.3)', borderRadius: 2}} >
			<img src={img} alt="" style={{width: '100%'}}/>
			<p>{`${name}, ${unitValue} ${unit}`}</p>
			<Typography variant={'h5'} fontWeight={700}>{`${price} ₽`}</Typography>
			<CartButton sx={{height: '32px', width: '100%'}} onClick={handleClick} >
				В корзину
			</CartButton>
		</Box>
	);
};

export default ProductCarouselItem;