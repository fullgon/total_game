import { useState } from "react";

function Backgroun() {
    const [isStart, setIsStart] = useState(false);

    return (
        <div>
        {isStart ? null :
            <h1>
                게임 실행중이 아닙니다
            </h1>
        }
        </div>
    )
}

export default Backgroun;