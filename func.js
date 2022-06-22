let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let result = document.getElementById('result');

let player1Name = prompt("Enter player 1 name")
let player2Name = prompt("Enter player 2 name")

let winner;
let loser;
let randImage = Math.floor(Math.random()*3)+1

const rock=1
const paper=2
const scissors=3

function play(){
    winner=Math.floor(Math.random()*3)+1
    loser=Math.floor(Math.random()*3)+1

    if(winner == rock && loser == scissors){
        console.log("player 1 wins")
        player1.innerHTML = "<img src='img/img1.png' alt='none'>"
        player2.innerHTML = "<img src='img/img3.png' alt='none'>"
        result.textContent=`${player1Name} WINS`

    }else if(winner == paper && loser == rock){
        console.log("player 1 wins")
        player1.innerHTML = "<img src='img/img2.png' alt='none'>"
        player2.innerHTML = "<img src='img/img1.png' alt='none'>"
        result.textContent=`${player1Name} WINS`

    }else if(winner == scissors && loser == paper){
        console.log("player 1 wins")
        player1.innerHTML = "<img src='img/img3.png' alt='none'>"
        player2.innerHTML = "<img src='img/img2.png' alt='none'>"
        result.textContent=`${player1Name} WINS`

    }else if(winner === loser){
        console.log("tie")
        player1.innerHTML = `<img src='img/img${winner}.png' alt='none'>`
        player2.innerHTML = `<img src='img/img${loser}.png' alt='none'>`
        result.textContent="its a tie"
    }else{
        console.log("player 2 wins")
        player1.innerHTML = `<img src='img/img${winner}.png' alt='none'>`
        player2.innerHTML = `<img src='img/img${loser}.png' alt='none'>`
        result.textContent=`${player2Name} WINS`
    }

}
