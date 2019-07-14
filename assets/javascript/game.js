
let winsCounter = 0;
let lossCounter = 0;
let compRandomNum;
let crystalRandonNumOne = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumTwo = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumThree = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumFour = Math.floor(Math.random() * 12) + 1;
let crystalGuessArray = [];
let gameOver = true;


//check that the user's score is less than the random number to meet and if it is the numbers will continue to the array 
let checkMyTotal = function (parameterOne) {
    if (calculateTotal() < compRandomNum) {
        //that random number will be pushed to the array
        crystalGuessArray.push(parameterOne);
    }
};

//return the total of the numbers in the array
let calculateTotal = function () {
    let total = 0;
    for (var i = 0; i < crystalGuessArray.length; i++) {
        total = total + crystalGuessArray[i];
    }
    return total;
};

//function created to handle what happens when the user wins or loses
let winOrLose = function () {
    //The user will keep clicking the crystals until it matches the randomNumber without going over
    //If the user matches the randonNumber => 'You win!' will show on the screen 
    if (calculateTotal() === compRandomNum) {
        $("#gameOutcome").text("You are a winner!");
        //winsCounter increases by 1
        winsCounter = winsCounter + 1;
        //display wins count on screen
        $("#wins").text("Wins: " + winsCounter);
    }
    //If their score is greater than the randonNumber => 'You lose, try again!' and losses will increase by 1

    if (calculateTotal() > compRandomNum) {
        $("#gameOutcome").text("You lose, click here to play again");
        lossCounter = lossCounter + 1;
        $("#losses").text("Losses: " + lossCounter);

    }
};
//TODO: only count one loss or one win. remove the ability to count multiple wins or losses with additional
//clicks to the crystals


//TODO: create a function as to what happens when the gameOutcome banner is clicked to restart the game




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


        checkMyTotal(crystalRandonNumOne);
        //and as the crystals are clicked the #playerScore will increase
        $("#playerScore").text(calculateTotal());

        winOrLose();
    });
    //click event for GemTwo
    $('#GemTwo').click(function () {

        checkMyTotal(crystalRandonNumTwo);

        $("#playerScore").text(calculateTotal());

        winOrLose();
    });
    //click event for GemThree
    $('#GemThree').click(function () {

        checkMyTotal(crystalRandonNumThree);

        $("#playerScore").text(calculateTotal());

        winOrLose();
    });
    //click event for GemFour
    $('#GemFour').click(function () {

        checkMyTotal(crystalRandonNumFour);

        $("#playerScore").text(calculateTotal());

        winOrLose();
    });





});


