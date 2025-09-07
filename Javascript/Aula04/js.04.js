// // Capturando elementos DOM

// const parar = document.getElementById("parar")

// parar.style.backgroundColor = "red"

// // const atencao = document.getElementById("Atencao")

// atencao.style.backgroundColor = "yellow"

function parar(){
    document.getElementById("parar").style.backgroundColor = "red"
    document.getElementById("Atencao").style.backgroundColor = "gray"
    document.getElementById("Prosseguir").style.backgroundColor = "gray"
}

function Atencao() {
     document.getElementById("Atencao").style.backgroundColor = "yellow"
      document.getElementById("parar").style.backgroundColor = "gray"
    document.getElementById("Prosseguir").style.backgroundColor = "gray"
}

function Prosseguir(){
     document.querySelector("#parar").style.backgroundColor = "gray"
    document.querySelector("#Atencao").style.backgroundColor = "gray"
    document.querySelector("#Prosseguir").style.backgroundColor = "green"
}