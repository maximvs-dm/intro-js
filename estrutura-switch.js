// é o equivalente de um if-elif em Python

let resp,
  a = 10,
  b = 20,
  op = "+";

switch (op) {
  case "+":
    resp = a + b;
    break;
  case "-":
    resp = a - b;
    break;
  case "*":
    resp = a * b;
    break;
  case "/":
    resp = a / b;
    break;
  default:
    resp = null;
}

console.log("a resposta é:", resp);

// quando que o fato do switch case executar os demais comando pode ser útil?
let tipoBtn = "enviar";
let cor;

switch (tipoBtn) {
  case "enviar":
  case "salvar":
    cor = "#00f";
    break;

  case "sair":
  case "erro":
    cor = "#f00";
    break;

  case "aviso":
    cor = "#0ff";
    break;

  default:
    cor = "#aaa";
}
