import express from "express";
// Carregando na variavél router o express.Router() que é responsável por gerenciar as ratas de aplicação
const router = express.Router()


//ROTA DE lancamentos
router.get("/lancamentos", (req, res) => {
  // const lancamentos = ["Computador","Celular","Tablet","Notebook"];
  
// Array de Objetos com os lancamentos
const lancamentos = [
  {nome: "CARIMARA: Beneath the forlorn limbs", preco: "40,19"},
  {nome: "House of Necrosis", preco:"100,00"},
  {nome: "DAIMON BLADES", preco:"223,23"},
  {nome: "My Card Is Better Than Your Card", preco: "456,99"},
  {nome: "Blood of Mehran", preco: "329,90"}
];

res.render("lancamentos",{
    lancamentos : lancamentos
});

});

export default router;