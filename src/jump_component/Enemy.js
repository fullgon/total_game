import { useEffect, useRef } from "react";
import dinoImg from "../image/dino.png"

function Enemy({canvas, isStart}){
    let requestAnimationRef = useRef(null);

    const enemyArr = [];
    const image = new Image();

    let move = 0;
    let frame = 0;
    let index = 0;

    const MOVE_SPEED = 2;

    useEffect(() => {
        if(canvas !== null){
            if(isStart){
                requestAnimationRef.current = requestAnimationFrame(render);
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
        if(frame % 60 === 0){//60프레임당 1번
            const image = new Image();//이미지 객체
            image.src = dinoImg;
            const enemy ={//enemy 객체
                image : image,
                move : 0,
                x : 500,
                y : 100,
                width : 50,
                height : 60
            }

            enemyArr.push(enemy);//enemyArr에 enemy객체 추가
            console.log(enemyArr);
        }

        enemyArr.map((enemy, index, arr) =>{

            if(enemy.x + enemy.width - enemy.move >= 0){
                /*enemy.image.onload = () =>{
                    context.clearRect(0,0,canvas.width,canvas.height);
                    context.drawImage(enemy.image, enemy.x - enemy.move, enemy.y, enemy.width, enemy.height);
                    enemy.move += 2;
                    console.log(enemy.move)
                }*/
                    context.clearRect(enemy.x- enemy.move, enemy.y, enemy.width + MOVE_SPEED, enemy.height);
                    context.drawImage(enemy.image, enemy.x - enemy.move, enemy.y, enemy.width, enemy.height);
                    enemy.move += MOVE_SPEED;
                

            }
            else{
                console.log(`삭제`);
                console.log(arr[0], arr[1], arr[2]);
                arr.shift();
                
                arr[index].move += MOVE_SPEED;
                console.log(arr[0]);
            }
        }) 



        /*move += 2;
        image.src = dinoImg;
        if(preset.x + preset.width - move >= 0){
            image.onload = () =>{
                context.clearRect(0,0,canvas.width,canvas.height);
                context.drawImage(image, preset.x - move, preset.y, preset.width, preset.height);
            }
        }
        else{
            //배열에서 첫번째 요소 삭제
            move = 0;
        }
        */
        
        frame += 1;

        
        requestAnimationRef.current = requestAnimationFrame(render);
    }

    return (
        <div>
        </div>
    )
}

export default Enemy;