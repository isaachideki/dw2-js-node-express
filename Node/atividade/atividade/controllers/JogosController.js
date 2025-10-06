//Importando o Express
import express from "express";
// Carregando na variavél router o express.Router() que é responsável por gerenciar as ratas de aplicação
const router = express.Router()


//ROTA jogos
router.get("/jogos", (req, res) => {
  const jogos = [
    {nome: "Counter-Striker 2", ano:"2012", preco:"0,00"},
    {nome: "EA SPORTS FC 26", ano:"2025", preco:"299,90"},
    {nome: "Ghost of Tsushima", ano:"2024", preco:"167,43"},
    {nome: "God of War", ano:"2005", preco:"79,95"},
    {nome: "Euro Truck Simulator 2", ano:"2012", preco:"15,49"},
   
  ];
res.render("jogos",{

  jogos: jogos
});
});
//Exportando o objeto router
export default router;