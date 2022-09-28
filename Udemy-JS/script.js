// SECTION 22 (class 229)- The notorious reduce method.

//  🚀 EXERCISE 1: Sum the numbers from the array.

// Using "for of"
const lowPrices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for (let lowPrice of lowPrices){
  total += lowPrice;
}
console.log(`The first total amount is $${total}.`);

// ================================================================================

// Using ".reduce()"
const highPrices = [300.50, 209.99, 5523.50, 3900.99, 4950.99];

const totalSum = highPrices.reduce((sum, highPrice) => {
  return sum + highPrice;
})
// const totalSum = highPrices.reduce((sum, highPrice) => sum + highPrice);  ==== shorten version ====

console.log(`The second total amount is $${totalSum}.`);

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
console.log(`The minimum price is $${minPrice}.`);

// =============================================================================== 
console.log('');

//  🚀 EXERCISE 3: Find the maximum number from the array 'prices'.

const maxPrice = prices.reduce((max, price) => {
  if (price > max) {
    return price;
  }
  return max;
});
console.log(`The maximum price is $${maxPrice}.`);
