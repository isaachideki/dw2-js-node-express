// MANIPULAÇÃO DE DATAS

document.write("<h3>Manipulando datas:</h3>")
// Cria uma instancia da classe Date() do Javascript
const dataAtual = new Date();
document.write(dataAtual)
// Pegando  o dia atual:
const dia = dataAtual.getDate();
document.write(`<p>Hoje é dia: ${dia}</p>`)
//Pegando o mes atual:
const mes = dataAtual.getMonth()+1;
document.write(`<p>Hoje é mes: ${mes}</p>`)
//Pegando o ano atual:
const ano = dataAtual.getFullYear();
document.write(`<p>Hoje é o ano: ${ano}</p>`)
//Pegando o dia da semana
const diaSemana = dataAtual.getDay();
document.write(`<p>Hoje é dia: ${diaSemana}</p>`)

// Adicionando os Dias,Mêses e Anos á data atual
// Adicionando 4 anos ao ano atual
dataAtual.setFullYear(dataAtual.getFullYear() + 4);

document.write(`<p>Daqui a 4 anos será: ${dataAtual.getFullYear()}</p>`)
// Adicionando mêses 
dataAtual.setMonth(dataAtual.getMonth() + 3)
//Adicionando dias 
dataAtual.setDate(dataAtual.getDate() + 10)

// FORMATAÇÃO DE MOEDAS
// REAL
document.write("<h3>Formatação de moedas:</h3>")

const salario = 1512
const salarioReal = salario.toLocaleString("pt-br",{
    style: "currency",
    currency: "BRL",
});
document.write(`<p>O valor do salário mínimo atual é ${salarioReal}.</p>`)
// DÓLAR 
const salarioDolar = salario.toLocaleString("en",{
    style: "currency",
    currency:"USD"
});
const salarioConvertido = salario * 0.176
document.write(`<p>O salário em DOLAR é ${salarioDolar}.</p>`)

document.write(`<p>O valor do salário em DOLAR é: ${salarioConvertido.
toLocaleString("en",{
    style: "currency",
    currency: "USD"
})}.</p>`);
//currency : EUR -> Euro

// FORMATAÇÃO DE STRING (textos)
document.write("<h3>Formatação de Strings</h3>")
const nome = "Hideki";

//ALTERANDO PARA LETRAS MAIÚSCULAS - toUpperCase()
document.write(`<p>Nome em maiúsculas: ${nome.toUpperCase()}</p>`)
//ALTERANDO PARA LETRAS MINÚSCULAS
document.write(`<p>Nome em  minúsculas: ${nome.toLowerCase()}</p>`)

//REMOVENDO ESPAÇOS DA STRING
const novoNome = novo.replace(/\s/g,"")


//  CONTANDO CARACTERES DE UMA  STRING - .lenght
document.write(`<p>Esse nome tem: ${nome.length} letras.</p>`)