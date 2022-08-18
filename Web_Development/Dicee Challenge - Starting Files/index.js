var randomNo1 = Math.floor(Math.random()*6)+1;
var randomNo2 = Math.floor(Math.random()*6)+1;


var randomDiceImage1 = "images/dice" + randomNo1 + ".png";
var randomDiceImage2 = "images/dice" + randomNo2 + ".png";


document.querySelector(".img1").setAttribute("src", randomDiceImage1)
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if(randomNo2===randomNo1)
{
    document.querySelector("h1").innerHTML = "Woah, Draw!🏳‍🌈";
}
else if(randomNo1 > randomNo2)
{
    document.querySelector("h1").innerHTML = "🏁Player 1 Wins";
}
else
{
    document.querySelector("h1").innerHTML = "Player 2 Wins🏁";
}