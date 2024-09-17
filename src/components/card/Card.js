import React from 'react';
import Button from '../Button/Button';
import styles from './Card.module.css';

const InfoBox = ({ title, imageUrl, description }) => {
  return (
    <div className={styles.infoBox}>
      <h2 className={styles.title}>{title}</h2>
      <img src={imageUrl} alt={title} className={styles.image} />
      <p className={styles.description}>{description}</p>
      <Button text="לעוד מידע" message="היי מירב התרשמתי מהתפריט שלך אשמח לקבל פרטים נוספים" />
    </div>
  );
};

export default InfoBox;