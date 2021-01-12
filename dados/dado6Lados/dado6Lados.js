function geraNumero(){
    return Math.floor(Math.random() * 6)+1;
}

function geraNaoRepetido(valorAtual){
    novoValor = Math.floor(Math.random() * 6)+1;
    if(novoValor == valorAtual){
        return geraNaoRepetido(valorAtual);
    }
    else{
        valorAtual = novoValor;
        return novoValor;
    }
}

function montaDado(dado, valor){
    switch(valor){
        case 1:
            dado.className = "dado--1";
            return 1;
        case 2:
            dado.className = "dado--2";
            return 1;
        case 3:
            dado.className = "dado--3";
            return 1;
        case 4:
            dado.className = "dado--4";
            return 1;
        case 5:
            dado.className = "dado--5";
            return 1;
        case 6:
            dado.className = "dado--6";
            return 1;
        default:
            return 0;
    }
}

const dado = document.getElementById("dado");
let numero = geraNumero();
montaDado(dado, numero);

dado.onclick = function(){
    let conta = 0;
    const intervalo = setInterval(()=>{
        conta++;
        numero = geraNaoRepetido(numero);
        montaDado(this, numero);
        if (conta == 5) clearInterval(intervalo);
    }, 300);
}