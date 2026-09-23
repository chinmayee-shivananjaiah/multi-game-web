let board = [];
let currentPlayer = 'red';
let gameOver = false;
let mode = '';

function startGame(selectedMode) {
    mode = selectedMode;
    if (mode === 'computer') {
        alert("You are playing against the computer!");
    }
    initializeBoard();
    renderBoard();
}

function initializeBoard() {
    board = [];
    for (let i = 0; i < 6; i++) {
        board.push(Array(7).fill(null));
    }
}

function handleColumnClick(colIndex) {
    if (gameOver) return;
    
    for (let row = 5; row >= 0; row--) {
        if (!board[row][colIndex]) {
            board[row][colIndex] = currentPlayer;
            renderBoard();
            if (checkWinner()) {
                alert(`${currentPlayer} wins!`);
                gameOver = true;
            } else {
                currentPlayer = currentPlayer === 'red' ? 'yellow' : 'red';
                if (mode === 'computer' && currentPlayer === 'yellow') {
                    setTimeout(computerMove, 500);
                }
            }
            break;
        }
    }
}

function computerMove() {
    const availableCols = [];
    for (let col = 0; col < 7; col++) {
        if (board[0][col] === null) {
            availableCols.push(col);
        }
    }
    const randomCol = availableCols[Math.floor(Math.random() * availableCols.length)];
    handleColumnClick(randomCol);
}

function checkWinner() {
    // Check horizontal, vertical, and diagonal
    // Similar check as in the Tic Tac Toe game, adapted for Connect Four

    return false; // Add logic for Connect Four winner check
}

function renderBoard() {
    const boardElement = document.getElementById('connectFourBoard');
    boardElement.innerHTML = '';
    for (let row = 0; row < 6; row++) {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        for (let col = 0; col < 7; col++) {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (board[row][col]) {
                cellElement.style.backgroundColor = board[row][col];
            }
            cellElement.addEventListener('click', () => handleColumnClick(col));
            rowElement.appendChild(cellElement);
        }
        boardElement.appendChild(rowElement);
    }
}

function restartGame() {
    gameOver = false;
    currentPlayer = 'red';
    initializeBoard();
    renderBoard();
}

initializeBoard();
renderBoard();
