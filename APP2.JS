var userinput = document.querySelector(".input")

var checkbutton = document.querySelector(".check")

var score = document.querySelector(".score")

var highscore = document.querySelector(".highscore")

checkbutton.addEventListener('click', () => {
    if (score.textContent > 0) {
        var mynumber = Math.round(Math.random() * 20)

        if (userinput.value == mynumber) {
            alert("you win")
            score.textContent = +score.textContent + 1;


            if (score.textcontent > highscore.textContent) {
                highscore.textContent = score.textContent;
            }
        }
        else {
            score.textcontent = score.content - 1;
        }

    }
    

    else {
        alert("you cannot play this game")

    }
});