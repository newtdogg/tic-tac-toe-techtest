describe("Game", function(){

  var game;

  beforeEach(function() {
    game = new Game
  });

  it("should start the game with a board", function(){
    expect(game.board).toEqual([[null, null, null], [null, null, null], [null, null, null]])
  })
})
