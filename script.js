// window.addEventListener('load', function() {
//     deSVG('.poster3', true);
// });


function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// scene1
// deSVG('.scene1', true);
// document.getElementById('scene1').getElementsByClassName('path')[0].style.backgroundColor = 'red';

sounds_alarm = document.getElementById('sounds_x5F_1');
sounds_alarm.style.display = 'none';

document.getElementById('button_x5F_1').addEventListener('click', () => {
    console.log("mouse over")
    beep = document.getElementById("beep");
    beep.play();
    if (beep.duration > 0 && !beep.paused) {
        sounds_alarm.style.display = 'block';
        sounds_alarm.classList.add('bounce2');
    }

});


document.getElementById("beep").addEventListener("ended", () => {
    sounds_alarm.style.display = 'none';
    sounds_alarm.classList.remove('bounce2');
});


// scene2
// hide awake scene
awake = document.getElementById('awake_x5F_2');
awake.style.display = 'none';
// make snoring happen
document.getElementById('bubbles_x5F_2').addEventListener('click', () => {
    snore = document.getElementById("snore");
    snore.play();
});


document.getElementById('button_x5F_2').addEventListener('click', () => {
    // snoring stops, awake scene appears, bubles disappear
    snore = document.getElementById("snore");
    snore.pause();
    awake.style.display = 'block';

    document.getElementById('bubbles_x5F_2').style.display = 'none';
    document.getElementById('button_x5F_2').style.display = 'none';
});




// sounds_snore = document.getElementById('sounds_x5F_2');
// sounds_alarm.style.display = 'none';

// document.getElementById('button_x5F_2').addEventListener('click', () => {
//     snore = document.getElementById("snore");
//     snore.play();
//     if (beep.duration > 0 && !beep.paused) {
//         sounds_alarm.style.display = 'block';
//         sounds_alarm.classList.add('bounce2');
//     }

// });


// document.getElementById("beep").addEventListener("ended", () => {
//     sounds_alarm.style.display = 'none';
//     sounds_alarm.classList.remove('bounce2');
// });




document.querySelector('.alarm').addEventListener('mouseout', () => {
    document.getElementById("beep").pause();
});


document.querySelector('.snore').addEventListener('click', () => {
    document.getElementById("snore").play();
});


document.querySelector('.snore').addEventListener('mouseout', () => {
    document.getElementById("snore").pause();
});