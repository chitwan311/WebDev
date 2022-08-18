$("h1");

gamePattern = [];
userClickedPattern = [];

var started=false;
var level=0;

$(document).keydown(function (){
    if(!started){
        $("#level-title").text("Level" + level);
        nextSequence();
        started=true;
    }
});

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence()
{

    level++;
    $("#level-title").text("Level " + level);

    var randomNo = Math.floor(Math.random() * 3);

    var randomChosenColor = buttonColors[randomNo];

    gamePattern.push(randomChosenColor);


    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);

}

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");

    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer(userClickedPattern[userChosenColor]);
});


function playSound(name)
{
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}


function animatePress(currentColor)
{
    $("#"+currentColor).addClass(".pressed");

    setTimeout(function() {
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel)
{
    if(currentLevel===gamePattern)
    {
        
    }
}