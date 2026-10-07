const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function ajustarTela() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

ajustarTela();
window.addEventListener("resize", ajustarTela);

let tempo = 0;
let quantidadeVisivel = 0;

const pontos = [];

for (let t = 0; t < Math.PI * 2; t += 0.08) {

    const x = 16 * Math.pow(Math.sin(t), 3);

    const y =
        13 * Math.cos(t) -
        5 * Math.cos(2 * t) -
        2 * Math.cos(3 * t) -
        Math.cos(4 * t);

    pontos.push({ x, y });
}

function desenhar() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const centroX = canvas.width / 2;
    const centroY = canvas.height / 2;

    const escala = canvas.width <= 600
    ? Math.min(canvas.width, canvas.height) / 42
    : Math.min(canvas.width, canvas.height) / 38;

    // Batimento do coração
    const pulsacao =
        1 + Math.sin(tempo * 0.06) * 0.035;

    const tamanhoFonte = canvas.width <= 600 ? 9 : 14;
ctx.font = `bold ${tamanhoFonte}px Arial`;
    ctx.textAlign = "center";

    for (
        let i = 0;
        i < Math.min(quantidadeVisivel, pontos.length);
        i++
    ) {

        const ponto = pontos[i];

        const posX =
            centroX +
            ponto.x * escala * pulsacao;

        const posY =
            centroY -
            ponto.y * escala * pulsacao;

        // Efeito de brilho
        ctx.shadowBlur = 18;
        ctx.shadowColor = "#ff2d75";

        ctx.fillStyle = "#ff4d8d";

        ctx.fillText(
            "I love you",
            posX,
            posY
        );
    }

    // Faz as palavras aparecerem aos poucos
    if (quantidadeVisivel < pontos.length) {
        quantidadeVisivel += 0.6;
    }

        // Mensagem aparece depois que o coração termina de se formar
if (quantidadeVisivel >= pontos.length) {

    const brilho = 0.75 + Math.sin(tempo * 0.04) * 0.25;

    ctx.shadowBlur = 20;
    ctx.shadowColor = "#ff4d8d";

    // Título
    ctx.fillStyle = `rgba(255, 255, 255, ${brilho})`;
    ctx.font = canvas.width <= 600
    ? "bold 18px Arial"
    : "bold 28px Arial";
    ctx.textAlign = "center";

    ctx.fillText(
        "Para o amor da minha vida ❤️",
        centroX,
        centroY - 20
    );

    // Frase menor
    ctx.shadowBlur = 10;
    ctx.fillStyle = "#ff9fbd";
    ctx.font = canvas.width <= 600
    ? "14px Arial"
    : "18px Arial";

    ctx.fillText(
        "Eu te amo mais a cada dia.",
        centroX,
        centroY + 20
    );
}

    tempo++;

    requestAnimationFrame(desenhar);
}

desenhar();