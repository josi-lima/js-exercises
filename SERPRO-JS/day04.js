// ================ SERPRO Training - day 04 ==============================


// 🚀 1. Write a program to check if a number is prime.

const checkPrime = (number) => {
  if (number < 2) return false;
  if (number === 2) return true;

  let maxDiv = Math.sqrt(number);
  for (let index = 2; index <= maxDiv; index += 1) {
    if (number % index === 0) return false;
  }
  return true;
}
console.log(checkPrime(9));   // false

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

const findIntersection = (arg1, arg2) => {
  return arg1.filter((items) => arg2.indexOf(items) !== -1);
}
console.log(findIntersection([1, 2, 3], [3, 4, 5]));  // 3

// ==================================================================

// 🚀 8. Create a function that will receive two lists of numbers as arguments and return a list composed of all the numbers that are either in the first list or the second list, but not in both.

const findNonCommonNumbers = (arg1, arg2) => {
  let a = arg1.filter((items) => arg2.indexOf(items) === -1);
  let b = arg2.filter((items) => arg1.indexOf(items) === -1);
  let result = a.concat(b);
  return result;
}
console.log(findNonCommonNumbers([1, 2, 3], [3, 4, 5]));  // [ 1, 2, 4, 5 ]

// concat() method -- concatenates (joins) two or more arrays. It returns a new array, containing the joined arrays.

// ==================================================================

// 🚀 9. Create a function that takes a number as input and prints its multiplication table.

// const multiplyNumber = () => {
//   let number = parseInt(prompt("Please, enter a number: "));

//   for (let index = 1; index <= 10; index += 1) {
//     let result = number * index;
//     console.log(`${number} * ${index} = ${result}`)
//   }
// }
// multiplyNumber();


// ==================================================================

// 🚀 10. Create a loop that prints all prime numbers between 1 and 50.


// ==================================================================




