describe("Game", function(){

  var game;
  var player1;
  var player2;

  beforeEach(function() {
    player1 = jasmine.createSpyObj('player1', ['nothing'])
    player2 = jasmine.createSpyObj('player2', ['nothing'])
    game = new Game(player1, player2)
  });

  describe("should start", function(){

    it("with a board", function(){
      expect(game.board).toEqual([[null, null, null], [null, null, null], [null, null, null]])
    })

    it("on turn 1", function(){
      expect(game.turnCount).toEqual(1)
    })

    it("with player 1", function(){
      expect(game.player1).not.toBeNull();
    })

    it("with player 2", function(){
      expect(game.player2).not.toBeNull();
    })

    it("on Player 1's turn", function(){
      expect(game.turn).toEqual("X")
    })
  })

  describe("on playing", function(){

    it("the turn count should increase when a player takes a turn", function(){
      game.playersTurn(1, 2)
      expect(game.turnCount).toEqual(2)
    })

    it("the turn should switch to the other player", function(){
      game.playersTurn(1, 2)
      expect(game.turn).toEqual("O")
    })
  })
})
