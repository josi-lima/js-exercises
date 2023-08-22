// ================ SERPRO Training - day 03 ==============================


// 🚀 1. Write a program that checks if a given number is positive, negative, or zero.

const checkNumbers = (num) => {
  if (num > 0) return 'positive';
  else if (num < 0) return 'negative';
  else return 'zero';
}
console.log(checkNumbers(-5));   // negative

// ==================================================================

// 🚀 2. Create a loop that prints the first 10 even numbers.

const evenNumbers = (num) => {
  for (let index = 0; index <= num; index += 2) {
    console.log(index);
  }
}
evenNumbers(10);

// ==================================================================

// 🚀 3. Write a program that calculates the factorial of a given number.

const factorial = (num) => {
  let factor = 1;

  for (let index = 1; index <= num; index += 1) {
    factor *= index;
  }
  return factor;
}
console.log(factorial(5));   // 120

// ==================================================================

// 🚀 4. Create a program that takes a year as input and checks if it is a leap year or not.

const isLeapYear = (year) => { 
  return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0) 
          ? 'leap year' : 'not a leap year';
}
console.log(isLeapYear(2024));   // leap year

// ==================================================================

// 🚀 5. Given a list of integers, find all the even numbers and store them in a new list.

const evenNumStored = (numbers) => {
  store = [];
  for (let index = 0; index <= numbers.length; index += 1) {
    if (numbers[index] % 2 === 0) { 
      store.push(numbers[index]);
    }
  }
  return store;  
}
console.log(evenNumStored([7, 89, 32, 14, 22, 6, 90]));
// [ 32, 14, 22, 6, 90 ]

// ==================================================================

// 🚀 6. Given a list of names, print all names starting with the letter 'A'.

const namesWithA = (names) => {

  const listA = names.filter((name) => name[0].toLowerCase() === 'A'.toLowerCase());
  return listA;
}
console.log(namesWithA(['Amy', 'Jose', 'amir', 'Renato', 'Adelaide']));
// [ 'Amy', 'amir', 'Adelaide' ]

// ==================================================================

// 🚀 7. Implement a program that prints the multiplication table of a given number.



// ==================================================================

// 🚀 8. Given a list of words, print all the words ending with a vowel.

const findWordsLastVowel = (words) => {

  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const lastVowel = words.filter((word) => {
    return vowels.some((vowel) => word.at(-1) === vowel)
  });
  return lastVowel;
}
console.log(findWordsLastVowel(['bingo', 'girl', 'table', 'banana', 'tall', 'Japanese']));
// [ 'bingo', 'table', 'banana', 'Japanese' ]

// ==================================================================

// 🚀 9. Write a program to check if a number is prime.


// ==================================================================

// 🚀 10. The following list contains elements with the proprieties: name and age.
// Return the people whose age is equal or greater than 30 years old.

const people = [
  { name: 'Harry', age: 25 },
  { name: 'Mary', age: 30 },
  { name: 'Peter', age: 20 },
  { name: 'Amy', age: 38 },
];

const over30 = people.filter(({ age }) => age >= 30);

console.log(over30)
// [ { name: 'Mary', age: 30 }, { name: 'Amy', age: 38 } ]

// ==================================================================

// 🚀 11. The next list shows a few famous basketball players. Create a function that returns only the players who are 200 centimeters or more tall.

const players = [
  { name: 'Michael Jordan', height: 198, team: 'Chicago Bulls' },
  { name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
  { name: 'Kobe Bryant', height: 198, team: 'Los Angeles Lakers' },
  { name: 'Stephen Curry', height: 191, team: 'Golden State Warriors' },
  { name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' },
];

const tallPlayers = players.filter(({ height }) => height > 200);

console.log(tallPlayers);
// [ { name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
//  { name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' } ]

// ==================================================================