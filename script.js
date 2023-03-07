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

document.querySelector('.alarm').addEventListener('click', () => {
    console.log("mouse over")
    document.getElementById("beep").play();
});

document.querySelector('.alarm').addEventListener('mouseout', () => {
    document.getElementById("beep").pause();
});


document.querySelector('.snore').addEventListener('click', () => {
    document.getElementById("snore").play();
});


document.querySelector('.snore').addEventListener('mouseout', () => {
    document.getElementById("snore").pause();
});