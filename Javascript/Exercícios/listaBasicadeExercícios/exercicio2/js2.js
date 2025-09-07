function operacaoMatematica(num1, operador, num2) {
  let resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;

    default:
      resultado = "Operador inválido";
  }}

let num1 = prompt("Digite o primeiro número ");
let operador = prompt("Digite a sua operação  ");
let num2 = prompt("Digite o segundo número ");

resultado = eval(`${num1} ${operador} ${num2}`);

document.write(
  `<p>O resultado da operação de ${num1} ${operador} ${num2} é igual a <strong>${resultado}</strong></p>`

);

{/*
  const calculadora = (num1,operador,num2) =>
   eval(`${num1} ${operador} ${num2}`)

document.write(`<p>O resultado da operação é ${calculadora(1100,"+",1)}.</p>`)

  */}