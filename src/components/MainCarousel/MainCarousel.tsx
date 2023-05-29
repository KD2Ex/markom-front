import React from 'react';
import carousel1 from "../../assets/carousel1.jpg";
import {Carousel} from "react-responsive-carousel";
import styles from './MainCarousel.module.css';
import mainSlide1 from '../../assets/mainPage/MainSlide1.jpg'

const MainCarousel = () => {
	return (
		<div style={{height: '475px'}} className={`presentation-mode ${styles.carousel}`}>
			<img className={styles.carouselImg} src={mainSlide1}/>
			<h1>ПЭТ продукция высокого качества</h1>
		</div>
	);
};

export default MainCarousel;