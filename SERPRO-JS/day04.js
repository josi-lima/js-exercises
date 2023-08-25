// ================ SERPRO Training - day 04 ==============================


// 🚀 1. Write a program to check if a number is prime.


// ==================================================================

// 🚀 2. Given a list of numbers, create a function to find the sum of all odd numbers.

const sumOddNumbers = (numbers) => {
  let sum = 0;
  for (let num of numbers) {
    if (num % 2 !== 0) { sum += num; }
  }
  return sum;
}
console.log(sumOddNumbers([3, 17, 2, 5, 10, 9, 4]));  // 34

// ==================================================================

// 🚀 3. Create a function to find the square of each element in a given list.

const findSquare = (numbers) => {
  let squareNums = [];
  for (let num of numbers) {
    squareNums.push(num ** 2);
  }
  return squareNums;
}
console.log(findSquare([2, 4, 6, 8, 10, 12]));
// [ 4, 16, 36, 64, 100, 144 ]

// ==================================================================

// 🚀 4. Given a list of words, count the number of words with more than five characters. 

const moreThan5 = (words) => {
  let count = 0;
  for (let item of words) {
    if (item.length > 5) {
      count += 1;
    }
  }
  return count;
}
console.log(moreThan5(['domino', 'table', 'booklet', 'cake', 'computer']))  // 3

// ==================================================================

// 🚀 5. Calculate the area of a triangle given its base and height. Base and height must be greater than 0. Area = base * height / 2

const calculateTriangle = (base, height) => {
  let area = '';
  if (base > 0 && height > 0) {
    area = (base * height) / 2;
  }  
  return area;
}
console.log(calculateTriangle(15, 20));  // 150

// ==================================================================

// 🚀 6. Create a function that takes a list of strings and returns the list sorted alphabetically.

const sortByTheAlphabet = (words) => words.sort();

console.log(sortByTheAlphabet(['brigadeiro', 'coxinha', 'beijinho', 'pizza']));
// [ 'beijinho', 'brigadeiro', 'coxinha', 'pizza' ]

// ==================================================================

// 🚀 7. Write a function that takes two lists and returns their intersection (common elements).


// ==================================================================

// 🚀 8. Create a function that takes a number as input and prints its multiplication table.


// ==================================================================

// 🚀 9. Create a function that will receive two lists of numbers as arguments and return a list composed of all the numbers that are either in the first list or second list, but not in both.


// ==================================================================

// 🚀 10. Create a loop that prints all prime numbers between 1 and 50.


// ==================================================================




