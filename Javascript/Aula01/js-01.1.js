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
