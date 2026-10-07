const botao = document.getElementById("botao");
const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");

const texto = "Eu sei que hoje talvez não esteja sendo um dos seus melhores dias, mas queria fazer isso só pra te lembrar de uma coisa: eu tô aqui com você. ❤️ Não importa se o dia foi bom ou ruim, você continua sendo uma das melhores partes dos meus dias. Eu te amo, minha vida. ❤️";

let escrevendo = false;

botao.addEventListener("click", function () {

    if (escrevendo) return;

    escrevendo = true;

    titulo.innerText = "Para o amor da minha vida ❤️";

    botao.style.display = "none";

    let i = 0;

    function escrever() {

        if (i < texto.length) {

            mensagem.innerHTML += texto.charAt(i);

            i++;

            setTimeout(escrever, 55);
        }
    }

    escrever();
});

function criarCoracao() {
    const coracao = document.createElement("div");

    coracao.classList.add("coracao-flutuante");
    coracao.innerHTML = "❤️";

    coracao.style.left = Math.random() * 100 + "vw";

    const tamanho = Math.random() * 20 + 15;
    coracao.style.fontSize = tamanho + "px";

    const duracao = Math.random() * 3 + 3;
    coracao.style.animationDuration = duracao + "s";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, duracao * 1000);
}

setInterval(criarCoracao, 300);