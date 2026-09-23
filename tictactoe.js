let board = ['', '', '', '', '', '', '', '', '']; // Tic Tac Toe board
let currentPlayer = 'X';
let gameOver = false;
let mode = ''; // Game mode

// Start the game based on the selected mode
function startGame(selectedMode) {
    mode = selectedMode;
    if (mode === 'computer') {
        alert("You are playing against the computer!");
    }
    board = ['', '', '', '', '', '', '', '', '']; // Reset the board
    currentPlayer = 'X';
    gameOver = false;
    renderBoard();
}

// Render the board dynamically
function renderBoard() {
    const boardElement = document.getElementById('gameBoard');
    boardElement.innerHTML = ''; // Clear previous board

    board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.innerText = cell;
        cellElement.addEventListener('click', () => handleCellClick(index));
        boardElement.appendChild(cellElement);
    });
}

// Handle a click on a cell
function handleCellClick(index) {
    if (gameOver || board[index]) return; // Ignore if the game is over or the cell is already filled
    
    board[index] = currentPlayer;
    renderBoard(); // Re-render the board
    
    if (checkWinner()) {
        alert(`${currentPlayer} wins!`);
        gameOver = true;
    } else if (board.every(cell => cell)) {
        alert("It's a draw!");
        gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
        
        if (mode === 'computer' && currentPlayer === 'O') {
            setTimeout(computerMove, 500); // Computer makes its move after a short delay
        }
    }
}

// Computer's move (random selection)
function computerMove() {
    const emptyCells = board.map((cell, index) => cell === '' ? index : -1).filter(index => index !== -1);
    const randomMove = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    handleCellClick(randomMove);
}

// Check for a winner
function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6]             // diagonal
    ];

    return winPatterns.some(pattern => {
        return pattern.every(index => board[index] === currentPlayer);
    });
}

// Restart the game
function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameOver = false;
    renderBoard();
}

// Initial render of the game board
renderBoard();
