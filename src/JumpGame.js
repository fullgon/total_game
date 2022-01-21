import { useEffect, useRef, useState } from "react";
import Backgroun from "./jump_component/Backgroun";
import Dino from "./jump_component/Dino";
import styles from "./jump_css/JumpGame.module.css"

export default function JumpGame() {

    const [isStart, setIsStart] = useState(false);

    const canvasRef = useRef(null);


    
    const onStart = () =>
    {
        setIsStart(isStart => isStart = !isStart);
    }
    return(
        <div className={styles.align}>
            <canvas ref={canvasRef}  width={500} height={600} className={styles.canvas}></canvas>
            <Backgroun isStart={isStart}/>

            <Dino canvas={canvasRef.current} isStart={isStart} setIsStart={setIsStart}/>

            <button onClick={onStart} className={styles.button}>리렌더링겸 게임시작</button>
        </div>
        
    )
}