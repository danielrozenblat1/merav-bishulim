import React, { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import styles from './Box.module.css';

const TransparentBox = ({ title, icon }) => {
    const playerRef1=useRef(null)
    const handleComplete = () => {
        setTimeout(() => {
          playerRef1?.current?.playFromBeginning();
        }, 2500); // play again after 2.5 seconds
      };
  
    useEffect(()=>{
      playerRef1?.current?.playFromBeginning();
    },[])

  return (
    <div className={styles.transparentBox}>
     <div    className={styles.icon}> <Player
        icon={icon}
        size="100%"
     ref={playerRef1}
     onComplete={handleComplete}
      /></div>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default TransparentBox;