function Game(player1, player2){
  this.board = [[null, null, null], [null, null, null], [null, null, null]]
  this.turnCount = 1
  this.turn = "X"
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.playersTurn = function (x, y, cell = new Cell(this.turn)) {
  if(this.board[x][y] != null){
    throw new TypeError("square unavailable")
  } else {
    this.board[x][y] = cell
    this.turnCount += 1
    this.changeTurn()
  }
};

Game.prototype.changeTurn = function () {
  this.turn === "X" ? this.turn = "O" : this.turn = "X"
};
