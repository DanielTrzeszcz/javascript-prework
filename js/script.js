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
  if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
  } else if (
    (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
    (argComputerMove == 'papier' && argPlayerMove == 'nożyce') ||
    (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')
  ) {
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Przegrywasz!');
  }
}

function playGame(playerInput) {
  clearMessages(); // Czyści komunikaty

  let randomNumber = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(randomNumber);
  let playerMove = getMoveName(playerInput);

  printMessage('Mój ruch to: ' + computerMove);
  printMessage('Twój ruch to: ' + playerMove);

  displayResult(computerMove, playerMove);
}

// Pobranie przycisków
let playRock = document.getElementById('play-rock');
let playPaper = document.getElementById('play-paper');
let playScissors = document.getElementById('play-scissors');

// Przypisanie funkcji do guzików
playRock.addEventListener('click', function () {
  playGame(1);
});

playPaper.addEventListener('click', function () {
  playGame(2);
});

playScissors.addEventListener('click', function () {
  playGame(3);
});
