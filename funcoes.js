// função tradicional
function quadrado(n) {
  console.log({
    valor: n,
    // indice: i,
    // lista: v,
  });
  return n ** 2;
}

// função tradicional
const lista = [1, 2, 3, 4];
console.log("inicial", lista);
const lista2 = lista.map(quadrado);
console.log("final", lista2);

/*
forma 1: function

function (params) {
  ...
}

forma 2: arrow function

- com retorno direto
(params) => x

- com código interno
(params) => {
    ...;
    return x;
    }

*/

// função anônima 1

console.log("inicial - com function", lista);
const lista3 = lista.map(function (n, i, v) {
  console.log({
    valor: n,
    indice: i,
    lista: v,
  });
  return n ** 2;
});
console.log("final - com function", lista2);

console.log("inicial - arrow 1", lista);
const lista4 = lista.map((n) => n ** 2);
console.log("final - arrow 1", lista4);

// função anônima 2
console.log("inicial - arrow 2", lista);
const lista5 = lista.map((n, i, v) => {
  console.log({
    valor: n,
    indice: i,
    lista: v,
  });
  return n ** 2;
});
console.log("final - arrow 2", lista5);
