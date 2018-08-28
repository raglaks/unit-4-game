var wins = null;
var losses = null;
var targetScore = null;
var playerScore = null;

//random crystal values

var crys1 = null;
var crys2 = null;
var crys3 = null;
var crys4 = null;

$(document).ready(function () {

    crys1 = parseInt(Math.floor((Math.random() * 12) + 1));

    crys2 = parseInt(Math.floor((Math.random() * 12) + 1));

    crys3 = parseInt(Math.floor((Math.random() * 12) + 1));

    crys4 = parseInt(Math.floor((Math.random() * 12) + 1));

    targetScore = parseInt(Math.floor((Math.random() * 120) + 19));

    $("#targetScore").html(targetScore);

    function second() {
        if (wins || losses) {
            crys1 = parseInt(Math.floor((Math.random() * 12) + 1));

            crys2 = parseInt(Math.floor((Math.random() * 12) + 1));

            crys3 = parseInt(Math.floor((Math.random() * 12) + 1));

            crys4 = parseInt(Math.floor((Math.random() * 12) + 1));

            targetScore = parseInt(Math.floor((Math.random() * 120) + 19));

            $("#targetScore").html(targetScore);
        }
    }

    function reset() {
        crys1 = null;
        crys2 = null;
        crys3 = null;
        crys4 = null;
        targetScore = null;
        playerScore = null;
        $("#targetScore").html(targetScore);
        $("#playerScore").html(playerScore);
    }

    $("#1").on("click", function () {
        console.log("first crystal is worth " + crys1);
        playerScore = crys1 + playerScore;
        console.log("your score is " + playerScore);
        console.log("target score is " + targetScore);
        $("#playerScore").html(playerScore);
        if (playerScore == targetScore) {
            console.log("you win");
            wins++;
            $("#wins").html(wins);
            reset();
            second();
        } else if (playerScore > targetScore) {
            console.log("you lose");
            losses++;
            $("#losses").html(losses);
            reset();
            second();
        }
    })

    $("#2").on("click", function () {
        console.log("second crystal is worth " + crys2);
        playerScore = crys2 + playerScore;
        console.log("your score is " + playerScore);
        console.log("target score is " + targetScore);
        $("#playerScore").html(playerScore);
        if (playerScore == targetScore) {
            console.log("you win");
            wins++;
            $("#wins").html(wins);
            reset();
            second();
        } else if (playerScore > targetScore) {
            console.log("you lose");
            losses++;
            $("#losses").html(losses);
            reset();
            second();
        }
    })

    $("#3").on("click", function () {
        console.log("third crystal is worth " + crys3);
        playerScore = crys3 + playerScore;
        console.log("your score is " + playerScore);
        console.log("target score is " + targetScore);
        $("#playerScore").html(playerScore);
        if (playerScore == targetScore) {
            console.log("you win");
            wins++;
            $("#wins").html(wins);
            reset();
            second();
        } else if (playerScore > targetScore) {
            console.log("you lose");
            losses++;
            $("#losses").html(losses);
            reset();
            second();
        }
    })

    $("#4").on("click", function () {
        console.log("fourth crystal is worth " + crys4);
        playerScore = crys4 + playerScore;
        console.log("your score is " + playerScore);
        console.log("target score is " + targetScore);
        $("#playerScore").html(playerScore);
        if (playerScore == targetScore) {
            console.log("you win");
            wins++;
            $("#wins").html(wins);
            reset();
            second();
        } else if (playerScore > targetScore) {
            console.log("you lose");
            losses++;
            $("#losses").html(losses);
            reset();
            second();
        }
    })

});