describe("Board", function(){

  var board;
  var cell;

  beforeEach(function() {
    board = new Board("x")
    cell = jasmine.createSpyObj('cell', ['inputValue', 'value'])
    cell.value = "X"
  });

  it("should start with an array of arrays containing cells", function(){
    expect(board.grid).toEqual([["x", "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])
  })

  it("a player can not position their O or X or a previously used square", function(){
    board = new Board(cell)
    expect(function() {board.store(1, 2, "X")}).toThrowError("square unavailable")
  })

  it("the board should store the value of the cell", function(){
    board = new Board(cell)
    expect(board.grid[1][2].value).toEqual("X")
  })

  it("the board should calculate whether a player has won", function(){
    board = new Board(cell)
    board.gameWon("X")
    expect(board.winner).toEqual("X")
  })

})
