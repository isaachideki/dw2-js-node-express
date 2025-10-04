// Importando o Express (framework)
const express = require("express");
// Inicando o express na variável app
const app = express();

//Configurando o ejs
app.set('view engine','ejs')

//Definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"))
//Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a Requisição | RES = Trata a resposta
app.get("/", (req, res) => {
res.render("index")

});
//ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  // const produtos = ["Computador","Celular","Tablet","Notebook"];
// Array de Objetos com os produtos
const produtos = [
  {nome: "Celular", preco:3000},
  {nome: "Computador", preco:4000},
  {nome: "Tablet", preco:2000},
  {nome: "Notebook", preco: 3200},
];

res.render("produtos",{
    produtos : produtos
});

});

//ROTA CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    {nome: "Ricardo", cpf:"123.456.789-00", endereco:"Rua das Flores,34"},
    {nome: "Isaac", cpf:"123.456.789-00", endereco:"Rua Diamante,100"},
    {nome: "Amanda", cpf:"123.456.789-00", endereco:"Rua Ceará,30"},
    {nome: "Renan", cpf:"123.456.789-00", endereco:"Rua Curitiba,22"},
  ];
res.render("clientes",{

  clientes: clientes
});
});

//Rota Pedidos
app.get("/pedidos", (req, res) => {
  const pedidos = [
    {numero: "1", produto:"Computador", valor:"3000"},
    {numero: "2", produto:"Tablet", valor:"1000"},
    {numero: "3", produto:"Notebook", valor:"3500"},
    {numero: "4", produto:"Celular", valor:"2200"},
  ];
res.render("pedidos",{

  pedidos: pedidos
});
});


//Rota de perfil
// :user -> É um parametro da rota (OBRIGATÓRIO)
// :user? ->  É um parametro da rota (opcional)
app.get("/perfil/:user", (req,res) =>{
  const user = req.params.user

  res.render("perfil",{
    //Enviando variáveis para a página EJS (HTML)
    user : user
  });
})

// Iniciando o servidor HTTP
//O servidor escutará a porta 8080l
const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possivel iniciar o servidor. Ocorreu um erro ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em:
          http://localhost:${port}`);
  } 
});
