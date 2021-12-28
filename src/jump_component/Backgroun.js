import { useEffect, useRef, useState } from "react";
import Dino from "./Dino";

function Backgroun({isStart}) {

   
    return (
        <div>
        {isStart ? 
        <h1>게임중</h1> :
        <h1>게임중이 아니다</h1>
            
        }
        </div>
    )
}

export default Backgroun;