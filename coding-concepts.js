// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

const cohort = "LEARN 2022"
console.log(cohort.length)

// a) Your answer: 2
// b) Verify and explain: My answer was incorrect because this would apply if it was an array and if both LEARN and 2022 were in quotations, but since it is a string then it is outputting 10 characters within the string


// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: "o"
// b) Verify and explain: My answer was correct because similar to question 1, since we are accessing index [4] in greeting, we would see an output of the 4th character starting from index [0].


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: "Javascript"
// b) Verify and explain: My answer was incorrect because I chose index [1] where it should have been index [0] since it starts from [0].


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
console.log(weekendDays.toUpperCase())

// a) Your answer: "SATURDAY" "SUNDAY"
// b) Verify and explain: My answer was incorrect because this would need to be a string to console.log the .toUpperCase() and output "SATURDAY, SUNDAY". Since it was an array, this output would not work and we would need to find a different way to use .toUpperCase.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: 3
// b) Verify and explain: My answer was incorrect because it was outputting what datatype such as string, number, boolean, object and function, not the length of the variable "dataTypes"
