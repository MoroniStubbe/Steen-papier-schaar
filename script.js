var choice1 = 0;
var choice2 = 0;
var winner = "";
var choicesMade = false;
var players = ["Niemand", "Player 1", "Player 2"];
var turn = players[1];
var playtimes = 1;
var score1 = 0;
var score2 = 0;
var result = "";

function changeStyle(id, styleType, value) {
    document.getElementById(id).style[styleType] = value;
}

function changeInnerHTML(id, value) {
    document.getElementById(id).innerHTML = value;
}

function getElementById(id) {
    return document.getElementById(id);
}

function randomBetween(low, high) {
    number = low + Math.floor(Math.random() * (high - low + 1));
    return number;
}

function mode() {
    players[2] = getElementById('mode').value;
    changeInnerHTML('player2', players[2]);
}

function computerChoice() {
    number = randomBetween(0, 2);
    switch (number) {
        case 0 :
            choice2 = "rock";
            break;
        case 1 :
            choice2 = "paper";
            break;
        case 2 :
            choice2 = "scissors";
            break;
    }
}

function makeChoice(player, choice) {
    switch (turn) {
        case players[1] :
            choice1 = choice;
            turn = players[2];
            changeInnerHTML('turn', turn);
            changeStyle('turn', 'color', 'red');
            if(players[2] === "Computer"){
                computerChoice();
                turn = players[1];
                changeInnerHTML('turn', turn);
                changeStyle('turn', 'color', 'limegreen');
                choicesMade = true;
            }
            break;

        case players[2] : {
            choice2 = choice;
            turn = players[1];
            changeInnerHTML('turn', turn);
            changeStyle('turn', 'color', 'limegreen');
            choicesMade = true;
        }
    }
}

function whoWins() {
    switch (choice1 + choice2) {
        case 'rockscissors' :
        case 'paperrock' :
        case 'scissorspaper' :
            winner = players[1];
            break;
        case 'rockpaper' :
        case 'paperscissors' :
        case 'scissorsrock' :
            winner = players[2];
            break;
        case 'rockrock' :
        case 'paperpaper' :
        case 'scissorsscissors' :
            winner = players[0];
            break;
    }
}

function score(winner) {
    switch (winner) {
        case players[1] :
            score1++;
            changeInnerHTML('score1', score1);
            break;
        case players[2] :
            score2++;
            changeInnerHTML('score2', score2);
            break;
    }
}

function resultSentence(winner) {
    switch (winner) {
        case players[0] :
            result = "Gelijkspel";
            changeStyle('result', 'color', 'blue');
            break;
        case players[1] :
            result = players[1] + " wint";
            changeStyle('result', 'color', 'limegreen');
            break;
        case players[2] :
            result = players[2] + " wint";
            changeStyle('result', 'color', 'red');
            break;
    }
    changeInnerHTML('result', result)
}

function smallReset() {
    choice1 = 0;
    choice2 = 0;
    winner = "";
    choicesMade = false;
}

function reset() {
    smallReset();
    score1 = 0;
    score2 = 0;
    turn = players[1];
    playtimes = 1;
    result = "";
    changeInnerHTML('score1', score1);
    changeInnerHTML('score2', score2);
    changeInnerHTML('turn', turn);
    changeInnerHTML('game', playtimes);
    changeInnerHTML('result', result);
    changeStyle('turn', 'color', 'limegreen');
}

function rps(choice) {
    mode();
    makeChoice(turn, choice);
    if (choicesMade === true) {
        whoWins();
        score(winner);
        resultSentence(winner);
        changeInnerHTML('game', playtimes);
        playtimes++;
        smallReset();
    }
}