import React, {useState} from 'react';
import MainCarousel from "../../components/MainCarousel/MainCarousel";
import {Box, Button, Grid, IconButton, Typography} from "@mui/material";
import ItemsCarousel from "react-multi-carousel";
import ProductCard from "../../components/ProductCard/ProductCard";
import banner1 from "../../assets/mainPage/banner1.jpg";
import banner2 from "../../assets/mainPage/banner2.jpg";
import banner3 from "../../assets/mainPage/banner3.jpg";
import banner4 from "../../assets/mainPage/banner4.jpg";
import banner5 from "../../assets/mainPage/banner5.jpg";
import info from "../../assets/mainPage/info.jpg";
import {DefaultButton} from "../../components/styled/DefaultButton";
import styles from "./MainPage.module.css";
import img1 from "../../assets/mainPage/img1.svg";
import img2 from "../../assets/mainPage/img2.svg";
import img3 from "../../assets/mainPage/img3.svg";
import brandLogo from "../../assets/mainPage/Component.jpg";
import catalog from "../../store/catalog";
import arrowNext from '../../assets/arrowNext.png';
import arrowPrev from '../../assets/arrowPrev.png';
import {Link} from "react-router-dom";
import LoginWarningDialog from "../../components/LoginWarningDialog/LoginWarningDialog";

const MainContent = () => {

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

	const [newProductsCarRef, setNewProductsCarRef] = useState();
	const [drinksCarRef, setDrinksCarRef] = useState();
	const [nutsCarRef, setNutsCarRef] = useState();
	const [open, setOpen] = useState(false);


	const customArrows = (ref) => ( <div>
		<Button onClick={() => ref.previous()}>
			<img src={arrowPrev} alt=""/>
		</Button>
		<Button onClick={() => ref.next()}>
			<img src={arrowNext} alt=""/>
		</Button>
	</div>)


	return (
		<>
			<MainCarousel/>


			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				my: 2
			}}>
				<Typography variant={'h4'} fontWeight={700}>
					Преформы
				</Typography>

				{customArrows(newProductsCarRef)}
			</Box>


			<ItemsCarousel responsive={responsive}
							ref={(el) => setNewProductsCarRef(el)}
						   arrows={false}
			>
				{catalog.products.filter(item => item.category.group?.name === 'Преформы').map((item) => (
					<ProductCard product={item} setOpen={setOpen}/>
				))}
			</ItemsCarousel>


			<Grid container spacing={4} sx={{p: 2,
				'.MuiTypography-root': {fontSize: 24, marginLeft: 4, marginTop: 2, mb: 2},
				'.MuiBox-root': {
					border: '1px solid rgba(0,0,0,0.1)',
					borderRadius: 2,
					width: 'fit-content',

				},
				'& img': {
					width: '100%',
					height: 'auto',
					borderRadius: '8px 8px 0 0'
				}
			}} >
				<Grid item xs={6} component={Link} to={'/catalog/0_11'}>
					<Box>

						<img src={banner1} alt="" style={{
							objectFit: 'cover',
							height: '350px',
							width: '690px'
						}}/>
						<Typography>
							ПЭТ Бутылки
						</Typography>
					</Box>

				</Grid>
				<Grid item xs={6} component={Link} to={'/catalog/0_12'}>
					<Box >
						<img src={banner2} alt="" style={{
							objectFit: 'cover',
							height: '350px',
							width: '690px'
						}}/>
						<Typography>
							ПЭТ гранулят
						</Typography>
					</Box>

				</Grid>

				<Grid item xs={4} component={Link} to={'/catalog/1'}>
					<Box>
						<img src={banner3} alt=""/>
						<Typography>
							Преформы

						</Typography>
					</Box>

				</Grid>
				<Grid item xs={4} component={Link} to={'/catalog/0_10'}>
					<Box>

						<img src={banner4} alt=""/>
						<Typography>
							ПЭТ кеги

						</Typography>
					</Box>

				</Grid>
				<Grid item xs={4} component={Link} to={'/catalog/0_14'}>
					<Box>
						<img src={banner5} alt="" />
						<Typography>
							Колпачки
						</Typography>
					</Box>

				</Grid>

			</Grid>

			<Box>
				<Box sx={{
					zIndex: 1000,
					position: 'absolute',
					color: 'white',
					marginTop: '50px',
					px: 3
				}}>
					<Typography variant={'h4'} fontWeight={700} sx={{mb: 2}}>
						Купить легко
					</Typography>

					<Typography fontSize={20} sx={{mb: 2}}>
						Оформите заявку по телефону и наш представитель поможет вам с выбором и оформлением
						заказа.
					</Typography>

					<DefaultButton size={'small'} sx={{height: 'fit-content', px: 2, fontWeight: 600, fontSize: 16}}>
						Узнать подробнее
					</DefaultButton>
				</Box>
				<Box
					sx={{
						color: 'white',
						zIndex: 1,
						width: '100%',
						filter: 'brightness(70%)'
					}}
				>
					<img src={info} alt="" style={{width: '100%', height: '250px', objectFit: 'cover'
					}}/>
				</Box>

			</Box>




			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				my: 2
			}}>
				<Typography variant={'h4'} fontWeight={700}>
					Бутылки ПЭТ

				</Typography>

				{customArrows(drinksCarRef)}
			</Box>
			<ItemsCarousel responsive={responsive}
						   ref={(el) => setDrinksCarRef(el)}
						   arrows={false}
			>
				{catalog.products.filter(item => item.category.name === 'ПЭТ бутылки').map((item) => (
					<ProductCard product={item} setOpen={setOpen}/>
				))}
			</ItemsCarousel>


			<Box sx={{
				display: 'flex',
				justifyContent: 'space-between',
				my: 2
			}}>
				<Typography variant={'h4'} fontWeight={700}>
					Колпачки
				</Typography>

				{customArrows(nutsCarRef)}
			</Box>
			<ItemsCarousel responsive={responsive}
						   ref={(el) => setNutsCarRef(el)}
						   arrows={false}
			>
				{catalog.products.filter(item => item.category.name === 'Колпачки').map((item) => (
					<ProductCard product={item} setOpen={setOpen}/>
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


			<LoginWarningDialog open={open} setOpen={setOpen}/>

		</>
	);
};

export default MainContent;