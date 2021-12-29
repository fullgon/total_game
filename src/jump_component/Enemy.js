import { useEffect, useRef } from "react";
import dinoImg from "../image/dino.png"

function Enemy({canvas, isStart}){
    let requestAnimationRef = useRef(null);

    const image = new Image();

    let move = 0;
    const preset = {
        x : 100,
        y : 100,
        width : 50,
        height : 60
    }

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
        
        /*context.fillStyle = 'green';
        context.fillRect(preset.x, preset.y, preset.width, preset.height);*/
        move += 2;
        image.src = dinoImg;
        if(preset.x + preset.width - move >= 0){
            image.onload = () =>{
                context.clearRect(0,0,canvas.width,canvas.height);
                context.drawImage(image, preset.x - move, preset.y, preset.width, preset.height);
            }
        }
        else{
            move = 0;
        }
        
        

        //if(move === 50)
          //  move = 0;

        requestAnimationRef.current = requestAnimationFrame(render);
    }

    return (
        <div>
        </div>
    )
}

export default Enemy;