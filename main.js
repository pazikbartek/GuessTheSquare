let score = new Score();
let word = new Word();
let squares = new Square();
let board = new Board();

score.setPoints();
score.setAttemps();
board.fillBoard(squares);
squares.addListener(board, score, word);

