var userInput = document.querySelector('.uInput');
var checkButton = document.querySelector('.check');
var score = document.querySelector('.yourScore span');
var HighScore = document.querySelector('.highScore span');
var numberBox = document.querySelector('.numberBox')


checkButton.addEventListener('click', () => {
    var guessNumber = Math.round(Math.random() * 20);
    if (score.textContent > 0) {
        if (guessNumber == userInput.value) {
            alert("Damnn! YOU GOTCHAAA")
            score.textContent = +score.textContent + 1;
            numberBox.textContent = guessNumber

            if (score.textContent > HighScore.textContent) {
                HighScore.textContent = score.textContent;
            }
        }
        else {
            score.textContent = score.textContent - 1;
            numberBox.innerHTML = guessNumber

        }

    }
    else {
        alert('You can not play this game now')
    }
})