const fiveNumbers = [1,25,10,5,7]
const random = Math.floor(Math.random() * fiveNumbers.length);
console.log(fiveNumbers[random]);
const selectNumber = fiveNumbers[random];

let guessesRemaining  = 3;

function checkGuess() {
    let myGuess = parseInt (guess.value);
    console.log(myGuess, selectNumber);
    if (myGuess ===  selectNumber) {
        feedback.textContent = "Yay you got the number right!";
    } else if (myGuess > selectNumber) {
        feedback.textContent = myGuess + " smaller";
    } else if (myGuess < selectNumber) {
        feedback.textContent = myGuess + " larger";
    }
    guessesRemaining--;
    if (guessesRemaining < 0) {
        feedback.textContent = "You're out of chances. The number was "
            + selectNumber;
    }
    console.log(guessesRemaining)
}
