
let winsCounter = 0;
let lossCounter = 0;
let crystalRandonNumOne = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumTwo = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumThree = Math.floor(Math.random() * 12) + 1;
let crystalRandonNumFour = Math.floor(Math.random() * 12) + 1;
let crystalGuessArray = [];


//




//It will keep this same random number throughout that game play.
//The user will keep clicking the crystals until it matches the randomNumber without going over
//If the user matches the randonNumber => 'You win!' will show on the screen and win score increses by 1
//game is reset upon on click of a crystal
//If their score is greater than the randonNumber => 'You lose, try again!' and losses will increase by 1
//game is reset upon on click of a crystal


$(document).ready(function () {



    $(document).keyup(function () {

        //Upon start of game a random number (19 - 120) will be generated and attached to #randonNumber.
        //This is the randon number that the user will try to match by clicking the crystals.
        //To start game they will click any key

        let compRandomNum = Math.floor(Math.random() * 102) + 19;
        $("#randomNumber").html(compRandomNum);










        //When one of the crystals is 'clicked' a random number (1-12) will be genarated and added
        //to the players score. 
        // $('#GemOne').on('click', function () {


        //         //crystal random number will display in #playerScore on click of crystal
        //         //and as the crystals are clicked the #playerScore will increase



    });

});