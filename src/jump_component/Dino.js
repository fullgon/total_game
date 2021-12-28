import { useEffect, useRef, useState } from "react";

function Dino(){
    const canvasRef = useRef(null);
    //블로그는 const로 했는데 나는 const로 하면 오류남 
    let requestAnimationRef = useRef(null);

    let isJump = false;
    let isPress = false;
    let jumpHeight = 0;//점프높이
    let down = 0;//내려가기
    
    const preset = {
        x : 100,
        y : 100,
        width : 50,
        height : 60
    }

    const MAX_JUMP = 90;
    const JUMP_INTERVAL = 3;

    //console.log(jumpHeight);

    useEffect(() =>{//캔버스 그리기
        window.addEventListener("keydown", (e) =>{
            e.preventDefault();
            if(e.keyCode === 32 && !isJump){//점프중이 아닐 때 스페이스바를 누르면
                //점프함수 실행;
                isPress = true;
                console.log("스페이스");
            }
        });
        requestAnimationRef.current = requestAnimationFrame(render);
        return () => {
            cancelAnimationFrame(requestAnimationRef.current);
        };
    },[])

    const render = () =>{
        
        const canvas = canvasRef.current
        const context = canvas.getContext('2d');

        context.lineWidth = 2;
        context.strokeStyle = "black";

        if(isPress){//스페이스 바가 눌리면
            isJump = true;//점프중으로 바꾸고
            jumpHeight += JUMP_INTERVAL;
            if(jumpHeight <= MAX_JUMP){//점프높이가 MAX_JUMP가 될 때 까지
                context.clearRect(0,0,canvas.width,canvas.height);
                context.fillRect(preset.x, preset.y - jumpHeight, preset.width, preset.height);//y값에 최대 점프 높이까지 3씩 빼기
            }
            if(jumpHeight === MAX_JUMP){
                isPress = false;
            }
        }
        else if(!isPress && jumpHeight > 0 && isJump){//점프높이가 0이 될 때 까지
            
            context.clearRect(0,0,canvas.width,canvas.height);
            context.fillRect(preset.x, preset.y - MAX_JUMP + down, preset.width, preset.height);//y값에 점프높이 빼고 3씩 더해주기

            down += JUMP_INTERVAL;
            jumpHeight -= JUMP_INTERVAL;          
        }
        else{
            isJump = false;
            down = 0;
            context.clearRect(0,0,canvas.width,canvas.height);
            context.fillRect(preset.x, preset.y, preset.width, preset.height);
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
        <div>    
            <canvas ref={canvasRef} width={500} height={600} />
        </div>
    )
}


export default Dino;