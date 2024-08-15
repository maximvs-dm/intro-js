var x; // declara uma variável x global sem valor
let y; // declara uma variável y local sem valor
const z = 10; // declara uma constante local com o valor 10

// o que é um escopo local em JS?
/*

Um bloco é definido com um par de chaves --> {}

if (condição) {
  <bloco de código aqui>
}

*/

x = 20;

let b;

console.log("a antes do if", a);
console.log("b antes do if", b);

if (x > 10) {
  var a = x + 1;
  b = 2 * x;

  console.log("dentro do if", { a, b });
}

// variável `a` existe aqui
// mas a variável `b` não, a menos que façamos a declaração antes do if!
console.log("fora do if", { a, b });
