import React, {useContext, useEffect, useState} from 'react';
import {Box, Breadcrumbs, Button, Grid, IconButton, Typography} from "@mui/material";
import NavBar from "../../components/NavBar/NavBar";
import MainPageBar from "../../components/MainPageBar/MainPageBar";
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import 'react-multi-carousel/lib/styles.css';
import YouTubeIcon from '@mui/icons-material/YouTube'
import visa from '../../assets/mainPage/Visa.svg'
import masterCard from '../../assets/mainPage/masterCard.svg'
import mir from '../../assets/mainPage/mir.svg'
import markomLogoBlack from '../../assets/unnamed.png'
import {Link, Outlet, useLocation} from 'react-router-dom'
import {getUrlName} from "../../utils/getUrlNames";
import groupCategories from "../../store/groupCategories";
import category from "../../store/category";
import catalog from "../../store/catalog";
import LoginWarningDialog from "../../components/LoginWarningDialog/LoginWarningDialog";
import {ModalContext} from "../../context";



const MainPage = () => {

	const params = useLocation()
	const {isModalOpen, setIsModalOpen} = useContext(ModalContext);
	console.log(params.pathname)

	const aliases = {
		catalog: 'Каталог',
		cart:'Корзина',
		contacts:'Контакты',
		about: 'О нас',
		login: 'Авторизация',
		reg: 'Регистрация',
		search: 'Поиск',
	}

	category.categories.map((item) => {
		aliases[item.name] = item.name
		aliases[item.id] = item.name
	})

	catalog.products.map((item) => {
		aliases[item.title] = item.title
	})

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



								if (arr.includes('catalog') && item !== 'catalog') {

									return <Link key={index} to={`/catalog/0_${item}`}>{aliases[item]}</Link>
								}

								return <Link key={index} to={`/${item}`}>{aliases[item]}</Link>
							}
							if (arr.includes('catalog')) {
								return <Typography key={index}>{getUrlName(item)}</Typography>
							}
							return <Typography key={index}>{aliases[item]}</Typography>
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
							<img src={markomLogoBlack} alt="" style={{
								filter: 'saturate(0%) contrast(120%)'
							}}/>
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


			<LoginWarningDialog open={isModalOpen} setOpen={setIsModalOpen}/>


		</Box>
	);
};

export default MainPage;