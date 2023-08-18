// ================ SERPRO Training - day 01 ==============================

// 🚀 1. Write a program to print "Hello, World!" 

const greeting = () => console.log("Hello, World!");
greeting();

// ==================================================================

// 🚀 2. Calculate the sum of two numbers entered by the user.

const firstSum = (numA, numB) => {
  return numA + numB;
}
console.log(firstSum(5,10));

// ------------------------------

const secondSum = (numA, numB) => {
  numA = parseInt(prompt("Please, enter the first number: "));
  numB = parseInt(prompt("Please, enter the second number: "));
  return numA + numB;
}
console.log(secondSum())

// ==================================================================

// 🚀 3. Convert temperature from Celsius to Fahrenheit.
// Reminder: C = F – 32 / 1.8, which means C * 1.8 + 32

const convertCelsiusToFahr = (degCelsius) => {
  degFahr = degCelsius * 1.8 + 32;
  return degFahr;
}
console.log(convertCelsiusToFahr(23.4));

// ==================================================================

// 🚀 4. Write a program to calculate the area of a rectangle given its length and width.
// The formula for the area, 'A' of a rectangle whose length and width are 'l' and 'w' respectively is the product of length and width, that is, "A = l × w".

const calculateRecArea = (length, width) => {
  area = length * width;
  return area;
}
console.log(calculateRecArea(5.5, 7.0))

// ==================================================================

// 🚀 5. Create a program that takes a user's name and age as input and prints a greeting message.

const greetUser = () => {
  firstName = prompt("What's your first name? ");
  age = prompt("How old are you? ");
  console.log(`Welcome, ${firstName}! Today's your birthday! You're turning ${age}.`)
}
greetUser();


// ==================================================================

// 🚀 6. Write a program to check if a number is even or odd.

const checkEvenOrOdd = (num) => num % 2 === 0 ? "even" : "odd";
console.log(checkEvenOrOdd(17))

// ==================================================================

// 🚀 7. Given a list of numbers, find the maximum and minimum values.

const findMaxNumber = (numbers) => numbers.reduce((max, num) => {
  return num > max ? num : max;
});
console.log(findMaxNumber([5, 24, 7, 63, 145, 88, 12, 37]));  // 145

console.log(Math.max(56, 89, 110, 23, 4, 38, 9))  // 110

// ------------------------------

const findMinNumber = (numbers) => numbers.reduce((min, num) => {
  return num < min ? num : min;
});
console.log(findMinNumber([5, 24, 7, 63, 145, 88, 12, 37]));   // 5

console.log(Math.min(56, 89, 110, 23, 4, 38, 9))  // 4

// ==================================================================

// 🚀 8. Create a function to check if a given string is a palindrome.

const isPalindrome = (string) => {
  string = string.toLowerCase().replaceAll(' ', '');
  return string === string.split('').reverse('').join('');
}
console.log(isPalindrome('Was it a car or a cat I saw'));  // true

// replaceAll() method of string values returns a new string with all matches of a pattern replaced by a replacement.

// ==================================================================

// 🚀 9. Given a list of integers, find the sum of all positive numbers.


// ==================================================================

// 🚀 10. Create a program that takes a sentence as input and counts the number of words in it.


// ==================================================================

// 🚀 11. Write a program that converts a given number of days into years, weeks, and days.


// ==================================================================

// 🚀 12. Implement a program that swaps the values of two variables.


// ==================================================================

// 🚀 13. Calculate the compound interest for a given amount, interest rate, and time period.

