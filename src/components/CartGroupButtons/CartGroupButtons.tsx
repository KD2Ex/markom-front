import React, {FC} from 'react';
import {CartButton} from "../styled/CartButton";
import {Box, ButtonGroup, Typography} from "@mui/material";
import cart from "../../store/cart";
import {IProduct} from "../../models/IProduct";

interface CartGroupButtonsProps {
	product: IProduct,
	height: string,
	content: strin,
}

const CartGroupButtons: FC<CartGroupButtonsProps> = ({product, height, content}) => {

	const handleAdd = () => {
		cart.changeQuantity(product, 1)
		console.log(product.quantityInCar)
	}

	const handleDelete = () => {
		cart.changeQuantity(product, -1)
		console.log(product.quantityInCar)
	}


	return (
		<ButtonGroup sx={{p: 0, width: '100%',
			'.MuiButtonBase-root': {
				height: `${height}`
			}
		}} disableElevation>
			<CartButton
				onClick={handleDelete}
			>
				-
			</CartButton>
			<CartButton sx={{width: '100%'}} >
				<Box sx={{p: 0}}>

					<Typography sx={{fontSize: 12, textAlign: 'center'}}>
						{content}
					</Typography>

				</Box>

			</CartButton>
			<CartButton sx={{ }}
						onClick={handleAdd}
			>
				+
			</CartButton>
		</ButtonGroup>
	);
};

export default CartGroupButtons;