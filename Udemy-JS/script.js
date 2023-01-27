// SECTION 22 (class 229)- The notorious reduce method.

//  🚀 EXERCISE 1: Sum the numbers from the array.

// Using "for of"
const lowPrices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for (let lowPrice of lowPrices){
  total += lowPrice;
}
console.log(`The first total amount is $${total}.`); // $111.97

// ================================================================================

// Using ".reduce()"
const highPrices = [300.50, 209.99, 5523.50, 3900.99, 4950.99];

const totalSum = highPrices.reduce((sum, highPrice) => {
  return sum + highPrice;
})
// const totalSum = highPrices.reduce((sum, highPrice) => sum + highPrice);     ==== shorten version ====

console.log(`The second total amount is $${totalSum}.`); // $14885.97

// ================================================================================ 
console.log('');

//  🚀 EXERCISE 2: Find the minimum number from the array 'prices'.

const prices = [4.99, 10.50, 1.99, 45.79, 3.60];

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});
console.log(`The minimum price is $${minPrice}.`); // $1.99

// ========== SHORTEST VERSION =======================================

const randomPrices = [8.49, 110.45, 63.90, 5.99, 1.72];

const minPrice = randomPrices.reduce((min, price) => (price < min ? price : min));

console.log(`The minimum price is $${minPrice}.`); // $1.72

// ========== LONGER VERSION ===========================================

function findMinimumValue() {
  
  const lowPrices = [4.99, 10.50, 1.99, 45.79, 3.60];
  let minimumNumber = lowPrices[0];
  
  for (let index = 0; index < lowPrices.length; index += 1) {
    if (lowPrices[index] < minimumNumber) {
      minimumNumber = lowPrices[index];
    }
  }
  return minimumNumber;
}

console.log(`The lowest price is $${findMinimumValue()}.`); // $1.99

// ====== LONGER VERSION (Dynamic function) ==================================

function findMinValue(numbers) {
  
  let minNumber = numbers[0];
  
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < minNumber) {
      minNumber = numbers[index];
    }
  }
  return minNumber;
}

console.log(`The minimum number is ${findMinValue([102, 8, 37, 89])}.`); // 8

// =============================================================================== 

console.log('');

//  🚀 EXERCISE 3: Find the maximum number from the array 'prices'.

const maxPrice = prices.reduce((max, price) => {
  if (price > max) {
    return price;
  }
  return max;
});
console.log(`The maximum price is $${maxPrice}.`); // $45.79

// =============================================================================== 
console.log('');

//  🚀 EXERCISE 4: Sum the numbers from the array, but now using an 'initial value'.

const evens = [2, 4, 6, 8, 10];
const evensSum = evens.reduce((sum, num) => sum + num, 100);

console.log(`The total amount, adding 100, is ${evensSum}.`); // 130
