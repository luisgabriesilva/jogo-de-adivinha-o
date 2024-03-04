let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

function checkGuess() {
    attempts--;
    const inputElement = document.getElementById("guess");
    const feedbackElement = document.getElementById("feedback");
    const guess = inputElement.value;
    while (attempts > 0) {
        if (guess == randomNumber) {
            attempts = 0;
            feedbackElement.innerHTML = "Parabéns!";
            feedbackElement.style.color = "green";
            break;
        } else if (guess < randomNumber) {
            feedbackElement.innerHTML = `Muito baixo! Tente novamente. ${attempts} Tentativas restantes..`;
            feedbackElement.style.color = "red";
            break;
        } else {
            feedbackElement.innerHTML = `Muito alto! Tente novamente. ${attempts} Tentativas restantes`;
            feedbackElement.style.color = "red";
            break;
        }
    }
    if (attempts === 0 && guess != randomNumber) {
        feedbackElement.innerHTML =
            `Desculpe, você está sem tentativas! O número correto era  ${randomNumber}.`;
        feedbackElement.style.color = "red";
    }
}