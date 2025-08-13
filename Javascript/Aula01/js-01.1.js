//VARIÁVEIS PODEM SER DECLARADAS DE 3 FORMAS
//VAR,LET, E CONST
//VAR: No geral evite o seu uso, pode não ser muito seguro.
//LET: Utiliza quando for necessário reatribuir o valor da variável
//CONST: Utiliza quando NÃO precisar atribuir valores da variável

// var nome = "Diego"
// var nome = "Maria"
// let cidade = "Registro"
// let cidade = "Pariquera" // NÃO PODE
// let endereco
// endereco = "Rua tal..."
// const idade // NÃO PODE
// const idade = 18
// idade = 20

// TIPOS DE FUNÇÕES

//FUNÇÃO SIMPLES
const message = "<h2>Olá! Bem-Vindos! Essa é a sua primeira função!</h2>";

function showMessage() {
  document.write(message);
}
//Invocando a função
showMessage();

//FUNÇÃO COM PARÂMETROS
const user = "Diego Max";

function userMessage(name) {
  //Essa função recebe um parâmetro
  document.write(`<h3> o que desejas fazer hoje, ${name}?</h3>`);
  // ${} -> Template Strings  / Literal Strings
  //É usado para inserir variáveis denrto de strings (aspas)
}
userMessage(user); //ARGUMENTO

//FUNÇÃO COM DIFERENTES PARAMETROS

const n1 = 10;
const n2 = 12;

function mult() {
  //Essa função recebe dois parametros
  let result = n1 * n2;
  document.write(`A multiplicação é igual a ${result}`);
}
mult(n1, n2);

//FUNÇÂO COM RETORNO
const num1 = 1000;
const num2 = 5;

function div(num1, num2) {
  return num1 / num2;
}

document.write(
  `<p>A divisão de ${num1} por ${num2} é igual a ${div(num1, num2)}.</p>`
);

//FUNÇÃO COM DIFERENTES RETORNOS
const number = 4;

function parImpar(number){
   if(number % 2 == 0 ){
    return 'par'
   } else{
    return 'impar'
   }
}
document.write(`<p>O número ${number} é <strong>${parImpar(number)}</strong> </p>`)