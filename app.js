const diceArray = ["img/dice1.png","img/dice2.png", "img/dice3.png", "img/dice4.png", "img/dice5.png", "img/dice6.png"];

let score = document.getElementById('score')
let button = document.getElementById('button')
let totalScore = 0

const randomDice = () => {
    let num = Math.floor(Math.random()*(diceArray.length));
    diceImg(num);
    total(num+1);
}
const diceImg = (num) => {
    document.dice.src = diceArray[num];
}
const total = (num) => {
    if (num == 1){
        totalScore = 0;
        score.innerHTML = totalScore
        winLose.innerHTML = "OHHHHH NO.. Rolled a One - YOU LOSE!";
        button.innerHTML = "";
        startAgain.innerHTML = "<button onclick='refresh()'>Start Again</button>";
    } else if ((totalScore += num)>=20){
        score.innerHTML = totalScore;
        winLose.innerHTML = "WINNER WINNER CHICKEN DINNER"
        button.innerHTML = "";
        startAgain.innerHTML = "<button onclick='refresh()'>Start Again</button>";
    }else {
        score.innerHTML = totalScore;
    }
}
const refresh = () => {
    winLose.innerHTML = " Player 1 Score =  ";
    totalScore = 0;
    score.innerHTML = totalScore;
    startAgain.innerHTML = "";
    button.innerHTML = "<button onclick='randomDice()'>Roll Dice!</button>";
    document.dice.src = ""
}