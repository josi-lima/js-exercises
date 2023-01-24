// ======= *** FUNCTIONS *** ==============================================================================

// FUNÇÃO NOMINADA ----------------------------------

function firstExample(num1, num2) {
  return num1 * num2;
}
console.log(firstExample(8, 9)); // 72

// FUNÇÃO ANÔNIMA ----------------------------------

const example = function (num1, num2) {
  return num1 * num2;
}
console.log(example(5, 3)); // 15

// ARROW FUNCTION ----------------------------------

const arrowFunction = (num1, num2) => {
  return num1 * num2;
}
console.log(arrowFunction(12, 2)); // 24

// ARROW FUNCTION - one line ---------------------------

const reducedArrowFunction = (num1, num2) => num1 * num2;

console.log(reducedArrowFunction(3, 10)); // 30

// ========================================================================================================
console.log('');

/* 🚀 Exercise #1 - Faça funções com as 4 operações básicas, com base nos números 2 e 4. Ao final de cada operação, imprima-as na tela no seguinte formato: 
A. Sum: 2 + 4 = x
B. Subtract: 2 - 4 = x
C. Divide: 2 / 4 = x
D. Multiply: 2 * 4 = x  */

// Dynamic function to sum numbers ----------------------------------

function sumNumbers(numberA, numberB) {
  let result = numberA + numberB;
  return result; // return numberA + numberB;
}
console.log(`Dynamic sum: 2 + 4 = ${sumNumbers(2, 4)}`); // Dynamic sum: 2 + 4 = 6

// A. Function to sum the numbers --------------------------------

function sumNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA + numberB;
  
  return result;
}
console.log(`Sum: 2 + 4 = ${sumNumbers()}`); // Sum: 2 + 4 = 6

// B. Function to subtract the numbers------------------------------

function subtractNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA - numberB;
  
  return result;
}
console.log(`Subtract: 2 - 4 = ${subtractNumbers()}`); // Subtract: 2 - 4 = -2

// C. Function to divide the numbers--------------------------------

function divideNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA / numberB;
  
  return result;
}
console.log(`Divide: 2 / 4 = ${divideNumbers()}`); // Divide: 2 / 4 = 0.5

// D. Function to multiply the numbers--------------------------------

function multiplyNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA * numberB;
  
  return result;
}
console.log(`Multiply: 2 * 4 = ${multiplyNumbers()}`); // Multiply: 2 * 4 = 8

// ========================================================================================================
console.log('');

/* 🚀 Exercise #2 - Elabore um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
EXEMPLO: 
Dinner's value: $80,00
Waiter's tip: $8,00
Total to pay: $88,00 */

// ---------------------------------------------------------------

function calculateTip(dinnerPrice) {
  const waiterTip = 10;
  return (waiterTip / 100) * (dinnerPrice);
}

function calculateDinnerTotal(dinnerPrice) {
  return dinnerPrice + calculateTip(dinnerPrice); // return dinnerPrice + (waiterTip / 100) * dinnerPrice;
}

console.log(
`Dinner's value: $120.  
Waiter's tip: $${calculateTip(120)}.  // $12
The total price of your dinner is $${calculateDinnerTotal(120)}.  // $132
Come back soon!`);

// ========================================================================================================
console.log('');

/* 🚀 Exercise #3 - Elabore um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor parcelado em 3x (sem desconto).
EXEMPLO:
Product's price: $60,00
In cash/debit card: $54,00
Or 3x of: $20,00 */

// ---------------------------------------------------------------

function calculateDiscount(productPrice) {
  const discount = 10;
  return productPrice - (discount / 100) * productPrice;
}

function calculateInstallments(productPrice) {
  return productPrice / 3;
}

console.log(
`Product's price: $60.  
In cash/debit card: $${calculateDiscount(60)}.  // $54
Or 3x of: $${calculateInstallments(60)}.  //$20
Have a great day!`);

// ========================================================================================================
console.log('');

/* 🚀 BÔNUS Exercise - Elabore um programa para checar se uma palavra é palíndromo. Um palíndromo é uma palavra que pode ser lida de forma inversa e terá o mesmo significado. Exemplo: "reviver", "arara", "radar", "wow". Adicione uma feature para aceitar palavras com letras maiscúlas.
EXEMPLO:
'racecar': true
'map': false */

function checkPalindrome(word) {
  if (word.toLowerCase() === word.toLowerCase().split('').reverse('').join('')) {
    return "You got it! It's a palindrome!";
  } return "Oh, no! It's not a palindrome!";
}
console.log(checkPalindrome('Racecar')); //true

// ========================================================================================================
console.log('');

/* 🚀 Exercise #4
*/

