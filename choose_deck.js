const form = document.querySelector("form");
const addWords = document.querySelector("#return");
let words = [];
let decks = [];

function deckList(category) {
    const deck = document.createElement("input");

    deck.type = "submit";
    deck.name = "deck";
    deck.value = category;

    form.appendChild(deck);
}

if (localStorage.getItem('wordsList') != null) {
    words = JSON.parse(localStorage.getItem('wordsList'));
} else {
    window.location.href = "index.html";
}

words.forEach(word => {
    console.log(word.category);
    const category = word.category;
    if (!decks.includes(category)) {
        decks.push(category);
        deckList(category);
        console.log(decks);
    }
});

addWords.addEventListener("click", () => {
    window.location.href = "index.html";
});