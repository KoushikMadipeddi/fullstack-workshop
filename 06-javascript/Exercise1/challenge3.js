// Create a 3-question quiz
// Keep track of the score
// Display final score at the end

// Example questions:
// 1. What is 5 + 3?
// 2. What is the capital of France?
// 3. What color is the sky?

// let num = Number(prompt(`What is 5 + 3?`));
// let capital = prompt(`What is the capital of France?`);
// let colour = prompt(` What color is the sky?`);

// let sum =0;
// if(num===8){
//     sum++;
// }
// if(capital==='france'){
//     sum++;
// }
// if(colour==='blue'){
//     sum++;
// }
// console.log(sum);

const askQuestion = (question) => prompt(question)?.trim().toLowerCase();

const num = Number(prompt('What is 5 + 3?'));
const capital = askQuestion('What is the capital of France?');
const colour = askQuestion('What color is the sky?');

let score = 0;

if (num === 8) score++;
if (capital === 'paris') score++;
if (colour === 'blue') score++;

console.log(`Your score is ${score} / 3`);
alert(`Your score is ${score} / 3`);

