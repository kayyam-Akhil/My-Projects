var player1=prompt("enter Player 1 Name");
if(player1==null){
    player1="player1";
}
var player2=prompt("enter Player 2 Name");
if(player2==null){
    player2="player2";
}

function diceroll(){


var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceimage="dice"+randomNumber1 +".png"; //dice1png-dice6png
var randomimagesource="images/"+ randomDiceimage;

var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomimagesource2="images/dice"+ randomNumber2 +".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = player1 + " Wins!";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = player2 + " Wins!";

}
else{
    document.querySelector("h1").innerHTML= "Draw";
}

}