{
  const getMoveName = (moveNumber) => {
    if (moveNumber === 1) return 'kamień';
    if (moveNumber === 2) return 'papier';
    if (moveNumber === 3) return 'nożyce';
    return 'nieznany ruch';
  };

  const displayResult = (argComputerMove, argPlayerMove) => {
    if (argComputerMove === argPlayerMove) {
      printMessage('Remis!');
    } else if (
      (argComputerMove === 'kamień' && argPlayerMove === 'papier') ||
      (argComputerMove === 'papier' && argPlayerMove === 'nożyce') ||
      (argComputerMove === 'nożyce' && argPlayerMove === 'kamień')
    ) {
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Przegrywasz!');
    }
  };

  const playGame = (playerInput) => {
    clearMessages();

    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);

    printMessage(`Mój ruch to: ${computerMove}`);
    printMessage(`Twój ruch to: ${playerMove}`);

    displayResult(computerMove, playerMove);
  };

  {
    const playRock = document.getElementById('play-rock');
    const playPaper = document.getElementById('play-paper');
    const playScissors = document.getElementById('play-scissors');

    playRock.addEventListener('click', () => playGame(1));
    playPaper.addEventListener('click', () => playGame(2));
    playScissors.addEventListener('click', () => playGame(3));
  }
}