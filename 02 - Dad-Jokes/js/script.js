'use strict';
const joke = document.querySelector('.joke__text');
const jokeBtn = document.querySelector('.joke__btn-joke');
const twitterBtn = document.querySelector('.joke__btn-twitter');
const loading = document.querySelector('.lds-ellipsis');
const jokeBtns = document.querySelector('.joke__bottom');

function getJoke() {
    const options = {
        headers: {
            Accept: 'application/json',
        }
    }
    joke.textContent = '';
    joke.classList.remove('in');
    loading.classList.remove('hidden');
    jokeBtns.classList.add('hidden');
    //// fetch
    fetch('https://icanhazdadjoke.com/', options)
        .then(response => response.json())
        .then(data => {
            setTimeout(function () {
                joke.classList.add('in');
                joke.textContent = data.joke;
            }, 500);
            loading.classList.add('hidden');
            jokeBtns.classList.remove('hidden');
        });
}
function tweetQuote() {
    const tweet = joke.innerHTML;
    if (tweet.trim() !== '')
        window.open(`https://twitter.com/share?text=${tweet}`);
}
getJoke();
jokeBtn.addEventListener('click', getJoke);
twitterBtn.addEventListener('click', tweetQuote);