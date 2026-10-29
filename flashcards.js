const addWords = document.querySelector('#return');
const target = document.querySelector('.study-word');
const answer = document.querySelector('.answer');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const deck = urlParams.get('deck');

let wordsList = [];
let index = 0;

if (localStorage.getItem('wordsList')) {
    wordsList = JSON.parse(localStorage.getItem('wordsList'));
} else {
    window.location.href = "index.html";
}

console.log(wordsList);

addWords.addEventListener("click", () => {
    window.location.href = "index.html";
});

function deckFinished() {
    answer.value = "";
    answer.style.display = "none";
    target.innerText = "Finished all words!";
}

function createCard() {
    if (index < wordsList.length) {
        word = wordsList[index];
        while (word.category !== deck) {
            index++
            word = wordsList[index];
            if (index >= wordsList.length) {
                deckFinished();
                return;
            }
            target.innerText = word.learning;
        }
        target.innerText = word.learning;
    } else {
        deckFinished();
    }
}

answer.addEventListener("change", (e) => {
    e.preventDefault();
    if (wordsList[index].meaning === answer.value) {
        index++;
        answer.value = "";
        createCard();
    }
});

createCard();