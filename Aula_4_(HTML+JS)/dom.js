let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let number = document.querySelector(".number");
let message = document.getElementById("message");

console.log(secretNumber);
const displayMessage = function (messageValue) {
  message.textContent = messageValue;
};

const game = function () {
  let guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("You didn't add any number");
  }
  if (secretNumber === guess) {
    displayMessage("ðŸŽ‰ Correct Number!");
    if (score > highscore) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
    document.querySelector("body").style.backgroundColor = "green";
  } else if (secretNumber != guess) {
    if (score > 1) {
      console.log(guess, secretNumber);
      guess > secretNumber
        ? displayMessage(" The Number is too High")
        : displayMessage(" The number is too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost the game!";
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
};

const again = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highscore = 0;

  document.querySelector("body").style.backgroundColor = "black";

  displayMessage("Start guessing...");
  number.textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector(".guess").value = "";
};

document.querySelector(".check").addEventListener("click", game);
document.querySelector(".again").addEventListener("click", again);