// 🚀 SECTION 22 (class 229)- The notorious reduce method.

// EXERCISE: Sum the numbers from the array.

// Using "for of"
const lowPrices = [9.99, 1.50, 19.99, 49.99, 30.50];

let total = 0;
for (let lowPrice of lowPrices){
  total += lowPrice;
}
console.log(`The first total amount is $${total}.`);

// ========================================================================================================

// Using ".reduce()"
const highPrices = [300.50, 209.99, 5523.50, 3900.99, 4950.99];

const totalSum = highPrices.reduce((sum, highPrice) => {
  return sum + highPrice;
});
console.log(`The second total amount is $${totalSum}.`);
