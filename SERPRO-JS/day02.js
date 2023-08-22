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

const reverseStr = (string) => {
  string = string.split('').reverse().join('');
  return string;
}
console.log(reverseStr('chocolate'));   // etalocohc

// https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// ==================================================================

// 🚀 6. Given a list of names, concatenate them into a single string separated by spaces.

const concatNames = (names) => {
  let concat = names.join(' ');
  return concat;
}
console.log(concatNames(['Jim', 'Kim', 'Lucy']));
// Jim Kim Lucy

// ==================================================================

// 🚀 7. Create a program that takes a sentence as input and counts the number of words in it.

const countWords = (phrase) => {
  const sentence = phrase.split(' ');
  return sentence.filter((word) => word !== '').length;
}
console.log(countWords('She said she would stay.'));  // 5

// ==================================================================

// 🚀 8. Create a function that will capitalize the first letter of each word in a text.

const capitalizeLetters = (text) => {
  let fullText = text.split(' ');
  const textCap = fullText.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
  return textCap; 
}
console.log(capitalizeLetters('movie: one day after tomorrow'));
// Movie: One Day After Tomorrow

// ==================================================================

// 🚀 9. Create a function to count the number of vowels in a given string.

const countVowels = (str) => {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  for (let letter of str.toLowerCase()) {
    for (let v of vowels) {
      if (letter === v) { count += 1; }
    }
  }
  return count;
}
console.log(countVowels("If you're not positive energy, you're negative energy."));  // 20

// ==================================================================

