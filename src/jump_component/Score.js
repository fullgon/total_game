import { forwardRef, useImperativeHandle, useState } from "react";

export default function Score({isStart}, ref){

    const [score, setScore] = useState(0);

    useImperativeHandle(ref, ()=>({
        addScore: () => setScore(score => score = score + 100),
        start: () => setScore(0)
    }))

    return(
        <div>
            {isStart ? 
        <h1>{score}</h1> :
        <h1>점수 : {score}</h1>
        }
        </div>
    )
}
Score = forwardRef(Score);