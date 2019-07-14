
let winsCounter = 0;
let lossCounter = 0;
let compRandomNum;
let crystalRandonNumOne = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumTwo = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumThree = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumFour = Math.floor(Math.random() * 12) + 1;
let crystalGuessArray = [];


let calculateTotal = function () {
    let total = 0;
    for (var i = 0; i < crystalGuessArray.length; i++) {
        total = total + crystalGuessArray[i];
    }
    return total;
};
//






//game is reset upon on click of a crystal
//If their score is greater than the randonNumber => 'You lose, try again!' and losses will increase by 1
//game is reset upon on click of a crystal


$(document).ready(function () {



    $("#gameOutcome").click(function () {

        //Upon start of game a random number (19 - 120) will be generated and attached to #randonNumber.
        //This is the randon number that the user will try to match by clicking the crystals.
        //To start game they will click any key

        compRandomNum = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").html(compRandomNum);

        //have message: 'Click mouse to begin' change to a new message
        $("#gameOutcome").text("Now click on crystals to add to your score")

        //TODO:- remove random number generating upon multiple clicks to #gameOutcome


    });
    //When one of the crystals is 'clicked' a random number (1-12) will be genarated
    $('#GemOne').click(function () {

        //that random number will be pushed to the array
        crystalGuessArray.push(crystalRandonNumOne);

        //and as the crystals are clicked the #playerScore will increase
        $("#playerScore").text(calculateTotal());
    });
    //click event for GemTwo
    $('#GemTwo').click(function () {

        crystalGuessArray.push(crystalRandonNumTwo);

        $("#playerScore").text(calculateTotal());
    });
    //click event for GemThree
    $('#GemThree').click(function () {

        crystalGuessArray.push(crystalRandonNumThree);

        $("#playerScore").text(calculateTotal());
    });
    //click event for GemFour
    $('#GemFour').click(function () {

        crystalGuessArray.push(crystalRandonNumFour);

        $("#playerScore").text(calculateTotal());
    });

    //The user will keep clicking the crystals until it matches the randomNumber without going over
    //If the user matches the randonNumber => 'You win!' will show on the screen and win score increses by 1




});