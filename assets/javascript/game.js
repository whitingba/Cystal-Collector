$(document).ready(function () {

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
    //set game state
    let gameOver = true;

    //TODO:- double check game functions as it should


    //check that the user's score is less than the random number generated and if it is less  
    //then the numbers will continue to the array 
    let checkMyTotal = function (parameterOne) {
        if (calculateTotal() < compRandomNum && gameOver === false) {
            //then the random number will be pushed to the array
            crystalGuessArray.push(parameterOne);
        }
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


    //reset game for new play. Game message banner reads: "You win/lose, click here to play again"
    let resetGame = (function () {
        //if state of game is true, then
        if (gameOver === true) {
            compRandomNum = Math.floor(Math.random() * 102) + 19;
            //new random number is generated
            //FIXME: not generating random number upon click to reset game
            $("#randomNumber").html(compRandomNum);
            //the players score resets message to "Your Score"
            $("#playerScore").text("Your score");
            //guess array clears to reset game
            crystalGuessArray = [];
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
            // compRandomNum = Math.floor(Math.random() * 102) + 19;
            //call reset game function
            resetGame();
            gameOver = false;
            //       message banner changes with what to do next
            $("#gameOutcome").text("Click the crystals to match the number above");
        }
    });

    //When one of the crystals is 'clicked' a random number (1-12) will be genarated
    $('#GemOne').click(function () {
        console.log('Gameover: ' + gameOver);
        // if (gameOver === false) {

        checkMyTotal(crystalRandonNumOne);
        //and as the crystals are clicked the #playerScore will increase
        $("#playerScore").text(calculateTotal());
        //call win/lose function
        winOrLose();
        // }
        // else {
        //     $('#GemOne').off("click");
        // }
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


