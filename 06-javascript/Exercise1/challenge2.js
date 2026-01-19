// Ask user to choose conversion type:
// 1. Celsius to Fahrenheit
// 2. Fahrenheit to Celsius

// Ask for the temperature value

// Perform conversion and display result
// Formulas:
// F = (C × 9/5) + 32
// C = (F − 32) × 5/9

// let celfa = confirm(`Celsius to Fahrenheit`);
// if(!celfa){

//     let fahcel = confirm(` Fahrenheit to Celsius`);
// }

// let F=0;
// let C=0;


// let temp = Number(prompt(`enter temperature`));

// if(celfa){
//     F = (C * 9/5) + 32;
//     console.log(F);
// }
// else{
//     C = (F - 32) * 5/9;
//     console.log(C);
    

// }

const celfa = confirm('Convert Celsius to Fahrenheit?\nClick OK for Yes, Cancel for No');

const temp = Number(prompt('Enter temperature'));

if (Number.isNaN(temp)) {
  alert('Please enter a valid number');
} else {
  if (celfa === true) {
    const fahrenheit = (temp * 9 / 5) + 32;
    console.log(`${temp}°C = ${fahrenheit}°F`);
    alert(`${temp}°C = ${fahrenheit}°F`);
  } else {
    const celsius = (temp - 32) * 5 / 9;
    console.log(`${temp}°F = ${celsius}°C`);
    alert(`${temp}°F = ${celsius}°C`);
  }
}

