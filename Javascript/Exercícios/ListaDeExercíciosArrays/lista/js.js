const listaClientes = [
  {
    nome: "Diego Max",
    endereco: "Rua das Palmeiras, 250 - Jardim Primavera, Campinas - SP",
    cpf: 85236974112,
  },
  {
    nome: "Ramon Alves Trigo",
    endereco: "Avenida Atlântica, 1020 - Copacabana, Rio de Janeiro - RJ",
    cpf: 74185296300,
  },
  {
    nome: "Luiz Claudio Barreto",
    endereco: "Travessa do Lago, 45 - Centro, Florianópolis - SC",
    cpf: 36925814777,
  },
];

listaClientes.forEach((clientes) => {
  document.write(
    `<div class="list"><p>O cliente do CPF válidado ${clientes.cpf}<br> se chama ${clientes.nome}<br> e mora no endereço ${clientes.endereco}</p></div> <br>`
  );
});

listaClientes.push({
  nome: "Isaac Hideki Shiokawa",
  endereco: "Rua das Acácias, 321 - Vila Nova, Porto Alegre - RS",
  cpf: 78901234567,
});

document.write(
  `<p class="alerta"> Um cliente foi adicionado ao final do vetor</p><br>
   <div class="list">  <p>O cliente de CPF ${
     listaClientes[listaClientes.length - 1].cpf
   }<br> se chama ${
    listaClientes[listaClientes.length - 1].nome
  }<br> e mora no endereco ${
    listaClientes[listaClientes.length - 1].endereco
  }</p> </div>`
);

listaClientes.unshift({
  nome: "Ricardo Mendes Carvalho",
  endereco: "Avenida das Nações, 850 - Centro, Brasília - DF",
  cpf: 11245367743,
});

document.write(
  `<p class="alerta"> * Um cliente foi adicionado ao final do vetor * </p><br>
   <div class="list">  <p>O cliente de CPF ${
      listaClientes[0].cpf
   }<br> se chama ${
     listaClientes[0].nome
  }<br> e mora no endereco ${
    listaClientes[0].endereco
  }</p> </div>`
);



document.write("<h2><p> Lista Atualizada </p></h2>")
listaClientes.forEach((clientes) => {
  document.write(
    `<div class="list"><p>O cliente de CPF ${clientes.cpf}<br> se chama ${clientes.nome}<br> e mora no endereco ${clientes.endereco}</p></div> <br>`
  );
});

/* Este código é de total propriedade de Isaac Hideki Shiokawa*/