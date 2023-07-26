
var slider = document.getElementById("range");
slider.value = 4;

var cardNames = ["arona-pyro", "aru", "shun", "koharu", "arona"];

function putNumCards() {

    document.getElementById("num-cards").innerHTML = slider.value;

    var cardField = document.getElementById("memory-game");

    var existingCards = cardField.childElementCount / 3;
    var cardDifference = Math.abs(slider.value - existingCards);


    if (slider.value > existingCards) {
        for (let i = 0; i < cardDifference; i++) {
            var addChar = cardNames[existingCards];

            var newCard = document.createElement("div");
            newCard.classList.add("memory-card");
            newCard.setAttribute("data-char", addChar);

            var charImage = document.createElement("img");
            charImage.classList.add("front-face");
            charImage.setAttribute("src", "css/media/memory/" + addChar + "-card.png");

            var backImage = document.createElement("img");
            backImage.classList.add("back-face");

            newCard.appendChild(charImage);
            newCard.appendChild(backImage);

            for (let j = 0; j < 3; j++) {
                cardField.appendChild(newCard);
                newCard = newCard.cloneNode(true);
            }
        }
    }
    else {
        for (let i = 0; i < cardDifference; i++) {
            for (let j = 0; j < 3; j++) {cardField.removeChild(cardField.lastElementChild);}
        }
    }

    resetGame();
    startGame();
}

slider.oninput = putNumCards;






const cards = document.querySelectorAll('.memory-card');

let hasFlippedFirst = false;
let hasFlippedSecond = false;
let lockBoard = false;
let firstCard, secondCard, thirdCard;

function flipCard() {
    if (lockBoard) return;

    this.classList.add('flip');
    this.removeEventListener("click", flipCard);


    if (!hasFlippedFirst) {
        hasFlippedFirst = true;
        firstCard = this;

        return;
    }

    if (!hasFlippedSecond) {
        hasFlippedSecond = true;
        secondCard = this;

        return;
    }

    thirdCard = this;

    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.char === secondCard.dataset.char && secondCard.dataset.char === thirdCard.dataset.char;

    isMatch ? disableCards() : unflipCards();
}


function addScore() {
    document.getElementById("score").innerHTML = Number(document.getElementById("score").innerHTML) + 3;

    if (document.getElementById("score").innerHTML == slider.value * 3) {
        document.getElementById("scorep").innerHTML = "You win!";
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    thirdCard.removeEventListener('click', flipCard);

    addScore();
    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.addEventListener('click', flipCard);
        secondCard.addEventListener('click', flipCard);
        thirdCard.addEventListener('click', flipCard);
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        thirdCard.classList.remove('flip');

        resetBoard();
    }, 500);
}

function resetBoard() {
    [hasFlippedFirst, hasFlippedSecond, lockBoard] = [false, false, false];
    [firstCard, secondCard, thirdCard] = [null, null, null];
    lockBoard = false;
}

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
};

function resetGame() {
    cards.forEach(card => card.classList.remove("flip"));
    startGame();
}

function startGame() {
    shuffle();
    document.getElementById("scorep").innerHTML = 'score: <span id="score">0</span>';
    cards.forEach(card => card.addEventListener('click', flipCard));
}

startGame()

