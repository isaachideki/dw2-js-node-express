import express from "express";
// Carregando na variavél router o express.Router() que é responsável por gerenciar as ratas de aplicação
const router = express.Router()


//ROTA DE PRODUTOS
router.get("/produtos", (req, res) => {
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

export default router;