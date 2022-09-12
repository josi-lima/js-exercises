/* 🚀 Exercise #1 - Faça funções com as 4 operações básicas, com base nos números 2 e 4. Ao final de cada operação, imprima-as na tela no seguinte formato: 
A. Sum: 2 + 4 = x
B. Subtract: 2 - 4 = x
C. Divide: 2 / 4 = x
D. Multiply: 2 * 4 = x  */

// Dynamic function to sum numbers----------------------------------

function sumNumbers(numberA, numberB) {
  let result = numberA + numberB;
    
  return result;
}
console.log(`Sum: 2 + 4 = ${sumNumbers(2, 4)}`);

// A. Function to sum the numbers--------------------------------

function sumNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA + numberB;
  
  return result;
}
console.log(`Sum: 2 + 4 = ${sumNumbers()}`);

// B. Function to subtract the numbers------------------------------

function subtractNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA - numberB;
  
  return result;
}
console.log(`Subtract: 2 - 4 = ${subtractNumbers()}`);

// C. Function to divide the numbers--------------------------------

function divideNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA / numberB;
  
  return result;
}
console.log(`Divide: 2 / 4 = ${divideNumbers()}`);

// D. Function to multiply the numbers--------------------------------

function multiplyNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA * numberB;
  
  return result;
}
console.log(`Multiply: 2 * 4 = ${multiplyNumbers()}`);

// ========================================================================================================

/* 🚀 Exercise #2 - Elabore um programa que leia o valor de um jantar. Calcule o valor da taxa do garçom (10%) e informe o valor total a ser pago.
EXEMPLO: 
Dinner's value: $80,00
Waiter's tip: $8,00
Total to pay: $88,00 */

// ---------------------------------------------------------------

function calculateDinner (dinnerPrice) {
  const waiterTip = 10;
  return dinnerPrice + (waiterTip / 100) * dinnerPrice;
}
console.log(`The total price of your dinner is $${calculateDinner(120)}. Come back soon!`);