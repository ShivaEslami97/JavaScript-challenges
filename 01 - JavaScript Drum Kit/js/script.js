'use strict';


const key = document.querySelectorAll('.key[data-key]');
const audio = document.querySelectorAll('.audio[data-key]');

const playAudio = (e) => {
    /// KeyboardEvent.keyCode been deprecated for some time. Use KeyboardEvent.code.
    const keyNum = (e.type == 'click') ? e.currentTarget.dataset.key : e.code;
    const keySelected = document.querySelector(`.key[data-key="${keyNum}"]`);
    if (keySelected) {
        const audioSelected = keySelected.querySelector('audio');
        keySelected.classList.add('playing');
        audioSelected.currentTime = 0;  //rewind to the start
        audioSelected.play();
    };
}

key.forEach(element => {
    /// click => play sound
    element.addEventListener('click', playAudio);
    /// after transition end => remove playing class
    element.addEventListener('transitionend', (e) => {
        console.log(e);
        element.classList.remove("playing");
    });
});

window.addEventListener('keydown', playAudio);

// audio.addEventListener("ended", function () {
//     alert("ended");
//     audio.currentTime = 0;
//     audio.play();
// });   