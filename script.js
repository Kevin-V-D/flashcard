const form = document.querySelector('.create-card');
const targetLanguage = document.querySelector('#target-language');
const translation = document.querySelector('#translation');
const practice = document.querySelector('#practice');
const wordsContainer = document.querySelector('.words-container');
let words = [];

function listWords(wordslist) {
    wordslist.forEach(word => {
        const savedWord = document.createElement("div");
        const learning = document.createElement("p");
        const translated = document.createElement("p");

        learning.innerText = `learning: ${word.learning}`;
        translated.innerText = `translation: ${word.meaning}`;

        wordsContainer.appendChild(savedWord);
        savedWord.appendChild(learning);
        savedWord.appendChild(translated);
    });
}

if (localStorage.getItem('wordslist') != null) {
    words = JSON.parse(localStorage.getItem('wordsList'));
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (localStorage.getItem('wordslist') != null) {
        words = JSON.parse(localStorage.getItem('wordsList'));
    }

    words.push({
        learning: targetLanguage.value,
        meaning: translation.value
    });
    targetLanguage.value = "";
    translation.value = "";
    wordsContainer.innerHTML = "";

    localStorage.setItem('wordsList', JSON.stringify(words));
    listWords(JSON.parse(localStorage.getItem('wordsList')));
    console.log(JSON.parse(localStorage.getItem('wordsList')));
})

practice.addEventListener("click", () => {
    window.location.href = "flashcards.html";
});

listWords(JSON.parse(localStorage.getItem('wordsList')));