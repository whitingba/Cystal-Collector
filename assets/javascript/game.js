$(document).ready(function () {

    //VARIABLES

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
    //set game state
    let gameOver = true;


    //FUNCTIONS

    //check that the user's score is less than the random number generated and if it is less  
    //then the numbers will continue to the array 
    let checkMyTotal = function (userScore) {
        //as well as if the game is not over it will push to the array
        if (calculateTotal() < compRandomNum && gameOver === false) {
            //then the random number will be pushed to the array
            crystalGuessArray.push(userScore);
        }
        //else, if the user's total is = to or greater than the game state, gaveOver is true.
        else {
            gameOver = true;

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
            $("#gameOutcome").text("You win, click here to play again!");
            //winsCounter increases by 1
            winsCounter = winsCounter + 1;
            //display wins count on screen
            $("#wins").text("Wins: " + winsCounter);
            //state of the game set to true
            gameOver = true;

        }
        //If their score is greater than the randonNumber => 'You lose, try again!' and losses will increase by 1
        if (calculateTotal() > compRandomNum) {
            $("#gameOutcome").text("You lose, click here to play again!");
            lossCounter = lossCounter + 1;
            $("#losses").text("Losses: " + lossCounter);
            //state of the game set to true
            gameOver = true;

        }
    };
    //FIXME: Note to TA: At end of game need to get wins / losses to stop counting when clicking crystals
    //have not been able to come up with a solution for this to stop happening. I've tried mutiple things that 
    //ended up breaking other things in the game. This was the best solution with the least bugs.



    //reset game for new play. Game message banner reads: "You win/lose, click here to play again"
    let resetGame = (function () {
        //if state of game, gaveOver is true, then:
        if (gameOver === true) {
            compRandomNum = Math.floor(Math.random() * 102) + 19;
            //new random number is generated
            $("#randomNumber").html(compRandomNum);
            //the players score resets message to "Your Score"
            $("#playerScore").text("Your score");
            //guess array clears to reset game
            crystalGuessArray = [];
            //new random numbers are generated for the crystals
            crystalRandonNumOne = Math.floor(Math.random() * 12) + 1;
            crystalRandonNumTwo = Math.floor(Math.random() * 12) + 1;
            crystalRandonNumThree = Math.floor(Math.random() * 12) + 1;
            crystalRandonNumFour = Math.floor(Math.random() * 12) + 1;

        }
    });

    //to start the game the game message banner is clicked 
    $("#gameOutcome").click(function () {

        if (gameOver === false) {

            // random number of 'cystals' is generated and placed in the 'Crystals to collect' box
            $("#randomNumber").html(compRandomNum);

            //Message banner changes with new instructions:
            $("#gameOutcome").text("Click the crystals to match the number above");

        }
        else {
            //else, if gameOver === true , then call reset game function
            resetGame();
            //game state is set back to false as the game is not over
            gameOver = false;
            //message banner changes with what to do next
            $("#gameOutcome").text("Click the crystals to match the number above");
        }
    });

    //When one of the crystals is 'clicked' a random number (1-12) will be genarated
    $('#GemOne').click(function () {

        //randomNumber is pushed to the array as GemOne is clicked
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


