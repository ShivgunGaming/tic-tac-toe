function getUserInput(nextPlayerSymbol) {
    return prompt(`Place ${nextPlayerSymbol} at coordinate (0 - 9):`);
  }
  
  function isMoveValid(coordinates, gameBoard) {
    return (
      gameBoard[coordinates] === null && Number(coordinates) < gameBoard.length
    );
  }
  
  function makeAMove(gameBoard, nextPlayerSymbol) {
    let coordinates = getUserInput(nextPlayerSymbol);
    let newGameBoard = [...gameBoard];
  
   
    while (!isMoveValid(coordinates, gameBoard)) {
      coordinates = getUserInput(nextPlayerSymbol);
    }
  
  
    newGameBoard[coordinates] = nextPlayerSymbol;
  
    return newGameBoard;
  }
  
  
  function hasLastMoverWon(lastMove, gameBoard) {
    let winnerCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let [i1, i2, i3] of winnerCombos) {
      if (
        gameBoard[i1] === lastMove &&
        gameBoard[i1] === gameBoard[i2] &&
        gameBoard[i1] === gameBoard[i3]
      ) {
        return true;
      }
    }
    return false;
  }
  
  
  function isGameOver(gameBoard, currentPlayerSymbol) {
    const lastMove = currentPlayerSymbol;
  
   
    if (hasLastMoverWon(lastMove, gameBoard)) {
      
      alert(`Congratulations ${currentPlayerSymbol}, you have won the game.`);
      return true;
    }
   
    if (!gameBoard.includes(null)) {
      alert("Game has ended in a draw!");
      return true;
    }
  
  
    return false;
  }
  
  
  function ticTacToe() {
    let gameBoard = new Array(9).fill(null);
    let players = ["X", "O"];
    let nextPlayerIndex = 1;
    let currentPlayerSymbol = players[nextPlayerIndex];
  
    do {
      if (nextPlayerIndex === 0) {
        nextPlayerIndex = 1;
      } else {
        nextPlayerIndex = 0;
      }
      currentPlayerSymbol = players[nextPlayerIndex];
  
   
      gameBoard = makeAMove(gameBoard, currentPlayerSymbol);
  
      
      alert(`
        ${gameBoard[0]}|${gameBoard[1]}|${gameBoard[2]}
        ${gameBoard[3]}|${gameBoard[4]}|${gameBoard[5]}
        ${gameBoard[6]}|${gameBoard[7]}|${gameBoard[8]}
      `);
    } while (!isGameOver(gameBoard, currentPlayerSymbol));
  }
  
  
  ticTacToe();