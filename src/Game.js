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
  this.board.isGameWon(this.turn)
  if (this.gameOver === null){
    this.changeTurn()
  }
  console.log(this.turnCount)
  console.log(this.board)
  console.log(this.turn)
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
