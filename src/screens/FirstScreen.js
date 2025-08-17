import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './FirstScreen.module.css';
import Button from '../components/Button/Button';

const FirstScreen = ({ images }) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slider}>
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`}
              className={styles.backgroundImage}
            />
          </div>
        ))}
      </Slider>
      <main className={styles.mainContent}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>מירב בישולים - מבשלת לכם נוחות</h1>
        </div>
      <Button text="לשיחת ייעוץ ללא עלות לחץ כאן"/>
      </main>
    </div>
  );
};

export default FirstScreen;