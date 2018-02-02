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
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the top row", function(){
    board = new Board(cell)
    board.grid = [["X", "X", "X"],
                 [cell, cell, cell],
                 [cell, cell, cell]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the middle row", function(){
    board = new Board(cell)
    board.grid = [[cell, cell, cell],
                  ["X", "X", "X"],
                  [cell, cell, cell]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the bottom row", function(){
    board = new Board(cell)
    board.grid = [[cell, cell, cell],
                  [cell, cell, cell],
                  ["X", "X", "X"]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the first vertical row", function(){
    board = new Board(cell)
    board.grid = [["X", cell, cell],
                  ["X", cell, cell],
                  ["X", cell, cell]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the second vertical row", function(){
    board = new Board(cell)
    board.grid = [[cell, "X", cell],
                  [cell, "X", cell],
                  [cell, "X", cell]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the third vertical row", function(){
    board = new Board(cell)
    board.grid = [[cell, cell, "X"],
                  [cell, cell, "X"],
                  [cell, cell, "X"]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the diagonal", function(){
    board = new Board(cell)
    board.grid = [["X", cell, cell],
                  [cell, "X", cell],
                  [cell, cell, "X"]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the diagonal", function(){
    board = new Board(cell)
    board.grid = [[cell, cell, "X"],
                  [cell, "X", cell],
                  ["X", cell, cell]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })
})
