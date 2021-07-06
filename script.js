window.addEventListener("DOMContentLoaded", (event) => {
  var gamesPlayed = 0;
  const choices = ["rock", "paper", "scissors"];
  const buttons = document.querySelectorAll(".button");

  for (var i in buttons) {
    buttons[i].addEventListener("click", userChoice);
  }
  function computerPlay() {
    // returns computers move
    return choices[random(choices.length)];
  }

  function random(num) {
    // returns random number up to arg
    return Math.floor(Math.random() * num);
  }

  function userChoice(event) {
    // get user choice based on button click
    rockPaperScissors(event.target.id);
    return;
  }

  function resetButton() {
    var btn = document.createElement("button");
    btn.innerText = "PLAY AGAIN?";
    btn.className = "buttonstyle";
    btn.addEventListener("click", reset);
    const winnerText = document.getElementById("play-again");

    winnerText.appendChild(btn);
  }

  function reset() {
    document;
    document.getElementById("user-score").innerText = "0";
    document.getElementById("computer-score").innerText = "0";
    document.getElementById("winner-text").innerText = "";
    var elem = document.getElementById("play-again");
    elem.removeChild(elem.childNodes[0]);
  }

  function checkWin(user, computer) {
    //checks if user/computer score if above 5
    result =
      user == "5"
        ? "USER WINS!"
        : computer == "5"
        ? "COMPUTER WINS!"
        : undefined;

    if (result !== undefined) {
      //if score > 5, go to function resetbutton
      document.getElementById("winner-text").innerText = result;
      resetButton();
    }
  }

  function outputScore(winState) {
    // Increases player scores and outputs to the screen
    const user = document.getElementById("user-score");
    const computer = document.getElementById("computer-score");
    if (winState == "win") {
      let value = Number(user.innerText);
      user.innerText = `${value + 1}`;
    }
    if (winState == "lose") {
      let value = Number(computer.innerText);
      computer.innerText = `${value + 1}`;
    }
    checkWin(user.innerText, computer.innerText);
  }

  function colorButtons(user, computer) {
    // colors buttons based on user input
    buttons.forEach((button) => {
      button.classList.remove("red", "green");
    });
    document.getElementById(user).classList.add("green");
    document.getElementById(computer).classList.add("red");
  }

  function rockPaperScissors(userChoice, computerMove = computerPlay()) {
    userChoice = userChoice.toLowerCase();
    colorButtons(userChoice, computerMove);

    var result =
      userChoice == "rock" && computerMove == "rock" // user selects rock conditions
        ? "tie"
        : userChoice == "rock" && computerMove == "paper"
        ? "lose"
        : userChoice == "rock" && computerMove == "scissors"
        ? "win"
        : userChoice == "paper" && computerMove == "rock" // user selects paper conditions
        ? "win"
        : userChoice == "paper" && computerMove == "paper"
        ? "tie"
        : userChoice == "paper" && computerMove == "scissors"
        ? "lose"
        : userChoice == "scissors" && computerMove == "rock" // user selects scissors conditions
        ? "lose"
        : userChoice == "scissors" && computerMove == "paper"
        ? "win"
        : userChoice == "scissors" && computerMove == "scissors"
        ? "tie"
        : "Error";
    gamesPlayed++;
    outputScore(result);
  }

  function game() {
    const loops = 0;
  }
});
