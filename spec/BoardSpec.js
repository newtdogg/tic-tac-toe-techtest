describe("Board", function(){

  var board;
  var cell;

  beforeEach(function() {
    board = new Board
    cell = {value: "X"}
  });

  it("should start with an empty array of arrays", function(){
    expect(board.grid).toEqual([[null, null, null], [null, null, null], [null, null, null]])
  })

  it("the board should store the value of the cell", function(){
    board.store(1, 2, cell)
    expect(board.grid[1][2].value).toEqual("X")
  })

})
