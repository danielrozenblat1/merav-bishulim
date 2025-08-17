import styles from "./ForthScreen.module.css"

import count from "../Icons/wired-lineal-1809-scoreboard.json"

import { useEffect, useRef } from "react"
import { Player } from "@lordicon/react"
import SecondScreen from "./SecondScreen"
import ThirdScreen from "./ThirdScreen"
import Button from "../components/Button/Button"

const ForthScreen=()=>{
    const playerRef1=useRef(null)
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
  
    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
    },[])
   return <>
   <div className={styles.title}>סוף החודש הגיע</div>
   <div className={styles.description}>פתחת את העובר ושב וראית שירדו לך כמה אלפי שקלים על משלוחי אוכל לילדים ואמרת לעצמך : "איך זה הגיוני"</div>
   <div className={styles.icon}>
   <Player icon={count} size="100%" ref={playerRef1} onComplete={handleComplete} />
   </div>
   <div className={styles.descriptionB}>יודע/ת מה- אפילו יותר מזה - האוכל היה אוכל תעשייתי ולא לקח יותר מדי זמן עד שהוא נגמר והילדים היו שוב רעבים…
   </div>
   <div className={styles.descriptionB}>וכאן אני נכנסת לתמונה</div>
  <ThirdScreen/>
  <div className={styles.description}>תלחצ/י על הכפתור הבא ותעש/י את הצעד הראשון בלחסוך אלפי שקלים בחודש!</div>
  <Button text="לחץ כאן לשיחת ייעוץ ללא עלות"/>
</>  


}
export default ForthScreen