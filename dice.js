var button = document.getElementById("roll-button");

function roll_dice() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);

    var randomDiceImage1 = "images/dice-six-faces-" + randomNumber1 + ".svg";

    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var randomDiceImage2 = "images/dice-six-faces-" + randomNumber2 + ".svg";

    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomDiceImage1);

    var img2 = document.querySelectorAll("img")[1];
    img2.setAttribute("src", randomDiceImage2);

    var result_string;
    if ((randomNumber1 + randomNumber2) % 2 === 0) {
        result_string = "Even";
    } else {
        result_string = "Odd";
    }

    document.getElementById("result").innerHTML = result_string;
}

button.addEventListener("click", roll_dice);