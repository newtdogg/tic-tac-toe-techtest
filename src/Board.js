function Board(c = new Cell){
  this.grid = [[c, c, c],
               [c, c, c],
               [c, c, c]]
  this.winner = null
}

Board.prototype.store = function (x, y, player) {
  if (this.grid[x][y].value != null) {
    throw new TypeError("square unavailable")
  } else {
    this.grid[x][y].inputValue(player)
  }
};

Board.prototype.gameWon = function (player) {
  if ((this.grid[0][0].value === player) && (this.grid[0][1].value === player) && (this.grid[0][2].value === player)){
    this.winner = player
  } else if ((this.grid[0][0].value === player) && (this.grid[1][0].value === player) && (this.grid[2][0].value === player)) {
    this.winner = player
  } else if ((this.grid[1][0].value === player) && (this.grid[1][1].value === player) && (this.grid[1][2].value === player)) {
    this.winner = player
  } else if ((this.grid[2][0].value === player) && (this.grid[2][1].value === player) && (this.grid[2][2].value === player)) {
    this.winner = player
  } else if ((this.grid[0][1].value === player) && (this.grid[1][1].value === player) && (this.grid[2][1].value === player)) {
    this.winner = player
  } else if ((this.grid[0][2].value === player) && (this.grid[1][2].value === player) && (this.grid[2][2].value === player)) {
    this.winner = player
  } else if ((this.grid[0][0].value === player) && (this.grid[1][1].value === player) && (this.grid[2][2].value === player)) {
    this.winner = player
  } else if ((this.grid[0][2].value === player) && (this.grid[1][1].value === player) && (this.grid[2][0].value === player)) {
    this.winner = player
  }
};
