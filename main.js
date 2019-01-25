let score = new Score();
let word = new Word();
let squares = new Square();
let board = new Board();
let end = new End();

score.setPoints();
score.setAttempts();
board.fillBoard(squares);
squares.addListener(board, score, word, end);

