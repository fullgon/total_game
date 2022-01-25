import { forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import dinoImg from "../image/dino.png"
import Score from "./Score"

const Enemy = forwardRef(({canvas, isStart, setIsStart, playerPreset}, ref) => {
    const requestAnimationRef = useRef(null);
    const scoreRef = useRef(null);

    const enemyArr = [];

    let frame = 0;

    let jump = 0;

    const MOVE_SPEED = 6;
    const SPAWN_INTERVER = 100;

    const setJump = (value) => {
        jump = value;
    }

    useImperativeHandle(ref, ()=>({
        wLog : () => console.log(jump),
        addJump : value => setJump(value)
    }))

    useEffect(() => {
        if(canvas !== null){
            if(isStart){
                requestAnimationRef.current = requestAnimationFrame(render);
                scoreRef.current.start();
            }
            else{
                canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
            }
        }
        return () => {
            cancelAnimationFrame(requestAnimationRef.current);
        };
    },[isStart])

    const render = () =>{
        
        const context = canvas.getContext('2d');
        if(frame % SPAWN_INTERVER === 0){//60프레임당 1번
            const image = new Image();//이미지 객체
            image.src = dinoImg;
            const enemy ={//enemy 객체
                image : image,
                move : 0,
                x : 500,
                y : 310,
                width : 30,
                height : 30
            }

            enemyArr.push(enemy);//enemyArr에 enemy객체 추가
        }

        enemyArr.map((enemy, index, arr) =>{
            //충돌 판정
            if(playerPreset.x + playerPreset.width - (enemyArr[0].x - enemyArr[0].move) >= 0
            && (playerPreset.y + playerPreset.height - jump) - enemyArr[0].y >= 0){
                console.log("Game Over : 충돌");
                setIsStart(false);
            }

            if(enemy.x + enemy.width - enemy.move >= 0){
                /*enemy.image.onload = () =>{
                    context.clearRect(0,0,canvas.width,canvas.height);
                    context.drawImage(enemy.image, enemy.x - enemy.move, enemy.y, enemy.width, enemy.height);
                    enemy.move += 2;
                    console.log(enemy.move)
                }*/
                    context.clearRect(enemy.x - enemy.move, enemy.y, enemy.width + MOVE_SPEED, enemy.height);
                    context.drawImage(enemy.image, enemy.x - enemy.move, enemy.y, enemy.width, enemy.height);
                    enemy.move += MOVE_SPEED;
                

            }
            else{
                context.clearRect(enemy.x - enemy.move, enemy.y, enemy.width + MOVE_SPEED, enemy.height);
                arr.shift();//배열 첫 번째 요소 삭제 
                scoreRef.current.addScore();
            }
        }) 

        

        frame += 1;

        requestAnimationRef.current = requestAnimationFrame(render);
    }

    return (
        <div>
            <Score isStart={isStart} ref={scoreRef} />
        </div>
    )
});

export default Enemy;