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
  isGameWon()
};

Board.prototype.isGameWon = function (player) {
  for (var i = 0; i < 2; i++){
    if (this.grid[i][0].value === this.grid[i][1].value && this.grid[i][1].value === this.grid[i][2].value){
        this.winner = player
    } else if (this.grid[0][i].value === this.grid[1][i].value && this.grid[1][i].value === this.grid[2][i].value) {
        this.winner = player
    } else if (this.grid[0][0].value === this.grid[1][1].value && this.grid[1][1].value === this.grid[2][2].value) {
        this.winner = player
    } else if (this.grid[0][2].value === this.grid[1][1].value && this.grid[1][1].value === this.grid[2][0].value) {
        this.winner = player
    }
  }
}
