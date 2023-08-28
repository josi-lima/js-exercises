// a. Disciplina: Linguagens de Script para Web 
// b. Autora: Josiane de Lima 
// c. Data: 28/08/2023
// d. Objetivo: Declare uma função (function) para cálculo de aproveitamento do rendimento escolar dos alunos de uma turma (Média semestral). Esta função deverá estar preparada para receber 4 notas (são 4 variáveis).

const calculaMedia = (N1, N2, N3, N4) => {
  // M = média
  let M = (N1 * 0.1) + (N2 * 0.2) + (N3 * 0.3) + (N4 * 0.4);
  return M;
}
console.log(`O resultado da média da pessoa estudante é ${calculaMedia(8, 9, 5, 7)}.`);

