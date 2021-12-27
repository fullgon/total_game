import { useEffect, useRef, useState } from "react";
import Dino from "./Dino";

function Backgroun() {
    const [isStart, setIsStart] = useState(false);

   
    return (
        <div>
        {isStart ? null :
            <h1>게임중</h1>
            //<Dino/>
        }
        </div>
    )
}

export default Backgroun;