// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"




// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo:
// - create a function called boilingPoint
// - input - temp
// - use conditional statement to make an evaluation on the temperature
// - if temp is at or below 42, output temp is below boiling point
// - if temp is at or above 212, output temp is at boiling point
// - if temp is at or above 350, output temp is above boiling point


const temp1 = 42
const temp2 = 350
const temp3 = 212


const boilingPoint = (temp) => {
  if(temp <= temp1){
  return `${temp} is below boiling point`
} else if (temp >= temp2){
  return `${temp} is above boiling point`
} else if (temp >= temp3){
  return `${temp} is at boiling point`
} else if(temp > temp1){
  return `${temp} is close to boiling point`
}else {
  return ""
  }
}
console.log(boilingPoint(41))
console.log(boilingPoint(42))
console.log(boilingPoint(100))
console.log(boilingPoint(212))
console.log(boilingPoint(250))
console.log(boilingPoint(350))
console.log(boilingPoint(351))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// // Pseudo:
// - create a variable allNumbers
// - use the concat method to join myNumbers1 and myNumbers2 to equal allNumbers variable
// - console.log the allNumbers variable with .length to output the length of allNumbers

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const allNumbers = myNumbers1.concat(myNumbers2)
console.log(allNumbers.length)



// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// Pseudo:
// - create variable currentCohortReverse
// - make currentCohortReverse to equal currentCohort
// - use the split method to turn the string into an array of substrings
// - use the reverse method to reverse the substrings
// - use the join method pull the substrings back together as 1 string

const currentCohort = "Bravo 2022"

const currentCohortReverse = currentCohort.split(" ").reverse().join(" ")

console.log(currentCohortReverse)









// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo:
// - create a loop
// - use .length
// - use i++ to pass through the array
// - create a conditional statement to output whether the number is "odd" or "even"

const myArray = [13, 34, 5, 10, 27, 42]

for(let i = 0; i < myArray.length; i++){
  if(myArray[i] % 2 !== 0){
    console.log("odd")
  } else {
    console.log("even")
  }
}




// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo:
// create a function called "answer"
// create inputs input1 and input2 for the parameters
// create a return of input1 subtracting input2
// create a console.log to output the "answer" function and input the variables



// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24



const answer = (input1, input2) => {
  return input1 - input2
}

console.log(answer(number2, number1))
console.log(answer(number3, number4))
