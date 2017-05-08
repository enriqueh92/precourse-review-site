const renderBoard = require('../js/connect-four-helper.js')



const board = {
  '(0,5)': 'X',
  '(1,5)': 'O',
  '(1,4)': 'X'
};
const numCols = 7;
const numRows = 6;

const placePiece = function(player, col, row) {
  var cell = `(${col}` + ":" + `${row})`
  if(!(board.cell)) {
  	board[cell] = player;
  }
};

placePiece('O', 2, 5);
placePiece('X', 0, 4);
placePiece('O', 3, 5);
placePiece('X', 0, 3);
placePiece('O', 4, 5);




renderBoard(); // note: this function has been provided for you


/*I don't think I can do this yet.   I tried to import the function renderBoard()
but then it tells me that "_0x07be" is not defined.  I tried to find where it was defined but couldn't.


