import React, {FC, useState} from 'react';
import {Box, Button, ButtonGroup, Typography} from "@mui/material";
import fruit from '../../assets/banana.png'
import {DefaultButton} from "../styled/DefaultButton";
import {CartButton} from "../styled/CartButton";
import cart from '../../store/cart'
import {IProduct} from "../../models/IProduct";
import {UnitType} from "../../models/types/UnitType";
import {observer} from "mobx-react-lite";
import CartGroupButtons from "../CartGroupButtons/CartGroupButtons";

interface ProductCarouselItemProps {
	product: IProduct,
}

const ProductCard: FC<ProductCarouselItemProps> = observer( ({product}) => {

	const [cartQuantity, setCartQunatity] = useState(0);

	const handleClick = () => {
		cart.addCartItem(
			product
		)
	}


	return (
		<Box sx={{mr: 2, p: 2, border: '1px solid rgba(214,214,214,0.3)', borderRadius: 2}} >
			<img src={product.img} alt="" style={{width: '100%'}}/>
			<p>{`${product.title}, ${product.quantity} ${product.unit}`}</p>
			<Typography variant={'h5'} fontWeight={700}>{`${product.price} ₽`}</Typography>

			{product.quantityInCar === 0
				? <CartButton sx={{ width: '100%'}} onClick={handleClick}>
					В корзину
				</CartButton>
				: <CartGroupButtons product={product} height={'40px'}
					content={
						`В корзине ${product.quantityInCar} ${product.unit}
						Перейти`
					}
				/>
			}

		</Box>
	);
});

export default ProductCard;