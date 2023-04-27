import React from 'react';
import {Box, Typography} from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import styles from './MainPage.module.css';
import MainPageBar from "../../components/MainPageBar/MainPageBar";
import {Carousel} from "react-responsive-carousel";
import carousel1 from '../../assets/carousel1.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import ItemsCarousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import fruit from '../../assets/banana.png';
import ProductCarouselItem from "../../components/ProductCarouselItem/ProductCarouselItem";

const MainPage = () => {

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
		<Box sx={{ maxWidth: '1503px', margin: 'auto'}}>

			<NavBar/>
			<Box>
				<MainPageBar/>

				<MainCarousel/>

				<Typography variant={'h4'} fontWeight={700}>
					Новое поступление
				</Typography>

				<ItemsCarousel responsive={responsive}>
					{carouselProducts.map((item) => (
						<ProductCarouselItem img={item.img} name={item.name} unitValue={item.unitValue} unit={item.unit} price={item.price} discountPrice={null}/>
					))}
				</ItemsCarousel>

			</Box>
		</Box>
	);
};

export default MainPage;