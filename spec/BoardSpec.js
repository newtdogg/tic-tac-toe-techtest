describe("Board", function(){

  var board;
  var cell;

  beforeEach(function() {
    board = new Board()
    board.grid = [[cell, cell, cell],
                  [cell, cell, cell],
                  [cell, cell, cell]]
    cell = jasmine.createSpyObj('cell', ['inputValue', 'value'])
    o = jasmine.createSpyObj('cell', ['inputValue', 'value'])
    cell.value = "X"
  });

  // it("should start with an array of arrays containing cells", function(){
  //   expect(board.grid).toEqual([["x", "x", "x"], ["x", "x", "x"], ["x", "x", "x"]])
  // })

  it("a player can not position their O or X or a previously used square", function(){
    board = new Board
    expect(function() {board.store(1, 2, "X")}).toThrowError("square unavailable")
  })

  it("the board should store the value of the cell", function(){
    expect(board.grid[1][2].value).toEqual("X")
  })

  it("the board should calculate whether a player has won", function(){
    board.isGameWon("X")
    console.log(board.grid)
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the top row", function(){
    board = new Board(cell)
    o.value = "O"
    board.grid = [[cell, cell, cell],
                 [o, o, cell],
                 [cell, o, o]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the middle row", function(){
    board = new Board(cell)
    o.value = "O"
    board.grid = [[o, cell, o],
                  [cell, cell, cell],
                  [cell, o, o]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the bottom row", function(){
    board = new Board(cell)
    o.value = "O"
    board.grid = [[cell, o, o],
                  [o, o, cell],
                  [cell, cell, cell]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the first vertical row", function(){
    board = new Board(cell)
    o.value = "O"
    board.grid = [[cell, o, o],
                  [cell, o, cell],
                  [cell, cell, o]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the second vertical row", function(){
    board = new Board(cell)
    o.value = "O"
    board.grid = [[o, cell, cell],
                  [cell, cell, o],
                  [o, cell, o]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the third vertical row", function(){
    board = new Board(cell)
    o.value = "O"
    board.grid = [[o, cell, cell],
                  [o, o, cell],
                  [cell, o, cell]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the diagonal", function(){
    board = new Board(cell)
    o.value = "O"
    board.grid = [[cell, o, o],
                  [o, cell, o],
                  [o, o, cell]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })

  it("the board should calculate whether a player has won by filling the diagonal", function(){
    board = new Board(cell)
    o.value = "O"
    board.grid = [[o, o, cell],
                  [o, cell, o],
                  [cell, o, o]]
    board.isGameWon("X")
    expect(board.winner).toEqual("X")
  })
})
