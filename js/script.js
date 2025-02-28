function getMoveName(moveNumber) {
  if (moveNumber == 1) {
    return 'kamień';
  } else if (moveNumber == 2) {
    return 'papier';
  } else if (moveNumber == 3) {
    return 'nożyce';
  } else {
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove) {
  if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Przegrywasz!');
  } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Przegrywasz!');
  } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
    printMessage('Przegrywasz!');
  } else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Nie wybrałeś poprawnej wartości!');
  }
}

function playGame(playerInput) {
  clearMessages(); {
    document.getElementById('messages').innerHTML = '';
}
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

  printMessage('Mój ruch to: ' + computerMove);
  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);
}

// Dodanie listenerów do przycisków
document.getElementById('play-rock').addEventListener('click', function () {
  playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
  playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
  playGame(3);
});
