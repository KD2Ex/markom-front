import React, {FC} from 'react';
import {CartButton} from "../styled/CartButton";
import {Box, ButtonGroup, Typography} from "@mui/material";
import cart from "../../store/cart";
import {IProduct} from "../../models/IProduct";
import {getCartCount} from "../../utils/getCartCount";
import {useForceUpdate} from "../../hooks/useForceUpdate";
import {Link} from "react-router-dom";

interface CartGroupButtonsProps {
	product: IProduct,
	height: string,
	content: string,
}

const CartGroupButtons: FC<CartGroupButtonsProps> = ({product, height, content}) => {

	const handleAdd = async () => {
		const count = cart.cartItems.items.find(item => item.product.id === product.id)?.count
		await cart.changeQuantity(product, count + 1)
		forceUpdate();
	}

	const handleDelete = async () => {
		let count = getCartCount(product.id);
		if (count) {
			count -= 1;
			if ((count > 0)) {
				await cart.changeQuantity(product, count)
			} else {
				await cart.deleteCartItem(product);
			}
		}

	}

	const forceUpdate = useForceUpdate()

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
			<CartButton sx={{width: '100%',  borderRadius: 0}} component={Link} to={'/cart'}>
				<Box sx={{p: 0, borderRadius: 0}}>

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