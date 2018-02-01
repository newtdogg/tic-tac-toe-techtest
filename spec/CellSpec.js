describe("Cell", function(){

  var cell;

  beforeEach(function() {
    cell = new Cell()
  });

  it("should get a O or X on initialization", function(){
    cell.inputValue('X')
    expect(cell.value).toEqual('X')
  })
})
