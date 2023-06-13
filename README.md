# Tic Tac Toe - Minimax

This is a simple Tic Tac Toe game implemented using HTML, CSS, and JavaScript, with an AI opponent powered by the Minimax algorithm.

## How to Play

1. Open the `index.html` file in a web browser or visit the [live page](https://brunolopaiva.github.io/TIC-TAC-TOE_Minimax/).
2. The game starts with the player [ X ] making the first move.
3. Click on an empty cell to place your X mark.
4. The AI opponent [ O ] will automatically make its move after you.
5. Keep playing until there is a winner or a tie.
6. Click the "Restart game" button to reset the board and play again.

## How Minimax Algorithm Works

The Minimax algorithm is an artificial intelligence technique used in zero-sum games like Tic Tac Toe. It determines the optimal move for the AI player by considering all possible moves and their resulting game outcomes.

The Minimax algorithm works recursively, evaluating all possible moves from the current board state. It assumes that both the AI player and the opponent play optimally, making the best possible move at each turn.

The main idea behind the Minimax algorithm is to assign a score value to each possible move, indicating how favorable the move is for the AI player. The maximum score represents a move that leads to a win, the minimum score represents a move that leads to a loss, and a score of 0 represents a move resulting in a tie.

In the Tic Tac Toe game code, the Minimax algorithm is implemented as follows:

1. The algorithm receives the current state of the board as input.
2. It checks if there is a winner or if the game has ended in a tie. If so, it returns the corresponding score (1 for a win, -1 for a loss, 0 for a tie).
3. Otherwise, the algorithm iterates over all possible moves on the board.
4. For each possible move, the algorithm makes a recursive call to itself, passing the new board state after the move.
5. During the recursive call, the algorithm alternates between maximizing and minimizing the score, assuming that both the AI player and the opponent play optimally.
6. The algorithm returns the maximum score if it is maximizing or the minimum score if it is minimizing.
7. At the topmost recursion level, the algorithm selects the move with the highest score for the AI player.

![MINIMAX - TIC TAC TOE](https://github.com/BrunoLoPaiva/TIC-TAC-TOE_Minimax/assets/70844804/bdaa900f-f584-4c6b-ba49-13f13863b942)


This approach ensures that the AI player makes the best possible move at each turn, considering all possibilities. It assumes that the opponent also makes the best moves, resulting in a competitive game.

It's worth noting that while the Minimax algorithm is effective for games like Tic Tac Toe, it can become computationally expensive for more complex games due to the exponential number of possibilities. Therefore, advanced techniques like alpha-beta pruning are commonly used in more advanced games to reduce the search space and make the algorithm more efficient.


## Features
- Interactive game board: The game board is displayed on the screen, and players can click on the cells to make their moves.
- AI player: The game includes an AI player that uses the Minimax algorithm to make intelligent moves.
- Game log: The game log displays the moves made by each player.
- Scoreboard: The scoreboard shows the current player's turn and the winner at the end of the game.
- Restart game: The "Restart game" button allows players to reset the board and start a new game.

## Implementation Details
- The game board is represented by an array called board, which stores the current state of each cell ('X', 'O', or empty).
- The variable currentPlayer keeps track of the current player ('X' or 'O').
- The game progresses by calling the makeMove function when a player clicks on a cell.
- The makeMove function handles the logic for making a move, updating the board, checking for a winner, and switching players.
- The checkWinner function checks if any player has won the game by comparing the board state with the winning combinations.
- The isGameOver function checks if the game has ended in a draw or a win.
- The resetBoard function resets the game board and other variables to start a new game.
- The AI player's move is determined by the computerMove function, which uses the Minimax algorithm to find the best move.
- The minimax function is a recursive algorithm that evaluates the game state and assigns a score to each possible move.
- The AI player selects the move with the highest score to make its move.

## License
The Tic Tac Toe - Minimax game is open-source software released under the [MIT License](https://opensource.org/licenses/MIT).

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
