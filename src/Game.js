function Game(player1, player2){
  this.board = [[null, null, null], [null, null, null], [null, null, null]]
  this.turn = 1
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.playersTurn = function (player, x, y) {
  this.turn += 1
};
