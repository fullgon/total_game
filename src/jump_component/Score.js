export function onScore(check){
    let score = 0;
    let interval;

    setTimeout(function Score(){
        if(check){
            score += 2;            
            console.log(check);
            setTimeout(Score, 400); 
        }
        else{
            console.log("멈챠!" + check);    
        }
        
    }, 400)

    return score;
}