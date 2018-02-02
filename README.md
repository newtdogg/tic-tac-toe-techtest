# Tic-Tac-Toe-techtest

### Rules

- [x] There are two players in the game (X and O)
- [x] Players take turns until the game is over
- [x] A player can claim a field if it is not already taken
- [x] A turn ends when a player claims a field
- [x] A player wins if they claim all the fields in a row, column or diagonal
- [x] A game is over if a player wins
- [ ] A game is over when all fields are taken

### User Stories

```
As a player,
So that I can play tic-tac-toe,
I would like to be able to interact with a 3x3 grid
```

```
As a player,
In order to play tic-tac-toe,
I would like to place a O or X on the grid
```

```
As Player 1,
So I can start the game,
I should have the first turn
```

```
As a player,
So that I can play against another player,
I would like to be able to take a turn
```

```
As a player,
So that I can't cheat,
I can't place an X or O on a previously take square
```

```
As a player,
So that the game can progress,
The turn can end when a player places a O or X
```

```
As a player,
So that I can win a game,
A player wins when they claim all the fields in a row, column or diagonal
```

```
As a player,
So that the game can end,
The game ends when a player wins
```

```
As a player,
So that the game can end,
The game ends when all squares are filled
```

### Difficulties

- When moving functionality into different classes I needed to be more methodological as I was loosing track of what was being tested where. Need to be more pragmatic when doing this.
- Didn't commit enough when I was applying SRP to the code and making new classes
- Need to be careful where I put different functionality
