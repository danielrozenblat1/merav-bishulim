import styles from "./SecondScreen.module.css"
import logo from "../images/מירב בישולים לוגו.png"
const SecondScreen=()=>{


    return <>
    <div className={styles.image}><img className={styles.logo} src={logo} alt="מירב בישולים לוגו"/></div>
    <div className={styles.description}>לבירורים נוספים - 0523936547</div>
    <h1 className={styles.title}>ארוחות ביתיות טעימות לילדים, בלי להיות צמודים למטבח ובלי לבזבז אלפי שקלים בחודש על אוכל מהיר</h1>
    
    </>
}
export default SecondScreen