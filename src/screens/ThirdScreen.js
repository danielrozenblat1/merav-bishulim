import styles from "./ThirdScreen.module.css"

import home from "../Icons/wired-lineal-511-kitchen.json"
import week from "../Icons/wired-lineal-28-calendar.json"
import money from "../Icons/wired-lineal-414-money-bag-dollar.json"
import { useRef } from "react"
import TransparentBox from "../components/box/Box"
const ThirdScreen=()=>{
   return <>
   <div className={styles.row}>
   <TransparentBox icon={home} title="אוכל ביתי"/>
   <TransparentBox icon={week} title="אספקה לשבוע שלם"/>
   <TransparentBox icon={money} title="מחירים נוחים לכל כיס"/>
   </div>
</>


}
export default ThirdScreen