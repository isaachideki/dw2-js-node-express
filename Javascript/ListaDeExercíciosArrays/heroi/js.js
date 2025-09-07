class heroi {
  constructor(nome, vida, velocidade, forca) {
    this.nome = nome;
    this.vida = vida;
    this.velocidade = velocidade;
    this.forca = forca;
  }
  correr() {
    return "<p class='acaoCorre'>O Herói está correndo!<p>";
  }
  andar() {
    return "<p class='acao'>O Herói está andando!<p>";
  }
  atacar() {
    return "<p class='acao'> O Herói está atacando!</p>";
  }
  defender() {
    return " <p class='acaoDefesa'>O Herói está se defendendo!<p>";
  }
}
const HomemAranha = new heroi("Homem-aranha", "88%", "95%", "72%");

HomemAranha.teia=1;
HomemAranha.sentidoAranha=()=>{
  return("Perigo detectado");
}

document.write(
  `<div class="heroi-card"><p class="heroiTxt">Nome: ${HomemAranha.nome}<br>Vida: ${HomemAranha.vida}<br>Força: ${HomemAranha.forca}<br> Velocidade: ${HomemAranha.velocidade} <br>${HomemAranha.sentidoAranha()} <br> Soltar teia: ${HomemAranha.teia}<br> ${HomemAranha.defender
    ()}</p> </div> <br>`
);

const Superman = new heroi("Superman","100%","100%","Indescritível");
Superman.podeVoar=1;
Superman.VisaoDeCalor=()=>{
  return("Está usando sua visão de calor");
}

document.write(
  `<div class="heroi-card"><p class="heroiTxt">Nome: ${Superman.nome}<br>Vida: ${Superman.vida}<br>Velocidade: ${Superman.velocidade}<br> Força: ${Superman.forca} <br>${Superman.VisaoDeCalor()}<br>Voar: ${Superman.podeVoar}<br>${Superman.atacar()}</p></div><br>`
);

const Batman = new heroi("Batman","70%","80%","90%");
Batman.esconder=0;
Batman.Investigando=()=>{
  return("O herói está investigando um crime");
}

document.write(
  `<div class="heroi-card"><p class="heroiTxt">Nome: ${Batman.nome}<br>Vida: ${Batman.vida}<br>Velocidade: ${Batman.velocidade}<br> Força: ${Batman.forca} <br>${Batman.Investigando()} <br>Se esconder: ${Batman.esconder}<br>${Batman.correr()}</p></div>`
);


/* Este código é de total propriedade de Isaac Hideki Shiokawa*/