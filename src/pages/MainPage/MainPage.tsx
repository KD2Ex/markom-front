import React, {useEffect} from 'react';
import {Box, Breadcrumbs, Button, Grid, IconButton, Typography} from "@mui/material";
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
import img1 from '../../assets/mainPage/img1.svg'
import img2 from '../../assets/mainPage/img2.svg'
import img3 from '../../assets/mainPage/img3.svg'
import deserts from '../../assets/mainPage/deserts.jpg'
import fish from '../../assets/mainPage/fish.jpg'
import meat from '../../assets/mainPage/meat.jpg'
import banner3 from '../../assets/mainPage/banner3.jpg'
import banner4 from '../../assets/mainPage/banner4.jpg'
import info from '../../assets/mainPage/info_2.jpg'
import brandLogo from '../../assets/mainPage/Component.jpg'
import YouTubeIcon from '@mui/icons-material/YouTube'
import ProductCard from "../../components/ProductCard/ProductCard";
import {DefaultButton} from "../../components/styled/DefaultButton";
import visa from '../../assets/mainPage/Visa.svg'
import masterCard from '../../assets/mainPage/masterCard.svg'
import mir from '../../assets/mainPage/mir.svg'
import markomLogoBlack from '../../assets/mainPage/markom_logo_bw.svg'
import SearchIcon from '@mui/icons-material/Search';
import MainContent from "./MainContent";
import {Link, Outlet, useLocation} from 'react-router-dom'
import ProductService from "../../api/services/ProductService";
import catalog from "../../store/catalog";
import {useFetchData} from "../../hooks/useFetch";
import {getUrlName} from "../../utils/getUrlNames";



const MainPage = () => {

	const params = useLocation()

	const aliases = {
		catalog: 'Каталог',
		cart: 'Корзина'
	}

	return (
		<Box>

			<NavBar/>

			<Box  sx={{ maxWidth: '1503px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: 2, minHeight: '70vh'}}>
				<MainPageBar/>
				{params.pathname !== '/' && !params.pathname.includes('profile') &&
					<Breadcrumbs>
						<Link style={{textDecoration: 'none'}} to={`/`}>Главная</Link>
						{params.pathname.split('/').slice(1).map((item, index, arr) => {
							if (index !== arr.length - 1) {
								return <Link key={index} to={`/${item}`}>{aliases[item]}</Link>
							}
							return <Typography key={index}>{getUrlName(item)}</Typography>
						})}
					</Breadcrumbs>
				}

				<Outlet/>

			</Box>

			<Box sx={{bgcolor: theme => theme.palette.primary.bg}}>

				<Grid
					container
					sx={{
						width: '100%',
						padding: 6,
						maxWidth: '1503px', margin: 'auto'
					}}
				>
					<Grid item xs={10}
						  sx={{
							  justifyContent: 'flex-end',
							  flexDirection: 'column',
							  display: 'flex'
						  }}
					>
						<Box
							sx={{
								display: 'inline-flex',

							}}
						>
							<img src={markomLogoBlack} alt=""/>
						</Box>

					</Grid>

					<Grid item xs={2}
						  sx={{
							  display: 'flex',
							  justifyContent: 'space-between',
							  flexDirection: 'column',
							  gap: 1
						  }}
					>

						<Typography fontWeight={700}>
							Мы в соц. сетях
						</Typography>

						<Box sx={{display: 'flex', flexDirection: 'row', color: 'black'}}>
							<IconButton>
								<YouTubeIcon/>
							</IconButton>
							<IconButton>
								<YouTubeIcon/>
							</IconButton>
							<IconButton>
								<YouTubeIcon/>
							</IconButton>
							<IconButton>
								<YouTubeIcon/>
							</IconButton>
						</Box>

						<Typography fontWeight={700} variant={'h5'}>
							+7(800) 800-80-80
						</Typography>
						<Typography fontSize={12}>
							Справочная служба
						</Typography>

						<Typography fontWeight={700} variant={'h5'}>
							+7(800) 800-80-80
						</Typography>
						<Typography fontSize={12}>
							Интернет-магазин
						</Typography>


						<Box sx={{display: 'flex', flexDirection: 'row', color: 'black', gap: 2, mt: 2}}>

							<img src={masterCard} alt=""/>
							<img src={visa} alt=""/>
							<img src={mir} alt=""/>


						</Box>
					</Grid>

				</Grid>
			</Box>


		</Box>
	);
};

export default MainPage;