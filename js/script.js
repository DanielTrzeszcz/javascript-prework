let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
} else if (playerInput == '2') {
  computerMove = 'papier';
} else if (playerInput == '3') {
  computerMove = 'nożyce';
}
  */

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

/*if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput == '3') {
  playerMove = 'nożyce';
}*/

printMessage('Twój ruch to: ' + playerMove);

if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
} else if ( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!'); }
 else if ( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!'); }
 else if ( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Przegrywasz!'); }
  else if ( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Przegrywasz!'); }
  else if ( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Przegrywasz!'); }
  else if ( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!'); }
  else if ( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis!'); }
  else if ( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis!'); }
  else {
    printMessage('Nie wybrałeś od 1-3 gamoniu!');
  }
  