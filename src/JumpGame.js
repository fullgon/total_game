import { useEffect, useRef, useState } from "react";
import Backgroun from "./jump_component/Backgroun";
import Dino from "./jump_component/Dino";

export default function JumpGame() {

    const [isStart, setIsStart] = useState(false);

    const canvasRef = useRef(null);
    
    const onStart = () =>
    {
        setIsStart(isStart => isStart = !isStart);
    }

    return(
        <div>
            <canvas ref={canvasRef}  width={500} height={600}></canvas>
            <Backgroun isStart={isStart}/>
            <Dino canvas={canvasRef.current} isStart={isStart}/>

            <button onClick={onStart}>리렌더링겸 게임시작</button>
        </div>
        
    )
}