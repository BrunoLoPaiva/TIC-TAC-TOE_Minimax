//Game vars
logText('NEW GAME');
logText(`&nbsp`);

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let round = 0;

function logText(text) {
    let logDiv = document.getElementById("log");

    let nodeText = document.createElement('div');
    nodeText.innerHTML = text;

    logDiv.appendChild(nodeText)

}

// Function to make a move on the board
function makeMove(index) {

    if (board[index] !== '') {
        return;
    }

    logText(`Round ${round}`);
    logText(`Turn of player [${currentPlayer}]\n`);

    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    // Check game result
    if (checkWinner(board)) {
        alert('Winner: ' + currentPlayer);
        resetBoard();
        return;
    } else if (isGameOver(board)) {
        alert('Tie!');
        resetBoard();
        return;
    }

    logText(`The player [${currentPlayer}] chose position 3`);
    logText(`&nbsp`);

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // AI move
    if (currentPlayer === 'O') {
        setTimeout(computerMove, 500);
    }
    round++;
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
    round = 0;

    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
}

// Function for the computer move using the Minimax algorithm
function computerMove() {
    const bestMove = findBestMove(board);
    makeMove(bestMove);
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