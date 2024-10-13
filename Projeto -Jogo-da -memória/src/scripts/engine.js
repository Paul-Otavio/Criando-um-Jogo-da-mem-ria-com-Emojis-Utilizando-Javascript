const emojis = [
    "💵", "💵", "😱", "😱",
    "😡", "😡", "🤡", "🤡",
    "👽", "👽", "👺", "👺",
    "🤖", "🤖", "👻", "👻"
];
// Array para armazenar as cartas abertas
let openCards = [];

// Embaralha os emojis
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

// Cria as cartas e adiciona ao tabuleiro do jogo
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

/**
 * Função que lida com o clique em uma carta
 */
function handleClick() {
    if (openCards.length < 2) {
        this.classList.add("boxOpen");
        openCards.push(this);
    }
    if (openCards.length == 2) {
        setTimeout(checkMatch, 500);
    }
}

/**
 * Função que verifica se duas cartas abertas são iguais
 */
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add("boxMatch");
        openCards[1].classList.add("boxMatch");
    } else {
        openCards[0].classList.remove("boxOpen");
        openCards[1].classList.remove("boxOpen");
    }
    openCards = [];
    if (document.querySelectorAll(".boxMatch").length === shuffleEmojis.length) {
        alert("você venceu!");
    }
}