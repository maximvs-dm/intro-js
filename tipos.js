// Quais são os principais tipos de dados em JS?

let a, b, c, d, e, f, g;

a = undefined;
b = null;
c = 0;
d = "olá mundo!";
e = false;
f = { x: 10 };
g = [10, 20, 30];

console.log("variável a", { valor: a, tipo: typeof a });
console.log("variável b", { valor: b, tipo: typeof b });
console.log("variável c", { valor: c, tipo: typeof c });
console.log("variável d", { valor: d, tipo: typeof d });
console.log("variável e", { valor: e, tipo: typeof e });
console.log("variável f", { valor: f, tipo: typeof f });
console.log("variável g", { valor: g, tipo: typeof g });

// acessar propriedade de um objeto
console.log(f.x);
// ou
console.log(f["x"]);
// adicionando uma propriedade nova
f.novaProp = true;
console.log(f);

// acessar item da "lista" (array no JS)
console.log('primeiro item indice 0:', g[0]);
console.log(g[1]);
console.log('índice não existente na lista:', g[5]);
