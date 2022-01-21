import { useEffect, useRef, useState } from "react";
import { onScore } from "./Score";

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
        <div>
        {isStart ? 
        <h1>게임중</h1> :
        <h1>게임중이 아니다</h1>
        }
        <h2>0</h2>
        </div>
    )
}

export default Backgroun;