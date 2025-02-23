const btn = document.getElementById('btn');
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const box = document.getElementById('box');
const image = document.getElementById('image');


function randomNumber() {
    let randomNum = Math.floor(Math.random() * 20);

    localStorage.setItem('quote', JSON.stringify(quotes[randomNum]));

    const getStorage = JSON.parse(localStorage.getItem('quote'));

    quote.textContent = `"${getStorage.quote}"`;
    author.textContent = `${getStorage.author}`;
}

function loadQuote() {
    const savedQuote = JSON.parse(localStorage.getItem('quote'));

    if (savedQuote) {
        quote.textContent = `"${savedQuote.quote}"`;
        author.textContent = `${savedQuote.author}`;
    } else {
        randomNumber();
    }
}

btn.addEventListener('click', () => {
    randomNumber();
});

window.addEventListener('DOMContentLoaded', loadQuote);
