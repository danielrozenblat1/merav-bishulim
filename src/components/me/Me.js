import React from 'react';
import styles from './Me.module.css';
import merav from '../../images/מירב רוקח.png'
import Button from '../Button/Button';

const WhoAmI = () => {
  return <>
    <div className={styles.container}>
      <h1 className={styles.title}>קצת עלי</h1>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.name}>מירב רוקח</h2>
          <p className={styles.description}>שמי מירב, ואני עוסקת בבישול כבר מעל 20 שנים. אני מבשלת מכל הלב והנשמה, ומביאה את טעמי הבית לכל לקוח ולקוחה. במטבח שלי, הכל מתבצע באהבה – החל מהכנת המנות המפנקות ביותר ועד לשמירה על מטבח נקי ומסודר. אני מתמחה בבישול מגוון של כל סוגי האוכל, מהמטבח הישראלי המסורתי ועד למנות בינלאומיות מכל מטבח שחפצה נפשכם בה, והכי חשוב – אני תמיד דואגת להכניס שמחה לתוך כל סיר וסיר שאני מכינה ולשמור עליכם מרוצים!</p>
        </div>
        <div className={styles.imageContainer}>
          <img src={merav} alt="מירב רוקח" className={styles.image} />
        </div>
      </div>
    </div>
    <Button text="מירב, בואי נדבר"/>
  </>
};

export default WhoAmI;