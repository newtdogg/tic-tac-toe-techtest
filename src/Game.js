function Game(player1, player2, board = new Board){
  this.board = board
  this.turnCount = 1
  this.turn = "X"
  this.player1 = player1
  this.player2 = player2
  this.gameOver = null
}

Game.prototype.playersTurn = function (x, y) {
  this.board.store(x, y, this.turn)
  this.nextTurn()
  board.isGameWon(this.turn)
  this.changeTurn()
};

Game.prototype.changeTurn = function () {
  this.turn === "X" ? this.turn = "O" : this.turn = "X"
};

Game.prototype.ended = function () {
  this.board.winner != null ? this.gameOver = true : this.gameOver = false
}

Game.prototype.nextTurn = function () {
  this.turnCount += 1
};
