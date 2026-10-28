const btn = document.querySelector('#addWord');
const targetLanguage = document.querySelector('#target-language');
const translation = document.querySelector('#translation');
const practice = document.querySelector('#practice');
let words = [];

if (localStorage.getItem('wordslist')) {
    words = JSON.parse(localStorage.getItem('wordsList'));
}

btn.addEventListener("click", () => {
    words.push({
        name: targetLanguage.value,
        meaning: translation.value
    });

    localStorage.setItem('wordsList', JSON.stringify(words));
    console.log(JSON.parse(localStorage.getItem('wordsList')));
})

practice.addEventListener("click", () => {
    window.location.href = "flashcards.html";
});