import React, {FC} from 'react';
import {Box, Button, Typography} from "@mui/material";
import fruit from '../../assets/banana.png'
import {DefaultButton} from "../styled/DefaultButton";
import {CartButton} from "../styled/CartButton";

interface ProductCarouselItemProps {
	img: any,
	name: string,
	unitValue: string,
	unit: string,
	price: number,
	discountPrice: number | null,
}

const ProductCarouselItem: FC<ProductCarouselItemProps> = ({img, name, price, unit, unitValue, discountPrice= null}) => {
	return (
		<Box sx={{mr: 2, p: 2, border: '1px solid rgba(214,214,214,0.3)', borderRadius: 2}} >
			<img src={img} alt="" style={{width: '100%'}}/>
			<p>{`${name}, ${unitValue} ${unit}`}</p>
			<Typography variant={'h5'} fontWeight={700}>{`${price} ₽`}</Typography>
			<CartButton sx={{height: '32px', width: '100%'}} >
				В корзину
			</CartButton>
		</Box>
	);
};

export default ProductCarouselItem;