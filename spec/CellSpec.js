describe("Cell", function(){

  var cell;

  beforeEach(function() {
    cell = new Cell('X')
  });

  it("should get a O or X on initialization", function(){
    expect(cell.value).toEqual('X')
  })
})
