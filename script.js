$(".center").hide();
$(".done").click(function() {
    let userInput = $(".qone").val();
    let userInput2 = $(".qtwo").val();
    let userInput3 = $(".qthree").val();
    let anwser = userInput2 * 17;
    $(".result").text(`You get ${anwser} cookie because you like ${userInput} cookies, and that's cool. You'll have tons of cookies but what's cooler is that you like`);
    $(".result").css("font-size", "20px");
    $(".result").css("text-align", "center");
    $(".second").text(`${userInput3} COOKIES`);
    $(".second").css("font-size", "50px");
    $(".second").css("text-align", "center");
    $(".second").css("font-family", "Amatic SC");
    $(".center").show();
});