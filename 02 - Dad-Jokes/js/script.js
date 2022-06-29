'use strict';
const joke = document.querySelector('.joke__text');
const jokeBtn = document.querySelector('.joke__btn-joke');
const twitterBtn = document.querySelector('.joke__btn-twitter');
const loading = document.querySelector('.lds-ellipsis');
const jokeBtns = document.querySelector('.joke__bottom');
const jokeSmiley = document.querySelectorAll('.joke__smiley');

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
            addContent(data.joke);
        })
        .catch(function (error) {
            // if some error occured
            addContent('Oops! Some error happened :(');
            // console log the error
            console.log(error);
        });
}
function addContent(text) {
    setTimeout(function () {
        joke.classList.add('in');
        joke.textContent = text;
    }, 500);
    loading.classList.add('hidden');
    jokeBtns.classList.remove('hidden');
}
function tweetQuote() {
    const tweet = joke.innerHTML;
    if (tweet.trim() !== '') {
        const tweetLink = `https://twitter.com/share?text=${encodeURIComponent(tweet)}`;
        // set the href
        twitterBtn.setAttribute('href', tweetLink);
    }
}
getJoke();
//// Get joke by click
jokeBtn.addEventListener('click', getJoke);
//// post joke on twitter
twitterBtn.addEventListener('click', tweetQuote);
//// Smiley selector
jokeSmiley.forEach(smiley => {
    smiley.addEventListener('click', () => {
        jokeSmiley.forEach(smileyItem => {
            smileyItem.classList.remove('on');
        });
        smiley.classList.toggle('on');
    });
})