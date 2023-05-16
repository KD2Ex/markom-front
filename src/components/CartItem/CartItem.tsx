import React, {FC} from 'react';
import {Box, ButtonGroup, Grid, IconButton, Typography} from "@mui/material";
import {IProduct} from "../../models/IProduct";
import BoldH from "../styled/BoldH";
import CloseIcon from '@mui/icons-material/Close';
import {DefaultButton} from "../styled/DefaultButton";
import cart from '../../store/cart'
import {observer} from "mobx-react-lite";
import CartGroupButtons from "../CartGroupButtons/CartGroupButtons";

interface CardItemProps {
	cartItem: IProduct,
	deleteThis: any,
}

const CartItem: FC<CardItemProps> = observer( ({cartItem, deleteThis}) => {

	const handleDelete = () => {
		cartItem.quantityInCar = 0;
		cart.deleteCartItem(cartItem);
	}

	return (
		<Grid container item spacing={2} sx={{maxHeight: '210px'}}>

			<Grid item xs={2}>
				<img
					src={cartItem.img}
					alt=""
					style={{width: '100%', height: '100%'}}
				/>
			</Grid>

			<Grid sx={{justifyContent: 'space-between', display: 'flex', flexDirection: 'column'}} item xs={9}>
				<Box>

					<BoldH>
						{cartItem.title}, {cartItem.quantityInCar} {cartItem.unit}
					</BoldH>
					<BoldH fontSize={14}>
						{`(${cartItem.weight} кг)`}
					</BoldH>
				</Box>

				<Typography>
					{cartItem.price} P
				</Typography>

				<Box sx={{width: '15%'}}>
					<CartGroupButtons product={cartItem} height={'28px'} content={cartItem.quantityInCar}/>
				</Box>

			</Grid>

			<Grid item xs={1} sx={{justifyContent: 'space-between', display: 'flex', flexDirection: 'column'}}>
				<IconButton onClick={handleDelete}>
					<CloseIcon/>
				</IconButton>

				<Typography fontSize={24} fontWeight={400}>
					{cartItem.price * cartItem.quantityInCar}
				</Typography>


			</Grid>

		</Grid>
	);
});

export default CartItem;