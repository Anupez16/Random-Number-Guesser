let random = Math.floor(Math.random() * 100) + 1;
let attempt = 5;

document.getElementById("guessBtn").addEventListener("click", function () {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptsDisplay = document.getElementById("attempts");

    if (attempt === 0) {
        message.textContent = `Number of attempts exceeded! The correct number was ${random}`;
        return;
    }

    if (isNaN(guess) || guess < 1 || guess > 100) {
        message.textContent = "Try again! Enter a number between 1 and 100";
        return;
    }

    attempt--;
    attemptsDisplay.textContent = attempt; // Update attempts left

    if (guess > random) {
        message.textContent = "Too high, try again!";
    } else if (guess < random) {
        message.textContent = "Too low, try again!";
    } else {
        message.textContent = `Congrats! The number was ${guess}`;
        document.getElementById("guessBtn").disabled = true;
    }

    if (attempt === 0 && guess !== random) {
        message.textContent = `Game Over! The number was ${random}`;
        document.getElementById("guessBtn").disabled = true;
    }
});
