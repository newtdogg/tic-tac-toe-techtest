function Board(){
  this.grid = [[null, null, null], [null, null, null], [null, null, null]]
}

Board.prototype.store = function (x, y, cell = new Cell) {
  this.grid[x][y] = cell
};
