/* Exercise #1 - Faça funções com as 4 operações básicas com base nos números 2 e 4. Ao final de cada operação imprima na tela no seguinte formato: 
Sum: 2 + 4 = x
Subtract: 2 - 4 = x
Divide: 2 / 4 = x
Multiply: 2 * 4 = x  */

// --------- Dynamic function ------------------------------------

function sumNumbers(numberA, numberB) {
  let result = numberA + numberB;
  
  return result;
}
console.log(`Sum: 2 + 4 = ${sumNumbers(2, 4)}`);

// ---------------------------------------------

function sumNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA + numberB;
  
  return result;
}
console.log(`Sum: 2 + 4 = ${sumNumbers()}`);

// ---------------------------------------------

function subtractNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA - numberB;
  
  return result;
}
console.log(`Subtract: 2 - 4 = ${subtractNumbers()}`);

// ---------------------------------------------

function divideNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA - numberB;
  
  return result;
}
console.log(`Divide: 2 / 4 = ${divideNumbers()}`);

// ---------------------------------------------

function multiplyNumbers() {
  let numberA = 2;
  let numberB = 4;
  let result = numberA * numberB;
  
  return result;
}
console.log(`Multiply: 2 * 4 = ${multiplyNumbers()}`);

