import { useEffect } from "react";

export default function Dino3({canvas, isStart}){
  
    console.log( canvas);

    useEffect(()=>{


        
        if(canvas !== null){
            const context = canvas.getContext('2d');
            if(isStart){
               
                context.fillRect(0,0,100,100);
                console.log(context);
            }
            else{
                context.clearRect(0,0,canvas.width,canvas.height);
            }
        }



    })
    return(
        <div></div>
    )
}