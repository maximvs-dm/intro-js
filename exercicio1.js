/* exercício 1

escrever três funções:

ehPrimo(n: number) => boolean
Receber um número e retornar um booleano 
indicando se é primo ou não

intervaloDePrimos(n1: number, n2: number) => number[]
Receber dois números formando um intervalo e retornar 
uma lista de primos no intervalo fechado [n1, n2]

filtraPrimos(v: number[]) => number[]
Receber uma lista de números e retornar uma nova lista
contendo apenas os números primos da primeira lista

*/

function ehPrimo(n) {
  // é primo se for divisível apenas por 1 e por ele mesmo
  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  for (let x = 3; x <= n ** 0.5 + 1; x += 2) {
    if (n % x === 0) {
      // x é divisor de n
      return false;
    }
  }

  return true;
}

console.log("true", ehPrimo(13));
console.log("true", ehPrimo(17));
console.log("true", ehPrimo(101));
console.log("true", ehPrimo(379));
console.log("false", ehPrimo(12));
console.log("false", ehPrimo(39));
console.log("false", ehPrimo(102));
console.log("false", ehPrimo(381));

function intervaloDePrimos(n1, n2) {
  // seu código aqui
}

function filtraPrimos(v) {
  // seu código aqui
}
