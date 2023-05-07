import React from 'react';
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import {Box, Grid, IconButton, Typography} from "@mui/material";
import ItemsCarousel from "react-multi-carousel";
import ProductCarouselItem from "../../components/ProductCarouselItem/ProductCarouselItem";
import deserts from "../../assets/mainPage/deserts.jpg";
import fish from "../../assets/mainPage/fish.jpg";
import banner3 from "../../assets/mainPage/banner3.jpg";
import banner4 from "../../assets/mainPage/banner4.jpg";
import meat from "../../assets/mainPage/meat.jpg";
import info from "../../assets/mainPage/info_2.jpg";
import {DefaultButton} from "../../components/styled/DefaultButton";
import styles from "./MainPage.module.css";
import img1 from "../../assets/mainPage/img1.svg";
import img2 from "../../assets/mainPage/img2.svg";
import img3 from "../../assets/mainPage/img3.svg";
import brandLogo from "../../assets/mainPage/Component.jpg";
import markomLogoBlack from "../../assets/mainPage/markom_logo_bw.svg";
import YouTubeIcon from "@mui/icons-material/YouTube";
import masterCard from "../../assets/mainPage/masterCard.svg";
import visa from "../../assets/mainPage/Visa.svg";
import mir from "../../assets/mainPage/mir.svg";
import fruit from "../../assets/banana.png";

const MainContent = () => {

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

	return (
		<>
			<MainCarousel/>

			<Typography variant={'h4'} fontWeight={700}>
				Новое поступление
			</Typography>

			<ItemsCarousel responsive={responsive}>
				{carouselProducts.map((item) => (
					<ProductCarouselItem img={item.img} name={item.name} unitValue={item.unitValue} unit={item.unit} price={item.price} discountPrice={null}/>
				))}
			</ItemsCarousel>




			<Grid container spacing={4} sx={{p: 2,
				'.MuiTypography-root': {fontSize: 24, marginLeft: 4, marginTop: 2},
				'.MuiBox-root': {
					border: '1px solid rgba(0,0,0,0.1)',
					borderRadius: 2,
					width: 'fit-content',

				}
			}} >
				<Grid item xs={6}>
					<Box>

						<img src={deserts} alt=""/>
						<Typography>
							Торты, десерты, сладкая выпечка
						</Typography>
					</Box>

				</Grid>
				<Grid item xs={6}>
					<Box>
						<img src={fish} alt=""/>
						<Typography>
							Рыба, икра, морепродукты
						</Typography>
					</Box>

				</Grid>

				<Grid item xs={4}>
					<Box>
						<img src={banner3} alt=""/>
						<Typography>
							Баннер 3

						</Typography>
					</Box>

				</Grid>
				<Grid item xs={4}>
					<Box>

						<img src={banner4} alt=""/>
						<Typography>
							Баннер 4

						</Typography>
					</Box>

				</Grid>
				<Grid item xs={4}>
					<Box>
						<img src={meat} alt=""/>
						<Typography>
							Мясо
						</Typography>
					</Box>

				</Grid>

			</Grid>

			<Box
				sx={{
					backgroundImage: `url(${info})`,
					padding: 4,
					color: 'white',
					my: 4
				}}
			>
				<Typography variant={'h4'} fontWeight={700} sx={{mb: 2}}>
					Десерты на заказ
				</Typography>

				<Typography fontSize={20} sx={{mb: 2}}>
					Сладкие шедевры ручной работы по рецептам нашего шеф-кондитера. Индивидуальные десерты, разнообразие начинок, индивидуальный подход! Скидки именинникам.
				</Typography>

				<DefaultButton size={'small'} sx={{height: 'fit-content', px: 2, fontWeight: 600, fontSize: 16}}>
					Узнать подробнее
				</DefaultButton>
			</Box>


			<Typography variant={'h4'} fontWeight={700}>
				Вода, соки, напитки
			</Typography>
			<ItemsCarousel responsive={responsive}>
				{carouselProducts.map((item) => (
					<ProductCarouselItem img={item.img} name={item.name} unitValue={item.unitValue} unit={item.unit} price={item.price} discountPrice={null}/>
				))}
			</ItemsCarousel>


			<Typography variant={'h4'} fontWeight={700}>
				Орехи
			</Typography>
			<ItemsCarousel responsive={responsive}>
				{carouselProducts.map((item) => (
					<ProductCarouselItem img={item.img} name={item.name} unitValue={item.unitValue} unit={item.unit} price={item.price} discountPrice={null}/>
				))}
			</ItemsCarousel>


			<Typography variant={'h4'} fontWeight={700}>
				Наши плюсы
			</Typography>

			<Box className={styles.info}>

				<Box className={styles.infoItem}>
					<img src={img1}/>
					<Typography className={styles.infoItemHeader} fontWeight={700} sx={{fontSize: 24, my: 1}}
					>
						Широкий ассортимент
					</Typography>

					<Typography className={styles.infoItemText}
								sx={{fontSize: 18}}
					>
						Мы закупаем фрукты и овощи по всему миру – от Эквадора до Китая. Более 400 сортов овощей и фруктов представлены на наших прилавках.
					</Typography>
				</Box>

				<Box className={styles.infoItem}>
					<img src={img2}/>
					<Typography className={styles.infoItemHeader} fontWeight={700} sx={{fontSize: 24, my: 1}} >
						Широкий ассортимент
					</Typography>

					<Typography className={styles.infoItemText}
								sx={{fontSize: 18}}
					>
						Мы закупаем фрукты и овощи по всему миру – от Эквадора до Китая. Более 400 сортов овощей и фруктов представлены на наших прилавках.
					</Typography>
				</Box>


				<Box className={styles.infoItem}>
					<img src={img3}/>
					<Typography className={styles.infoItemHeader} fontWeight={700} sx={{fontSize: 24, my: 1}}>
						Широкий ассортимент
					</Typography>

					<Typography className={styles.infoItemText}
								sx={{fontSize: 18}}

					>
						Мы закупаем фрукты и овощи по всему миру – от Эквадора до Китая. Более 400 сортов овощей и фруктов представлены на наших прилавках.
					</Typography>
				</Box>

			</Box>



			<Typography variant={'h4'} fontWeight={700}>
				Бренды

			</Typography>
			<ItemsCarousel responsive={responsive}>

				{
					[
						1,
						1,
						1,
						1,
						1,
						1,
						1,
						1,
						1,
					].map(item => (
						<img
							src={brandLogo}
							alt=""
							style={{width: '100%'}}
						/>
					))
				}
			</ItemsCarousel>




		</>
	);
};

export default MainContent;