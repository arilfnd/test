const prompt = require('prompt-sync')({sigint: true});

const name =prompt('What is your name?: ');
console.log(`Hey there ${name}`);
 
let newGame = false;

while (!newGame)
{
// Random number from 1 - 100
let numberInMind = Math.floor(Math.random() * 100) + 1;

// This variable is used to determine if the app should continue prompting the user for input
let foundCorrectNumber = false;

 
  while (!foundCorrectNumber)
  {
  // Step 1: Get user input (don't forget that the input is a string)

    let userNumber =prompt('Guess a number: ');
      if (isNaN(userNumber))
    {
      console.log("Please enter number, not text.");
    }
      else if (userNumber===numberInMind)
    {
      console.log("The number is correct, you win!");
      foundCorrectNumber = true;
    }
      else
    {
  // Step 2: Compare the guess to the secret answer and
  // let the user know the feedback (too large, too small, correct).
        if (numberInMind > userNumber)
        {
          console.log("The number is too small. Guess again.");
        }
        else if (numberInMind < userNumber)
        {
          console.log("The number is too big. Guess again.");
        }
        else
        {
          console.log("The number is correct, you win!");
          foundCorrectNumber = true;
        }
    }
  }

  let endGame = false;

    while (!endGame)
  {
    let playAgain =prompt('Start a new game?(Y for yes, N for no): ');

    if (playAgain=== ("Y"))
    {
      newGame= false;
      endGame= true;
    }
    else if (playAgain=== ("N"))
    {
      newGame= true;
      endGame= true;
    }
    else
    {   
      console.log("Please enter 'Y' or 'N'.");
      endGame= false;
    }
  }
}
// Bonus Point: prompt user and provide option for user to start a new game after winning