console.log("It's cranjis here, dealing some incompetent tic tac toe magic");

// create variables
var player1;
var player2;
// var xTurn = true;
// var winner = false;
var plays = 0;
var playsArr = [];
var currentPlayer = player1;
var scoreP1 = 0;
var scoreP2 = 0;
var gamepiece = 'X';
var gameButtons = document.getElementsByClassName('game-button');
var currentPlay = 1;
var endMessage = document.getElementById('end-message');
var teamFjordScore = document.getElementById('teamFjordScore');
var teamXScore = document.getElementById('teamXScore');
var turn = document.getElementById('player-turn');
var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');

// check turn

var whichTurn = function () {
  gamepiece = plays % 2 == 0 ? 'X' : 'O';
  turn.innerText = "It's team " + gamepiece + "'s turn";
};

whichTurn();

var checkWinner = function () {
  if (
    (playsArr.includes('X1') &&
      playsArr.includes('X2') &&
      playsArr.includes('X3')) ||
    (playsArr.includes('X4') &&
      playsArr.includes('X5') &&
      playsArr.includes('X6')) ||
    (playsArr.includes('X7') &&
      playsArr.includes('X8') &&
      playsArr.includes('X9')) ||
    (playsArr.includes('X1') &&
      playsArr.includes('X4') &&
      playsArr.includes('X7')) ||
    (playsArr.includes('X2') &&
      playsArr.includes('X5') &&
      playsArr.includes('X8')) ||
    (playsArr.includes('X3') &&
      playsArr.includes('X6') &&
      playsArr.includes('X9')) ||
    (playsArr.includes('X1') &&
      playsArr.includes('X5') &&
      playsArr.includes('X9')) ||
    (playsArr.includes('X3') &&
      playsArr.includes('X5') &&
      playsArr.includes('X7'))
  ) {
    console.log('Team X is the winner!');
    endMessage.innerText = 'Team X is the winner!';
    teamXScore.innerText++;
    return setTimeout(function () {
      nextRound();
    }, 2000);
  } else if (
    (playsArr.includes('O1') &&
      playsArr.includes('O2') &&
      playsArr.includes('O3')) ||
    (playsArr.includes('O4') &&
      playsArr.includes('O5') &&
      playsArr.includes('O6')) ||
    (playsArr.includes('O7') &&
      playsArr.includes('O8') &&
      playsArr.includes('O9')) ||
    (playsArr.includes('O1') &&
      playsArr.includes('O4') &&
      playsArr.includes('O7')) ||
    (playsArr.includes('O2') &&
      playsArr.includes('O5') &&
      playsArr.includes('O8')) ||
    (playsArr.includes('O3') &&
      playsArr.includes('O6') &&
      playsArr.includes('O9')) ||
    (playsArr.includes('O1') &&
      playsArr.includes('O5') &&
      playsArr.includes('O9')) ||
    (playsArr.includes('O3') &&
      playsArr.includes('O5') &&
      playsArr.includes('O7'))
  ) {
    console.log('Team O is the winner!');
    endMessage.innerText = 'Team O is the winner!';
    teamFjordScore.innerText++;
    return setTimeout(function () {
      nextRound();
    }, 2000);
  } else if (plays === 9) {
    console.log('EVERYBODY is a winner :) [aka tie game]');
    endMessage.innerText = 'EVERYBODY is a winner :) [aka tie game]';
    return setTimeout(function () {
      nextRound();
    }, 2000);
  } else {
    return;
  }
};

// var switchTurn = function(){
//   if(!checkWinner()){
//     plays++;
//     gamepiece = plays % 2 == 0 ? player1 : player2;
//     return gamepiece;
//   } else {
//     (checkWinner() === "tie") ? endMessage.innerText = "It's a tie" : endMessage.innerText = gamepiece + ' wins!'
//   }

// gamepiece = plays % 2 == 0 ? 'X' : 'O';

//
var switchGamepiece = function () {
  if (gamepiece === 'X') {
    gamepiece = 'O';
    whichTurn();
    return;
  }
  if (gamepiece === 'O') {
    gamepiece = 'X';
    whichTurn();
    return;
  }
};

// change state of button onclick
var setPiece = function (i) {
  document.getElementById('box' + i).addEventListener('click', function (e) {
    e.target.setAttribute('value', gamepiece);
    plays++;
    console.log(plays);
    playsArr.push(gamepiece + i);
    console.log(playsArr);
    if (plays === 9) {
      checkWinner();
    } else {
      switchGamepiece();
      checkWinner();
    }
  });
};
for (var i = 1; i < 10; i++) {
  gamepiece = plays % 2 == 0 ? 'X' : 'O';
  setPiece(i);
}

// var resetPiece = function (i) {
//   document.getElementById('box' + i).addEventListener('click', function(e){
//       e.target.setAttribute('value', '');
//       currentPlay += 1;
//   });
// };

// see if anybody won

// var columnWin = function(){
//   if(box1.value === 'X'){
//     return true;
//   }
//   console.log(box1.value);
// }

// function to reset and begin new game
// function is referenced in reset button element in html

var nextRound = function () {
  plays = 0;
  playsArr = [];
  endMessage.innerText = '';

  whichTurn();
  // document.getElementById('reset').addEventListener('click', function(){
  for (var i = 1; i < 10; i++) {
    document.getElementById('box' + i).value = '';
    // target.setAttribute('value', '');
  }

  // var whichTurn = function(){
  //   gamepiece = plays % 2 == 0 ? 'X' : 'O';
  //   turn.innerText = 'It\'s team ' + gamepiece + '\'s turn';
  // };

  // })
};;

var resetGame = function () {
  plays = 0;
  playsArr = [];
  gamepiece = 'X';
  endMessage.innerText = '';
  teamFjordScore.innerText = 0;
  teamXScore.innerText = 0;
  // document.getElementById('reset').addEventListener('click', function(){
  for (var i = 1; i < 10; i++) {
    document.getElementById('box' + i).value = '';
    // target.setAttribute('value', '');
  }

  // })
};

resetGame();
