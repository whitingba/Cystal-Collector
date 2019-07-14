//variables
//wins or losses counter:
let winsCounter = 0;
let lossCounter = 0;
//random number generated for number of crystals to get
let compRandomNum = Math.floor(Math.random() * 102) + 19;
//randum number generated for each of the four cystals
let crystalRandonNumOne = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumTwo = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumThree = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumFour = Math.floor(Math.random() * 12) + 1;
//array for the randum number for each crystal to go to
let crystalGuessArray = [];





//check that the user's score is less than the random number to meet and if it is the numbers will continue to the array 
let checkMyTotal = function (parameterOne) {
    if (calculateTotal() < compRandomNum) {
        //then the random number will be pushed to the array
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

//reset game for new play. Game message banner reads: "You win/lose, click here to play again"
let resetGame = (function () {
    //on click of message banner
    $("#gameOutcome").click(function () {
        //new random number is generated
        //FIXME: not generating random number upon click to reset game
        $("#randomNumber").html(compRandomNum);
        //message banner changes with what to do next
        $("#gameOutcome").text("Click the crystals to match the number above");
        //the players score resets message
        $("#playerScore").text("Your score");
        //guess array clears
        crystalGuessArray = [];
    });
});

//function created to handle what happens when the user wins or loses
let winOrLose = function () {
    //The user will keep clicking the crystals until it matches the randomNumber without going over
    //If the user matches the randonNumber => 'You win!' will show on the screen 
    if (calculateTotal() === compRandomNum) {
        $("#gameOutcome").text("You win, click here to play again!");
        //winsCounter increases by 1
        winsCounter = winsCounter + 1;
        //display wins count on screen
        $("#wins").text("Wins: " + winsCounter);
        //call reset game function
        resetGame();
    }
    //If their score is greater than the randonNumber => 'You lose, try again!' and losses will increase by 1
    if (calculateTotal() > compRandomNum) {
        $("#gameOutcome").text("You lose, click here to play again!");
        lossCounter = lossCounter + 1;
        $("#losses").text("Losses: " + lossCounter);
        //call reset game function
        resetGame();

    }
};

//FIXME: only count one loss or one win. remove the ability to count multiple wins or losses with additional
//clicks to the crystals



$(document).ready(function () {

    //to start the game the game message banner is clicked 
    $("#gameOutcome").click(function () {


        // random number of 'cystals' is generated and placed in the 'Crystals to collect' box
        $("#randomNumber").html(compRandomNum);

        //Message banner changes with new instructions:
        $("#gameOutcome").text("Click the crystals to match the number above");

        //TODO:- appears I have removed the issue with clicking on gameOutcome banner and generating a new
        //random compRandomNum on each click. Just double check this is still working before submission

    });

    //When one of the crystals is 'clicked' a random number (1-12) will be genarated
    $('#GemOne').click(function () {

        checkMyTotal(crystalRandonNumOne);
        //and as the crystals are clicked the #playerScore will increase
        $("#playerScore").text(calculateTotal());
        //call win/lose function
        winOrLose();
    });
    //click event for GemTwo same functions as GemOne
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


