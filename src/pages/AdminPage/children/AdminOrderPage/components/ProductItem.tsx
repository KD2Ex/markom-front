import React, {FC} from 'react';
import {IOrderItem} from "../../../../../models/IOrderItem";
import {Box, Typography} from "@mui/material";
import BoldH from '../../../../../components/styled/BoldH';

interface ProductItemProps {
	item: IOrderItem
}

const ProductItem: FC<ProductItemProps> = ({item}) => {
	return (
		<Box sx={{
			border: '1px solid rgba(0,0,0,0.2)',
			borderRadius: 2,
			p: 2,
		}}>
			<img src={item.product.image} alt="" style={{
				width: '100%'
			}}/>
			<BoldH sx={{minHeight: '90px'}}>
				{item.product.title}
			</BoldH>
			<Typography>
				Цена: {item.product.price}
			</Typography>
			<Typography>
				Количество: {item.count}
			</Typography>
			<Typography>
				Скидка: {item.discount}
			</Typography>
		</Box>
	);
};

export default ProductItem;