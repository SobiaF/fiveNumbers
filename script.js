const fiveNumbers = [1, 25, 10, 5, 7];

const randomNumber = Math.floor(Math.random() * fiveNumbers.length);
console.log(fiveNumbers[randomNumber]);

const selectedNumber = fiveNumbers[randomNumber];

let guessesRemaining = 3;

function checkGuess() {
    const myGuess = parseInt(guess.value);
    console.log(myGuess, selectedNumber);
    if (myGuess === selectedNumber) {
        feedback.textContent = "Yay you got the number right!";
    } else if (myGuess > selectedNumber) {
        feedback.textContent = "smaller";
    } else if (myGuess < selectedNumber) {
        feedback.textContent = "larger";
    }
    guessesRemaining--;
    if (guessesRemaining < 0) {
        feedback.textContent = "You're out of chances. The number was "
            + selectedNumber;
    }
    console.log(guessesRemaining);
}
