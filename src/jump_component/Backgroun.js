import { useEffect, useRef, useState } from "react";
import { onScore } from "./Score";
import styles from "../jump_css/Background.module.css"

function Backgroun({isStart}) {

    let inGameScore = 0;
    let gameOverScore;
    let interval;
    /*useEffect(() =>{
        while(isStart){
            setTimeout(() =>{
                inGameScore += 2;
                console.log(inGameScore);
            }, 1000);
        }
    },[isStart])*/
    
   
    return (
        <div className={styles.align}>
       
        </div>
    )
}

export default Backgroun;