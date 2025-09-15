
   const dataAtual= new Date();   

document.write(`<p>O horário atual é: ${dataAtual}</p>`);

const compraInternacional = 302.99;
document.write(`<p>
    O valor da compra em Dolár é: ${compraInternacional.toLocaleString("en",{
        style:"currency",
        currency:"USD",
    })}
</p>`)

const compraNacional = compraInternacional * 5.45;
document.write(`<p>
    O valor da compra formatado no em Reais é: ${compraNacional.toLocaleString("pt-br",{
        style:"currency",
        currency:"BRL",
    })}
</p>`)



dataAtual.setDate(dataAtual.getDate() + 12);

document.write(`A sua compra chegará em: <span class="previsao">${dataAtual.getDate()}/${dataAtual.getMonth() + 1}/${dataAtual.getFullYear()}</span>`);
