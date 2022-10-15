let img = document.querySelector('.img__container img');

function rotate() {
    img.style.transform += "rotate(20deg)";

}
setInterval(rotate, 2000);