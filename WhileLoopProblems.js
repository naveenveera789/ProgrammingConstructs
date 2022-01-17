// Flip coin 
let headCount=0;
let tailCount=0;
while(headCount >= 11 || tailCount >= 11)
{
    let CoinToss = Math.random();
    if(CoinToss >= 0.5)
       headCount++;
    else
       tailCount++;
}
if(headCount == 11)
    console.log("Head Wins!!!");
else
    console.log("Tail Wins!!!");