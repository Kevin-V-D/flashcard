const addWords = document.querySelector('#return');
const target = document.querySelector('.study-word');
const answer = document.querySelector('.answer');
let wordsList = [];

if (localStorage.getItem('wordsList')) {
    wordsList = JSON.parse(localStorage.getItem('wordsList'));
} else {
    window.location.href = "index.html";
}

function checkWord(word) {
    return new Promise((resolve) => {
        target.innerText = word.name;
        answer.value = "";

        const timer = setInterval(() => {
            if (answer.value === word.meaning) {
                clearInterval(timer);
                resolve();
            }
        }, 100);
    });
}

async function createCard() {
    for (let i = 0; i < wordsList.length; i++) {
        const word = wordsList[i];
        await checkWord(word);
    }
    answer.value = "";
    answer.style.display = "none";
    target.innerText = "All words finished!";
}

console.log(wordsList);

addWords.addEventListener("click", () => {
    window.location.href = "index.html";
});

createCard();