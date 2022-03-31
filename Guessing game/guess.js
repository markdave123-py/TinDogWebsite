var presentScore = 20;
var random1 = Math.floor(Math.random() * 20 + 1);
document.getElementById("check").onclick = function() {
    var guess = document.getElementById("guessfield").value;
    if (guess < 0){
        guess = Math.abs(guess);
    }
    if (guess == random1) {
        document.getElementById("guessing").innerHTML = "You're correct!";
        document.body.style.backgroundColor = 'blue';
        var highScoreNum = presentScore;
        document.getElementById("highscore").innerHTML = `Highscore: ${highScoreNum}`;

    } else if (guess > random1) {
        document.getElementById("guessing").innerHTML = "Too high input a lower number";
        presentScore--;
        document.getElementById("score").innerHTML = `Score: ${presentScore}`;
    } else {
        document.getElementById("guessing").innerHTML = "Too low input a higher number";
        presentScore--;
        document.getElementById("score").innerHTML = `Score: ${presentScore}`;
    }

    if (presentScore == 0) {
        document.getElementById("guessing").innerHTML = 'Game over!!';
        document.body.style.backgroundColor = 'red';
    }
}



var fun = function func() {
    window.location.reload();
    return false;
}