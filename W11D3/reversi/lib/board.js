let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  
  //var sample = new Array();
 // sample.push(new Object());
  let grid = new Array;
  for (let i = 0; i < 8; i++) {
    let row = new Array(8);
    // for (let j = 0; j < 8; j++) {
    //   row.push(new Piece())
    // }
    grid.push(row);
  }

  let blackPiece1 = new Piece("black");
  let blackPiece2 = new Piece("black");
  let whitePiece1 = new Piece("white");
  let whitePiece2 = new Piece("white");

  grid[3][4] = blackPiece1;
  grid[4][3] = blackPiece2;
  grid[3][3] = whitePiece1;
  grid[4][4] = whitePiece2;

  return grid;
}

// X X X X X X X X    0
// X X X X X X X X    1
// X X X X X X X X    2
// X X X W B X X X    3
// X X X B W X X X    4
// X X X X X X X X    5
// X X X X X X X X    6
// X X X X X X X X    7

// 0 1 2 3 4 5 6 7

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();

 
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos)) {
    return this.grid[pos[0]][pos[1]];
  } else {
    throw new Error( 'Not valid pos!');
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
   return (this.validMoves(color).length > 0);
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.isOccupied(pos))
    return (this.grid[pos[0]][pos[1]].color === color);
  else
    return null;
  
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return (this.isValidPos(pos) && this.grid[pos[0]][pos[1]]) // !== null )
};


/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  return (!this.hasMove("white")&& !this.hasMove("black"))
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
 return (pos[0] > -1 && pos[0] < 8 && pos[1] > -1 && pos[1] < 8); 
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  // if board[pos+dir] = oppcolor
  // if board[pos+n*dir] = same_color
  //push all the intermediate pos into piecesToFlip
  let x = pos[0] + dir[0];
  let y = pos[1] + dir[1];
  pos1 = [x,y]
  if (!board.isOccupied(pos1) || !board.isValidPos(pos1) ){
       // console.log(`Is Occupied : ${board.isOccupied(pos1)} `)
        return null;
  }else{
    if (!board.isMine(pos1, color)){
      piecesToFlip.push([x,y]);
      
      //x = pos1[0] + dir[0];
      //y = pos1[1] + dir[1];
     return _positionsToFlip(board, [x,y], color, dir, piecesToFlip);
    } else if (board.isMine(pos1, color)){
        if(piecesToFlip ) {
         return piecesToFlip;
        }else{
          // console.log("At the right mark")
           return null;
        }
    }
  }
  

}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if(this.validMove(pos, color)){
   this.grid[pos[0]][pos[1]] = new Piece(color)
   let valid;
    for (let i = 0; i < 8; i ++) {
      let piecesToFlip = new Array;
      valid = _positionsToFlip(this, pos, color, Board.DIRS[i], piecesToFlip);
      if (valid && valid.length > 0) {
          for(j=0;j<valid.length;j++){
            x= valid[j][0];
            y = valid[j][1]
            this.grid[x][y].flip();
          }
        
      }
    }
    
  }else{
    throw new Error("Invalid move");
  }
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  this.grid.forEach(function (row) {
    let new_row = row.map(p => p.toString());
    console.log(new_row);
  });
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  
  if (this.isOccupied(pos)){
    return false;
    // const 
    // _positionsToFlip(board, pos, color, dir, piecesToFlip)
  }
 
  let pieces;
  for(let i=0;i<8;i++) {
     let piecesToFlip = new Array;
     pieces = _positionsToFlip(this, pos, color, Board.DIRS[i], piecesToFlip);
    //console.log("Pieces: ", pieces)
     if (pieces && pieces.length > 0) {
      //console.log("True I: ", i, "Dir: ", Board.DIRS[i], "pieces: ", pieces);
      return true;
    } 

  }
  //console.log("False I: ", i, "Dir: ", Board.DIRS[i], "pieces: ", pieces);
  return false;

};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  const valid = new Array;

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (this.validMove([i, j], color)) {
        valid.push([i, j]);
      }
    }
  }
  return valid;
};

module.exports = Board;

//  const A = new Board;
// piecesToFlip = new Array
// const myArr = _positionsToFlip(A, [2,3], "white", [1,1], piecesToFlip) 
// console.log("MyArr :" , myArr)
// val = A.validMove([2,3], "white")
// console.log("Val: ", val)
// myArr1 = A.validMoves("black")
// console.log("MyArr: ", myArr1);

//assert.equal(testBoard.validMove([2, 3], "white"), false);

