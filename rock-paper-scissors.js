// Function to play the game
function playGame(playerChoice) {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = '';

    // Determine the winner
    if (playerChoice === computerChoice) {
        result = `It's a tie! Both chose ${playerChoice}.`;
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock')
    ) {
        result = `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        result = `Computer wins! ${computerChoice} beats ${playerChoice}.`;
    }

    // Display the result
    document.getElementById('resultText').innerText = `Computer chose: ${computerChoice}\n${result}`;
}

// Function to restart the game
function restartGame() {
    document.getElementById('resultText').innerHTML = `<p>Choose your move to play against the computer!</p>`;
}
