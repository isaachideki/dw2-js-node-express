import express from "express";
// Carregando na variavél router o express.Router() que é responsável por gerenciar as ratas de aplicação
const router = express.Router()



//Rota Pedidos
router.get("/pedidos", (req, res) => {
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

//Exportando o objeto router
export default router;