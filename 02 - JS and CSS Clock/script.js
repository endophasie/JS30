const setTime = () => {
    const time = new Date();
    const seconds = time.getSeconds();
    const mins = time.getMinutes();
    const hours = time.getHours();
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');
    const hands = Array.from(document.querySelectorAll('.hand'));

    hands.forEach(hand => {
        secondHand.style.transform = 'rotate(' + (seconds / 60 * 360) + 'deg)';
        minHand.style.transform = 'rotate(' + ((mins / 60 * 360) + (seconds / 60 * 6)) + 'deg)';
        hourHand.style.transform = 'rotate(' + ((hours / 12 * 360) + (mins / 60 * 30)) + 'deg)';
    });
}

setInterval(setTime, 1000);
setTime();