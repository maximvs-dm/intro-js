let x = [10, 20, 30, 40];

const n = x.length;

console.log("len do array:", n);

// for tradicional
for (let i = 0; i < n; i++) {
  console.log(`índice ${i} tem o valor ${x[i]}`);
}

// a condição pode ser qualquer expressão lógica
for (let i = 0; i < n && i !== 2; i++) {
  console.log(`índice ${i} tem o valor ${x[i]}`);
}

// for in
for (let j in x) {
  console.log(j);
}

// for of
for (let k of x) {
  console.log(k);
}

// refazendo agora com um objeto
let y = { a: "ola", b: "tchau" };

// for in
for (let m in y) {
  console.log(m);
}

// for of
for (let n of Object.values(y)) {
  console.log(n);
}
