// ================ SERPRO Training - day 01 ==============================

// 🚀 1. Write a program to print "Hello, World!" 

const greeting = () => console.log("Hello, World!");
greeting();

// ==================================================================

// 🚀 2. Calculate the sum of two numbers entered by the user.

const firstSum = (numA, numB) => {
  return numA + numB;
}
console.log(firstSum(5,10));  // 15

// ------------------------------

const secondSum = () => {
  let numA = parseInt(prompt("Please, enter the first number: "));
  let numB = parseInt(prompt("Please, enter the second number: "));
  return numA + numB;
}
console.log(secondSum())

// ==================================================================

// 🚀 3. Convert temperature from Celsius to Fahrenheit.
// Reminder: C = F – 32 / 1.8, which means C * 1.8 + 32

const convertCelsiusToFahr = (degCelsius) => {
  let degFahr = degCelsius * 1.8 + 32;
  return degFahr;
}
console.log(convertCelsiusToFahr(23.4));  // 74.12

// ==================================================================

// 🚀 4. Write a program to calculate the area of a rectangle given its length and width.
// Note: the formula to calculate the area of a rectangle: "A (area) = l (length) * w (width)".

const calculateRecArea = (length, width) => {
  let area = length * width;
  return area;
}
console.log(calculateRecArea(5.5, 7.0))   // 38.5

// ==================================================================

// 🚀 5. Create a program that takes a user's name and age as input and prints a greeting message.

const greetUser = () => {
  let firstName = prompt("What's your first name? ");
  let age = prompt("How old are you? ");
  console.log(`Welcome, ${firstName}! Today's your birthday! You're turning ${age}.`)
}
greetUser();


// ==================================================================

// 🚀 6. Write a program to check if a number is even or odd.

const checkEvenOrOdd = (num) => num % 2 === 0 ? "even" : "odd";
console.log(checkEvenOrOdd(17));  // odd

// ==================================================================

// 🚀 7. Given a list of numbers, find the maximum and minimum values.

const findMaxNumber = (numbers) => numbers.reduce((num, max) => {
  return max > num ? max : num;
});
console.log(findMaxNumber([5, 24, 7, 63, 145, 88, 12, 37]));  // 145

console.log(Math.max(56, 89, 110, 23, 4, 38, 9));  // 110

// ------------------------------

const findMinNumber = (numbers) => numbers.reduce((num, min) => {
  return min < num ? min : num;
});
console.log(findMinNumber([5, 24, 7, 63, 145, 88, 12, 37]));   // 5

console.log(Math.min(56, 89, 110, 23, 4, 38, 9));  // 4

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

const sumPositiveNumbers = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    if (num > 0) { sum += num; }
  }
  return sum;
}
console.log(sumPositiveNumbers([5, 2, 3, -1, -8, 2]));  // 12

// ==================================================================

// 🚀 10. Create a program that takes a sentence as input and counts the number of times a word appears in it.

const countWords = (string) => {
  let data = string.toLowerCase().split(' ');

  const count = data.reduce((obj, item) => {
    if (!obj[item]) { 
      obj[item] = 0;
    }
    obj[item] += 1;
    return obj;
  }, {}); 
  return count;
}
console.log(countWords("I would love to hear a love story about a place full of love"));

// ==================================================================

// 🚀 11. Write a program that converts a given number of days into years, months and weeks.

const calendar = (days) => {
  let week = Math.floor(days / 7);
  let month = Math.floor(days / 30);
  let year = Math.floor(days / 365);
  
  console.log(`${days} day(s): ${week} week(s).`);
  console.log(`${days} day(s): ${month} month(s).`);
  console.log(`${days} day(s): ${year} year(s).`);
}
calendar(30);

// ==================================================================

// 🚀 12. Implement a program that swaps the values of two variables.

const swapValues = (a, b) => {
  let temporary = a;   // temp = first
  a = b;               // a = second
  b = temporary;       // b = first
  console.log(a, b);
}
swapValues('first', 'second');  // second first

// ==================================================================



