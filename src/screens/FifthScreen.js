import InfoBox from "../components/card/Card"
import styles from "./FifthScreen.module.css"
import salads from "../images/סלטים.png"
import morocco from "../images/מרוקאי.png"
import halavi from "../images/חלבי.png"
import mizrahi from "../images/מזרחי.png"
import soups from "../images/מרקים.png"
import vegeterian from "../images/צמחוני.png"
const FifthScreen=()=>{
   return <>
      <div className={styles.title}>סגנונות ההגשה שלי</div>
     <div className={styles.row}>
<InfoBox title="עיקריות" imageUrl={mizrahi} description="בשרים,דגים,תבשילים אותנטים..."/>
<InfoBox title="חלבי" imageUrl={halavi} description="פסטות ,פשטידות,לזניות..."/>
<InfoBox title="תוספות" imageUrl={morocco} description="פירה,קוסקוס,אורז,אפונה וגזר..."/>

</div>
<div className={styles.row}>
<InfoBox title="סלטים" imageUrl={salads} description="סלט ירוק,סלט ערבי,חציל קלוי..."/>
<InfoBox title="מרקים" imageUrl={soups} description="מרק עוף,מרק בטטה,מרק גונדי..."/>
<InfoBox title="צמחוני" imageUrl={vegeterian} description="ממולאים,קציצות ירק,תבשילים..."/>
</div>

</>


}
export default FifthScreen