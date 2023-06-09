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
	count: number
}

const CartItem: FC<CardItemProps> = observer( ({cartItem, count}) => {

	const handleDelete = () => {
		count = 0;
		cart.deleteCartItem(cartItem);
	}

	return (
		<Grid container item spacing={2} sx={{height: '300px'}}>

			<Grid item xs={2}>
				<img
					src={cartItem.image}
					alt=""
					style={{width: '100%', height: '100%', objectFit: 'cover'}}
				/>
			</Grid>

			<Grid sx={{
				justifyContent: 'space-between',
				display: 'flex',
				flexDirection: 'column'}} item xs={9}>
				<Box>

					<BoldH>
						{cartItem.title}, {count} {cartItem.measurement.name}
					</BoldH>

				</Box>

				<Typography>
					{Math.floor(cartItem.price * ((100 - cartItem?.discount) / 100))}  ₽
				</Typography>


				<Box sx={{width: '15%'}}>
					<CartGroupButtons product={cartItem} height={'28px'} content={count}/>
				</Box>

			</Grid>

			<Grid item xs={1} sx={{justifyContent: 'space-between', display: 'flex', flexDirection: 'column'}}>
				<IconButton onClick={handleDelete}>
					<CloseIcon/>
				</IconButton>

				<Typography fontSize={24} fontWeight={400}>
					{Math.floor(cartItem.price  * count * ((100 - cartItem?.discount) / 100)) }  ₽
				</Typography>


			</Grid>

		</Grid>
	);
});

export default CartItem;