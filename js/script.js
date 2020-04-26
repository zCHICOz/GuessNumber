const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

const Adivinha = {
    maximo: 10,
    tentativa: 0,
    numeroSorteado: function ValorAleatorio() {
        return Math.round(Math.random() * this.maximo);
    }
}

const status = document.getElementById('status');
let tentativa = document.getElementById('tentativa');
let result = document.getElementById('result');
let numeroSorteado = Adivinha.numeroSorteado();

let jogarDeNovo = document.getElementById('reiniciar');

function AtualizarTentativa(tentativa, valor) {
    tentativa.innerHTML = "Tentativa: " + valor;
}

function handleSubmit(e) {
    e.preventDefault();

    let chute = document.getElementById('chute').value;

    if(!!!chute) {
        alert("Digite algum valor!");
        return;
    }

    AtualizarTentativa(tentativa, ++Adivinha.tentativa);

    if(numeroSorteado == chute) {
        jogarDeNovo();
        status.innerHTML = "Parabéns, você acertou!";
        result.style.transition = "0.5s";
        result.style.backgroundImage = "linear-gradient(-60deg, #A9EBFA 20%, #FEB6F7 100%)";
        result.style.color = "#222";
        limpar();
    }
    else if(numeroSorteado > chute) {
        status.innerHTML = "O número sorteado é maior!";
        limpar();
    }
    else if( numeroSorteado < chute) {
        status.innerHTML = "O número sorteado é menor!";
        limpar();
    }
    function jogarDeNovo() {
        document.getElementById("btnReiniciar").style.display = "inline";
    }
}

function reiniciar() {
    document.location.reload(true);
}

function limpar() {
    document.getElementById('chute').value = "";
}
