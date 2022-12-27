//Only display winner when user reloads
if(performance.getEntriesByType("navigation")[0].type === "reload") {
    diceRoll();
}

function diceRoll() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var player1 = document.getElementsByClassName("img1")[0]; //player 1 dice image
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var player2 = document.getElementsByClassName("img2")[0]; //player 2 dice image
    var pageTitle = document.querySelector("h2"); //page title

    //change player 1 dice image
    player1.setAttribute("src", "images/dice" + randomNumber1 + ".png");

    //change player 2 dice image
    player2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    //display winner
    if(randomNumber1 > randomNumber2) {
        pageTitle.innerHTML = "Player 1 wins!";
    } else if(randomNumber2 > randomNumber1) {
        pageTitle.innerHTML = "Player 2 wins!";
    } else {
        pageTitle.innerHTML = "Draw! Everyone wins!";
    }
}
