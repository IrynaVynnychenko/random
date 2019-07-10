let button = document.querySelector('button');
let ship = document.querySelectorAll('.ship');
let shipSecond = document.querySelectorAll('.shipSecond');
let hP = document.querySelectorAll('.hP');

function quantityHP(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (let j = 0; j < hP.length; j++) {
    hP[j].innerHTML = quantityHP(5, 8);
    button.addEventListener('click', function() {
        setInterval(function() {
            if (hP[j].innerHTML > 0) {
                hP[j].innerHTML = hP[j].innerHTML - 1;
            } else if (hP[j].innerHTML <= 0) {
                hP[j].innerHTML = 0;
            }
        }, 1000 * quantityHP(1, 5));
    });
}