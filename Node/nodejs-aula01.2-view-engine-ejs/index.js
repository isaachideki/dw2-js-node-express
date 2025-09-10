// Importando o Express (framework)
const express = require("express");
// Inicando o express na variável app
const app = express();

//Configurando o ejs
app.set('view engine','ejs')

//Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a Requisição | RES = Trata a resposta
app.get("/", (req, res) => {
res.render("index")

});

// ROTA PRODUTOS 
app.get("/Produto", (req , res) => {
    res.send("<h1>Bem-Vindo a página de Produtos!</h1>")
})
                                                                                                    
// ROTA CLIENTES 
app.get("/Clientes", (req , res) => {
    res.send("<h1>Bem-Vindo a página de Clientes!</h1>")
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
