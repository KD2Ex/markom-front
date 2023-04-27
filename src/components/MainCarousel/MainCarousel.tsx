import React from 'react';
import carousel1 from "../../assets/carousel1.jpg";
import {Carousel} from "react-responsive-carousel";
import styles from './MainCarousel.module.css';

const MainCarousel = () => {
	return (
		<Carousel showThumbs={false} showStatus={false} showArrows={true} swipeable={true} emulateTouch={true} className={`presentation-mode ${styles.carousel}`}>
			<div style={{height: '475px'}}>
				<img className={styles.carouselImg} src={carousel1}/>
				<h1>Премиум продуты высокого качества</h1>
			</div>
			<div style={{height: '475px'}}>
				<img src={carousel1}/>
				<h1>Legend2</h1>
			</div>
		</Carousel>
	);
};

export default MainCarousel;