import React, {FC} from 'react';
import {Box, ButtonGroup, Grid, IconButton, Typography} from "@mui/material";
import {IProduct} from "../../models/IProduct";
import BoldH from "../styled/BoldH";
import CloseIcon from '@mui/icons-material/Close';
import {DefaultButton} from "../styled/DefaultButton";
import cart from '../../store/cart'
import {observer} from "mobx-react-lite";

interface CardItemProps {
	cartItem: IProduct,
	deleteThis: any,
}

const CartItem: FC<CardItemProps> = observer( ({cartItem, deleteThis}) => {

	const handleDelete = () => {
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
						{cartItem.title}, {cartItem.quantity} {cartItem.unit}
					</BoldH>
					<BoldH fontSize={14}>
						{`(${cartItem.weight} кг)`}
					</BoldH>
				</Box>

				<Typography>
					{cartItem.price} P
				</Typography>

				<ButtonGroup>
					<DefaultButton
						sx={{
							height: 'fit-content',
							p: 0,
							fontWeight: 400
						}}
					>
						---
					</DefaultButton>

					<Typography sx={{
						bgcolor: theme => theme.palette.primary.secondary,
						color: 'white',
						width: '40px',
						textAlign: 'center',
					}}>
						2
					</Typography>

					<DefaultButton
						sx={{
							height: 'fit-content',
							p: 0,
							fontWeight: 400
						}}
					>
						+
					</DefaultButton>

				</ButtonGroup>
			</Grid>

			<Grid item xs={1} sx={{justifyContent: 'space-between', display: 'flex', flexDirection: 'column'}}>
				<IconButton onClick={handleDelete}>
					<CloseIcon/>
				</IconButton>

				<Typography fontSize={24} fontWeight={400}>
					{cartItem.price * cartItem.quantity}
				</Typography>


			</Grid>

		</Grid>
	);
});

export default CartItem;