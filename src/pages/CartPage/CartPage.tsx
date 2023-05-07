import React, {useEffect, useState} from 'react';
import {Box, Button, Grid, OutlinedInput, Typography, useTheme} from "@mui/material";
import BoldH from "../../components/styled/BoldH";
import ItemsCarousel from "react-multi-carousel";
import ProductCarouselItem from "../../components/ProductCarouselItem/ProductCarouselItem";
import fruit from "../../assets/banana.png";
import {observer} from "mobx-react-lite";
import cart from '../../store/cart'
import CartItem from "../../components/CartItem/CartItem";
import {SearchTextField} from "../../components/styled/SearchTextField";
import {DefaultButton} from "../../components/styled/DefaultButton";

const CartPage = observer(() => {

	const theme = useTheme();

	const carouselProducts = [
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
		{img: fruit, name: 'Гранат', unit: 'кг', unitValue: '1', price: 290},
	]


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

	const [cartItems, setCartItems] = useState(cart.cartItems);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		console.log(cartItems)

		const sum = cartItems.reduce((prev, current) => {
			return prev + current.price
		}, 0)

		setTotalPrice(sum);
		console.log(sum)

	}, [cart.cartItems.length])

	return (
		<div>
			<BoldH sx={{my: 4}}>
				Корзина
			</BoldH>

			<Grid container spacing={3}
				sx={{
					display: 'flex',
				}}
			>

				<Grid container spacing={2} item xs={9}>
					{cartItems.length === 0
						?  <Typography
							sx={{
								my: 4
							}}
							>
							Ваша корзина пуста
						</Typography>
						: cartItems.map((item, index) => {
							console.log(cartItems.length)
							return <CartItem
								cartItem={item}

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
								{totalPrice} Р
							</BoldH>

						</Box>



						<DefaultButton>
							Оформить заказ
						</DefaultButton>
					</Box>

				</Grid>
			</Grid>



			<BoldH sx={{my: 2}}>
				Хлеб, сдоба, выпечка
			</BoldH>

			<Box sx={{mb: 2}}>

				<ItemsCarousel responsive={responsive}>
					{carouselProducts.map((item, index) => (
						<ProductCarouselItem id={index} img={item.img} name={item.name} unitValue={item.unitValue} unit={item.unit} price={item.price} discountPrice={null}/>
					))}
				</ItemsCarousel>
			</Box>

		</div>
	);
});

export default CartPage;