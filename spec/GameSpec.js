describe("Game", function(){

  var game;
  var cell;
  var player1;
  var player2;

  beforeEach(function() {
    player1 = jasmine.createSpyObj('player1', ['nothing'])
    player2 = jasmine.createSpyObj('player2', ['nothing'])
    cell = {value: "X"}
    board = jasmine.createSpyObj('board', ['grid', 'winner'])
    game = new Game(player1, player2, board)
  });


  describe("should start", function(){

    it("with a board", function(){
      expect(game.board).not.toBeNull();
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
      game.playersTurn(1, 2, cell)
      expect(game.turnCount).toEqual(2)
    })

    it("the turn should switch to the other player", function(){
      game.playersTurn(1, 2, cell)
      expect(game.turn).toEqual("O")
    })
  })

  describe("ends if", function(){
    it("a player claims all the fields in a row, column or diagonal", function(){
      game.board.winner = true
      game.ended()
      expect(game.gameOver).toBe(true)
    })
  })
})
