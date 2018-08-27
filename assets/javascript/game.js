var wins = null;
var losses = null;
var targetScore = null;
var playerScore = null;

//random crystal values

var crys1 = null;
var crys2 = null;
var crys3 = null;
var crys4 = null;

var crystal = null;

$(document).ready(function () {
    crys1 = Math.floor((Math.random() * 12) + 1);

    crys2 = Math.floor((Math.random() * 12) + 1);

    crys3 = Math.floor((Math.random() * 12) + 1);

    crys4 = Math.floor((Math.random() * 12) + 1);

    targetScore = Math.floor((Math.random() * 120) + 19);

    $("#targetScore").append(targetScore);

    $("#1").on("click", function () {
        console.log("first crystal");
        console.log(crys1);
        console.log(crystal);
        $("#playerScore").append(parseInt(crys1 + crystal));
    })

    $("#2").on("click", function () {
        console.log("second crystal");
        console.log(crys2);
        $("#playerScore").append(parseInt(crys2));
    })

    $("#3").on("click", function () {
        console.log("third crystal");
        console.log(crys3);
    })

    $("#4").on("click", function () {
        console.log("fourth crystal");
        console.log(crys4);
    })
});