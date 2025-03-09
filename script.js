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
    attemptsDisplay.textContent = attempt;

    if (guess > random) {
        message.textContent = "Too high, try again!";
    } else if (guess < random) {
        message.textContent = "Too low, try again!";
    } else {
        message.textContent = `🎉 Congrats! The number was ${guess}`;
        document.getElementById("guessBtn").disabled = true;
        startPartyPopperEffect(); // Trigger party popper effect
    }

    if (attempt === 0 && guess !== random) {
        message.textContent = `Game Over! The number was ${random}`;
        document.getElementById("guessBtn").disabled = true;
    }
});

// Function to create party popper petal effect
function startPartyPopperEffect() {
    for (let i = 0; i < 50; i++) {
        let petal = document.createElement("div");
        petal.classList.add("party-petal");
        document.body.appendChild(petal);

        let angle = Math.random() * 360;
        let distance = Math.random() * 300 + 100; // Spread distance
        let x = Math.cos(angle) * distance;
        let y = Math.sin(angle) * distance;

        petal.style.setProperty("--x", `${x}px`);
        petal.style.setProperty("--y", `${y}px`);
        petal.style.setProperty("--duration", `${Math.random() * 5 + 5}s`); // 5-10 sec duration

        setTimeout(() => {
            petal.remove();
        }, 10000); // Remove after 10 seconds
    }
}
