//jQuery("h1").css("color", "red");

// $("h1").css("color", "red");

// $("h1").addClass("big-title")

// $("h1").click(function()
// {
//     $("h1").css("color", "purple");
// });


// $(document).keydown(function(event){
//     $("h1").text(event.key);
// });

$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5});
});