import { useEffect, useRef, useState } from "react";
import Backgroun from "./jump_component/Backgroun";
import Dino from "./jump_component/Dino";
import Enemy from "./jump_component/Enemy";

export default function JumpGame() {

    const [isStart, setIsStart] = useState(false);
    const [playerX, setPlayerX] = useState();
    const [playerY, setPlayerY] = useState();
    const [enemyX, setEnemyX] = useState();
    const [enemyY, setEnemyY] = useState();

    const canvasRef = useRef(null);


    
    const onStart = () =>
    {
        setIsStart(isStart => isStart = !isStart);
    }
    return(
        <div>
            <canvas ref={canvasRef}  width={500} height={600}></canvas>
            <Backgroun isStart={isStart}/>

            {<Dino canvas={canvasRef.current} isStart={isStart}/>
            }
            
            
            {//<Enemy canvas={canvasRef.current} isStart={isStart}/>
            }
            

            <button onClick={onStart}>리렌더링겸 게임시작</button>
        </div>
        
    )
}