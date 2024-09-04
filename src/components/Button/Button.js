import React from "react";
import styles from "./Button.module.css";



const Button = (props) => {
  const handleButtonClick = () => {
    const phoneNumber = "+972523936547";
   
    const message =props.message?props.message:"היי מירב ,אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };
  return <button onClick={handleButtonClick} className={styles.button}>{props.text}</button>;
};

export default Button;