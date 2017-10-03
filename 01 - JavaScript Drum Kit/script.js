let playSound = (e) => {
    const dataKey = e.keyCode || e.currentTarget['dataset'].key;
    const key = document.querySelector(`.key[data-key="${dataKey}"]`);
    const sound = document.querySelector(`audio[data-key="${dataKey}"]`);

    if (!sound) return;
    
    key.classList.add('playing');
    sound.currentTime = 0;
    sound.play();
};

let removeTransition = (e) => {
    const dataKey = e.keyCode || e.currentTarget['dataset'].key;
    const key = document.querySelector(`.key[data-key="${dataKey}"]`);

    if(!key) return;

    key.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
    key.addEventListener('click', playSound);
});

window.addEventListener('keydown', playSound);
