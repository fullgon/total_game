import { useEffect, useRef } from "react";
import Enemy from "./Enemy";
import playerImg from "../image/player.png"


function Dino({canvas, isStart, setIsStart}){
    const requestAnimationRef = useRef(null);
    const enemyRef = useRef({});

    let isJump = false;
    let isPress = false;

    const image = new Image();
    image.src = playerImg;
    
    const preset = {
        x : 0,
        y : 300,
        width : 40,
        height : 50,
        jumpHeight : 0,//점프높이
        down : 0//내려가기
    }

    const MAX_JUMP = 90;
    const JUMP_INTERVAL = 3;
    
    useEffect(() =>{
        if(canvas !== null){//부모 캔버스 받아왔을 때
            window.addEventListener("keydown", (e) =>{//키다운 이벤트 등록
                e.preventDefault();
                if(e.keyCode === 32 && !isJump){//점프중이 아닐 때 스페이스바를 누르면
                    isPress = true;
                }
            });
            if(isStart){
                requestAnimationRef.current = requestAnimationFrame(render);
            }
            else{
                //canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
            }
            
        }
        
        return () => {
            cancelAnimationFrame(requestAnimationRef.current);
        };
    },[isStart])

    //랜더링
    const render = () =>{
        
        const context = canvas.getContext('2d');

        if(isPress){//스페이스 바가 눌리면
            isJump = true;//점프중으로 바꾸고
            preset.jumpHeight += JUMP_INTERVAL;

            
            enemyRef.current.addJump(preset.jumpHeight);

            if(preset.jumpHeight < MAX_JUMP){//점프높이가 MAX_JUMP가 될 때 까지
                context.clearRect(preset.x, preset.y - preset.jumpHeight, preset.width, preset.height + JUMP_INTERVAL);
                //context.fillRect(preset.x, preset.y - jumpHeight, preset.width, preset.height);//y값에 최대 점프 높이까지 3씩 빼기
                context.drawImage(image, preset.x, preset.y - preset.jumpHeight, preset.width, preset.height);    
            }
            else if(preset.jumpHeight === MAX_JUMP){//끝점 도달 시
                isPress = false;
            }
        }
        else if(!isPress && preset.jumpHeight > 0 && isJump){//점프높이가 0이 될 때 까지
            
            context.clearRect(preset.x, preset.y - MAX_JUMP + preset.down - JUMP_INTERVAL, preset.width, preset.height);
            //context.fillRect(preset.x, preset.y - MAX_JUMP + down, preset.width, preset.height);//y값에 점프높이 빼고 3씩 더해주기
            context.drawImage(image, preset.x, preset.y - MAX_JUMP + preset.down, preset.width, preset.height);

            preset.down += JUMP_INTERVAL;
            preset.jumpHeight -= JUMP_INTERVAL;          

            enemyRef.current.addJump(preset.jumpHeight);
        }
        else{
            isJump = false;
            preset.down = 0;
            context.clearRect(preset.x, preset.y, preset.width, preset.height);
            context.drawImage(image, preset.x, preset.y, preset.width, preset.height);
            
        }

        requestAnimationRef.current = requestAnimationFrame(render);

        /*이미지 넣기
        cosnt image = new Image();
        image.src = 이미지.png or jpg etc..
        image.onload = () =>{
            context.drawImage(image, 시작점, 끝점(, 폭, 높이))
        }        
        */
        
    }
    return (
        <Enemy ref={enemyRef} canvas={canvas} isStart={isStart} setIsStart={setIsStart} playerPreset={preset}/>
    )
}


export default Dino;