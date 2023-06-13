//Game vars
let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let round = 0;
let running = true;

logText('LOG');
logText(`&nbsp`);
document.getElementById('scoreboard-text').innerText = `Turn of player [${currentPlayer}]\n`;

resetButton = document.createElement('button');
resetButton.addEventListener("click", resetBoard);
resetButton.innerText = 'Restart game'





function logText(text) {
    let logDiv = document.getElementById("log");

    let nodeText = document.createElement('div');
    nodeText.innerHTML = text;

    logDiv.appendChild(nodeText);

}

// Function to make a move on the board
function makeMove(index, source) {

    if (board[index] !== '' || !running) {
        return;
    } else if (source == 'player' && currentPlayer != "X") {
        return;
    }



    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;



    // Check game result
    if (checkWinner(board)) {
        document.getElementById('scoreboard-text').innerText = ('Winner: ' + currentPlayer);
        running = false;
        document.getElementById("scoreboard").appendChild(resetButton);
        //resetBoard();
        return;
    } else if (isGameOver(board)) {
        document.getElementById('scoreboard-text').innerText = ('Tie!');
        running = false;
        document.getElementById("scoreboard").appendChild(resetButton);
        // resetBoard();
        return;
    }

    logText(`The player [${currentPlayer}] chose position ${index}`);
    logText(`&nbsp`);

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    logText(`Round ${round}`);
    logText(`Turn of player [${currentPlayer}]\n`);
    document.getElementById('scoreboard-text').innerText = `Turn of player [${currentPlayer}]\n`;

    // AI move
    if (currentPlayer === 'O') {
        setTimeout(computerMove, 500);
    }
    round++;

    document.getElementById('scoreboard-text').innerText = `Turn of player [${currentPlayer}]\n`;
}



// Function to check if any player won the game
function checkWinner(board) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false; // No winner
}

// Function to check if the game ended (draw or win)
function isGameOver(board) {
    return checkWinner(board) || board.every(cell => cell !== '');
}

// Reset the board
function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    running = true;
    round = 0;
    document.getElementById("log").innerHTML = '';
    logText('LOG');
    logText(`&nbsp`);
    document.getElementById('scoreboard-text').innerText = `Turn of player [${currentPlayer}]\n`;
    resetButton.remove()


    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

// Function for the computer move using the Minimax algorithm
function computerMove() {
    const bestMove = findBestMove(board);
    makeMove(bestMove, 'AI');
}

// Function to find the best move using the Minimax algorithm
function findBestMove(board) {
    let bestEval = -Infinity;
    let bestMove;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = 'O';
            const eval = minimax(board, 0, false);

            board[i] = '';

            if (eval > bestEval) {
                bestEval = eval;
                bestMove = i;
            }
        }
    }
    return bestMove;
}

// Minimax function (recursive)
function minimax(board, depth, isMaximizing) {
    if (checkWinner(board)) {
        return isMaximizing ? -1 : 1;
    }

    if (isGameOver(board)) {
        return 0;
    }

    if (isMaximizing) {
        let maxEval = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                const eval = minimax(board, depth + 1, false);
                board[i] = '';
                maxEval = Math.max(maxEval, eval);
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                const eval = minimax(board, depth + 1, true);
                board[i] = '';
                minEval = Math.min(minEval, eval);
            }
        }
        return minEval;
    }
}
