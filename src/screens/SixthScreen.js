import React from 'react';
import styles from './SixthScreen.module.css';
import image1 from "../images/תפריט עיקריות.png"
import image2 from "../images/תפריט חלבי.png"
import image3 from "../images/תפריט צמחוני.png"
import image4 from "../images/תפריט מרקים.png"
import image5 from "../images/תפריט תוספות.png"
import image6 from "../images/תפריט סלטים.png"
import Button from '../components/Button/Button';
const SixthScreen = () => {

  const images = [
image1,image2,image3,image4,image5,image6
  ];

  return <>
    <div className={styles.container}>
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Image ${index + 1}`} className={styles.image} />
      ))}
    </div>
  <Button text="ראיתי מספיק בואי נדבר!"/>
  </>
};

export default SixthScreen;