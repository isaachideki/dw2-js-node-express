// Importando o Express (framework)
//const express = require("express"); -> CommonJS Modules
import express  from "express"; //ES6 Modules

// Inicando o express na variável app
const app = express();

//Importando os Constrollers (onde estão as rotas e onde é tratado as requisições)
import JogosControllers from "./controllers/JogosController.js"
import PedidosControllers from "./controllers/PedidosController.js"
import LancamentosControllers from "./controllers/LancamentosController.js"
import PerfilControllers from "./controllers/PerfilController.js"

//Configurando o ejs
app.set('view engine','ejs')
//Definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"));

//Definindo o uso das rotas que estão no constrollers
app.use("/",JogosControllers);
app.use("/",PedidosControllers);
app.use("/",LancamentosControllers);
app.use("/",PerfilControllers);


//Criando a primeira rota do site (ROTA PRINCIPAL)
// REQ = Trata a Requisição | RES = Trata a resposta
app.get("/", (req, res) => {
res.render("index")

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
