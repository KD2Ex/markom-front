import React, {useContext, useEffect, useState} from 'react';
import {
	Box,
	Button,
	FormControlLabel,
	Grid,
	Modal,
	OutlinedInput, Radio,
	RadioGroup, TextField,
	Typography,
	useTheme
} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import ItemsCarousel from "react-multi-carousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import fruit from "../../assets/banana.png";
import {observer} from "mobx-react-lite";
import cart from '../../store/cart'
import CartItem from "../../components/CartItem/CartItem";
import {SearchTextField} from "../../components/styled/SearchTextField";
import {DefaultButton} from "../../components/styled/DefaultButton";
import catalog from "../../store/catalog";
import {Link} from "react-router-dom";
import order from "../../store/order";
import OrderModal from "./components/OrderModal";
import {AlertContext} from "../../context";

export const loader = async () => {
	const cartItem = await cart.fetchCart();
	return { cartItem }
}


const CartPage = observer(() => {

	const [open, setOpen] = useState(false);
	const {setAlertOpen, setAlertMessage, setAlertType} = useContext(AlertContext)
	const theme = useTheme();

	const handleCreateOrder = async () => {
		await order.createOrder()
		await cart.fetchCart();
		setOpen(true)
	}

	const handleOpenOrder = () => {
		if (cart.cartItems.items.length !== 0) {
			setOpen(true)
		} else {
			setAlertOpen(true)
			setAlertMessage('Корзина пуста!')
			setAlertType('error')
		}
	}

	const responsive = {
		desktop: {
			breakpoint: {max: 2000, min: 1024},
			items: 6,
		},
		tablet: {
			breakpoint: {max: 1024, min: 300},
			items: 3,
		},
	}

	const [cartItems, setCartItems] = useState(cart.cartItems.items);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		console.log(cartItems)

		const sum = cartItems.reduce((prev, current) => {
			return prev + current.product.price
		}, 0)

		setTotalPrice(sum);
		console.log(sum)

	}, [JSON.stringify(cart.cartItems.items)])

	return (
		<div>
			<BoldH sx={{my: 4}}>
				Корзина
			</BoldH>

			<Grid container spacing={3}
				sx={{
					//display: 'flex',
				}}
			>

				<Grid container spacing={8} item xs={9}>
					{cartItems.length == 0
						?  <Typography
							sx={{
								my: 4
							}}
							>
							Ваша корзина пуста
						</Typography>
						: cart.cartItems.items.map((item, index) => {
							console.log(cartItems.length)
							return <CartItem
								cartItem={item.product}
								count={item.count}
							/>

							}

						)
					}
				</Grid>


				<Grid item xs={3}
					sx={{
						p: 0,
						display: 'flex',
						flexDirection: 'column',
						gap: 2,
						borderRadius: 2
					}}
				>
					<Box
						sx={{
							bgcolor: theme => theme.palette.primary.bg,
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							p: 3,
						}}
					>

						<Typography
							fontWeight={700}
						>
							Введите промокод
						</Typography>

						<SearchTextField
							variant={"outlined"}
							placeholder={'Промокод'}
							sx={{
								width: '100%'
							}}
						/>


						<Box
							sx={{
								display: 'flex',
								justifyContent: 'flex-end'
							}}
						>

							<Button
								sx={{
									color: theme.palette.primary.secondary,
									textTransform: 'none',
									fontSize: 18,
									width: 'fit-content'
								}}
							>
								Активировать
							</Button>
						</Box>
					</Box>

					<Box
						sx={{
							bgcolor: theme => theme.palette.primary.bg,
							display: 'flex',
							flexDirection: 'column',
							gap: 2,
							p: 3,
						}}
					>


						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between'
							}}
						>

							<BoldH
								fontSize={26}
							>
								Итого к оплате:
							</BoldH>

							<BoldH fontSize={26}>
								{cart.totalPrice} Р
							</BoldH>

						</Box>



						<DefaultButton onClick={handleOpenOrder}>
							Оформить заказ
						</DefaultButton>

						<OrderModal
							open={open}
							setOpen={setOpen}
						/>

					</Box>

				</Grid>
			</Grid>



			<BoldH sx={{my: 2, mt:6}}>
				Хлеб, сдоба, выпечка
			</BoldH>

			<Box sx={{mb: 2}}>

				<ItemsCarousel responsive={responsive}>
					{catalog.products.map((item) => (
						<ProductCard product={item}/>
					))}
				</ItemsCarousel>
			</Box>

		</div>
	);
});

export default CartPage;