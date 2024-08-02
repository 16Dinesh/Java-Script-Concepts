const max = prompt ("Enter Your Max Number in the Box!!");

const maxNumber = Math.floor(Math.random() * max) + 1;

console.log(maxNumber);
let guess  = prompt ("Enter the Guess Number!");

while (true){
    if (guess == "quit") {
        console.log("user Quited the Game");
        break;
    }

    if (parseInt(guess) == maxNumber) {
        console.log(`you have guessed it right ${maxNumber}`);
        break;
    } else if (parseInt(guess) < maxNumber) {
        guess = prompt("Hint : you number is small, Please try again With biger number");
    } else if (parseInt(guess) > maxNumber)  {
       guess = prompt("Hint : you number is Big, Please try again With Smaller number");
    }
     else {
        alert("you have entered the incorrect value");
        guess = prompt("Please enter a valid number or type 'quit' to exit.");
    }
}