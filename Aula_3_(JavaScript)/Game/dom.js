let secretNumber = 8;
let score = 20;
let highscore = 0;

let number = document.querySelector('.number');
let message = document.querySelector('.message');

document.querySelector('.check').addEventListener('click', function() {
let guess = Number(document.querySelector('.guess').value);
if (!guess){
message.textContent = "You didn´t add any number!";
}
if (secretNumber===guess){
message.textContent = "Correct Number!";
} else if (secretNumber!=guess){

}
});