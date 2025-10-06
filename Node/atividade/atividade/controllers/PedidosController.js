import express from "express";
// Carregando na variavél router o express.Router() que é responsável por gerenciar as ratas de aplicação
const router = express.Router()



//Rota Pedidos
router.get("/pedidos", (req, res) => {
  const pedidos = [
    {numero: "1", jogo:"Azure Striker", valor:"169,90"},
    {numero: "2", jogo:"The SIMS 4", valor:"34,30"},
    {numero: "3", jogo:"Retrowave World", valor:"23,09"},
    {numero: "4", jogo:"Tenis Wolrd Tour 2", valor:"67,00"},
    {numero: "4", jogo:"Warhammer", valor:"111,92"},
  ];
res.render("pedidos",{

  pedidos: pedidos
});
});

//Exportando o objeto router
export default router;