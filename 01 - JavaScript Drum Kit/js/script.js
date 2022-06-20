'use strict';


const key = document.querySelectorAll('.key[data-key]');
const audio = document.querySelectorAll('.audio[data-key]');

const playAudio = (e) => {
    const keyNum = (e.type == 'click') ? e.currentTarget.dataset.key : e.code;
    const audioSelected = document.querySelector(`.audio[data-key="${keyNum}"]`);
    const keySelected = document.querySelector(`.key[data-key="${keyNum}"]`);
    keySelected.classList.add('playing');
    if (audioSelected) {
        audioSelected.play();
    }
    audioSelected.currentTime = 0;
}

key.forEach(element => {
    element.addEventListener('click', playAudio);
});

window.addEventListener('keydown', playAudio);

// audio.addEventListener("ended", function () {
//     alert("ended");
//     audio.currentTime = 0;
//     audio.play();
// });   