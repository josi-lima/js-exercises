// ================ SERPRO Training - day 03 ==============================


// 🚀 1. Write a program that checks if a given number is positive, negative, or zero.

// ==================================================================

// 🚀 2. Create a loop that prints the first 10 even numbers.

// ==================================================================

// 🚀 3. Write a program that calculates the factorial of a given number.

// ==================================================================

// 🚀 4. Create a program that takes a year as input and checks if it is a leap year or not.

// ==================================================================

// 🚀 5. Given a list of integers, find all the even numbers and store them in a new list.

// ==================================================================

// 🚀 6. Given a list of names, print all names starting with the letter 'A'.

// ==================================================================

// 🚀 7. Implement a program that prints the multiplication table of a given number.

// ==================================================================

// 🚀 8. Given a list of words, count the number of words with more than five characters.

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