// ================ SERPRO Training - day 02 ==============================


// 🚀 1.Create a list of fruits and access elements using indexing.

const selectFruits = () => {
  fruits = ['strawberry', 'papaya', 'lemon', 'pineapple', 'banana', 'blueberry'];

  console.log(fruits[0]);             // strawberry
  console.log(fruits.slice(2, 5));    // [ 'lemon', 'pineapple', 'banana' ]
  console.log(fruits.at(-1))          // blueberry
}
selectFruits();

// .slice() accesses part of an array without modifying it

// ==================================================================

// 🚀 2. Given a list of numbers, find the sum and average.

const sumOfNums = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    sum += num;
  }
  let average = sum / 2;
  console.log(`Sum: ${sum}. Average: ${average}.`);
}
sumOfNums([5, 7, 1, 4, 3, 10, 1]);   // Sum: 31. Average: 15.5 

// ==================================================================

// 🚀 3. Create a program that takes a temperature in Fahrenheit and converts it to Celsius.
// Reminder: C = F – 32 / 1.8

const fahrToCelsius = (degFahr) => {
  let degCelsius = ((degFahr - 32) / 1.8).toFixed(1);
  return degCelsius;
}
console.log(fahrToCelsius(60))   // 15.6

// use the toFixed() method to limit decimal places by specifying its number.

// ==================================================================

// 🚀 4. Calculate the area and circumference of a circle given its radius.

// Note: formula to calculate the area: pi * radius ** 2.
// Note: formula to calculate the circumference: 2 * pi * radius.

const calculateCircle = (radius) => {
  const pi = Math.PI;
  let area = (pi * radius ** 2).toFixed(2);
  let circumference = (2 * pi * radius).toFixed(2);

  console.log(`Given the radius ${radius}: the area is ${area} and the circumference is ${circumference}.`);  
}
calculateCircle(3.5);

// ==================================================================

// 🚀 5. Create a function to reverse a given string.

// ==================================================================

// 🚀 6. Given a list of names, concatenate them into a single string separated by spaces.

// ==================================================================

// 🚀 7. Create a program that takes a sentence as input and counts the number of words in it.

// ==================================================================

// 🚀 8. Write a program to check if a given string is a pangram (contains all letters of the alphabet).

// ==================================================================

// 🚀 9. Implement a program that converts a given number of minutes into hours and minutes.

// ==================================================================

// 🚀 10. Create a function to count the number of vowels in a given string.

// ==================================================================


