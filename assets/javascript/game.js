var randomOne;
var randomTwo;
var randomThree;
var randomFour;
var randomMatch;
var playerTotal;
var wins;
var losses;

function generateNumbers() {
    randomMatch = Math.floor(Math.random() * 120) + 1;
    console.log(randomMatch);
    $('#randomNumber').text(randomMatch);
    randomOne = Math.floor(Math.random() * 12) + 1;
    randomTwo = Math.floor(Math.random() * 12) + 1;
    randomThree = Math.floor(Math.random() * 12) + 1;
    randomFour = Math.floor(Math.random() * 12) + 1
};


playerTotal = 0;
wins = 0;
losses = 0;

$("#playerWins").text(wins);
$("#playerLosses").text(losses);

function reset() {
    generateNumbers();
    playerTotal = 0;
    $('#finalTotal').text(playerTotal);
}

function rad() {
    $('#status').text("Rad");
    wins++;
    $('#playerWins').text(wins);
    reset();
}

function niceTry() {
    $('#status').text('Bad Luck');
    losses++;
    $('#playerLosses').text(losses);
    reset();
}

$(document).ready(function () {
    generateNumbers()
    console.log('playerTotal');

    $('#greenGem').on('click', function () {
        playerTotal = playerTotal + randomOne;
        $('#finalTotal').text(playerTotal);
        if (playerTotal === randomMatch) {
            rad();
        } else if (playerTotal > randomMatch) {
            niceTry();
        }
    });

    $('#orangeGem').on('click', function () {
        playerTotal = playerTotal + randomTwo;
        $('#finalTotal').text(playerTotal);
        if (playerTotal === randomMatch) {
            rad();
        } else if (playerTotal > randomMatch) {
            niceTry();
        }
    });

    $('#purpleGem').on('click', function () {
        playerTotal = playerTotal + randomThree;
        $('#finalTotal').text(playerTotal);
        if (playerTotal === randomMatch) {
            rad();
        } else if (playerTotal > randomMatch) {
            niceTry();
        }
    });

    $('#yellowGem').on('click', function () {
        playerTotal = playerTotal + randomFour;
        $('#finalTotal').text(playerTotal);
        if (playerTotal === randomMatch) {
            rad();
        } else if (playerTotal > randomMatch) {
            niceTry();
        }
    });

});