import { useEffect, useRef, useState } from "react";

function Dino(){
    const canvasRef = useRef(null);
    //블로그는 const로 했는데 나는 const로 하면 오류남 
    let requestAnimationRef = useRef(null);

    const [isJump, setIsJump] = useState(false);
    const [isPress, setIsPress] = useState(false);
    const [jumpHeight, setJumpHeight] = useState(0);
    const max_jump = 30;
    const preset = {
        x : 50,
        y : 50,
        width : 50,
        height : 60
    }

    useEffect(() =>{//캔버스 그리기
        window.addEventListener("keydown", (e) =>{
            e.preventDefault();
            if(e.keyCode === 32 && !isJump){//점프중이 아닐 때 스페이스바를 누르면
                //점프함수 실행;
                setIsPress(true);
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
        /*if(isPress){//스페이스 바가 눌리면
            console.log("점프~")
            setIsJump(true);//점프중으로 바꾸고
            setJumpHeight(jumpHeight => jumpHeight = jumpHeight + 1);
            if(jumpHeight < max_jump){
                console.log(jumpHeight);                
                context.fillRect(preset.x, preset.y + jumpHeight, preset.width, preset.height);//y값에 점프높이 더하기
            }
        }
        else{
            console.log("여기만나올거지");
            context.fillRect(preset.x, preset.y, preset.width, preset.height);
        }*/

        setJumpHeight(jumpHeight => jumpHeight = jumpHeight + 10);
        if(jumpHeight < max_jump){
                console.log(jumpHeight);
                context.clearRect(0,0, canvas.width, canvas.height);
                context.fillRect(preset.x, preset.y + jumpHeight, preset.width, preset.height);//y값에 점프높이 더하기
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
            <canvas ref={canvasRef} width={500} height={600}/>
        </div>
    )
}


export default Dino;