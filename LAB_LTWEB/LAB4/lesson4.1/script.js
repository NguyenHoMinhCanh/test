let red = document.querySelector('.red__btn');
let orange = document.querySelector('.orange__btn');
let yellow =document.querySelector('.yellow__btn');
let green =document.querySelector('.green__btn');
let pink =document.querySelector('.pink__btn');
let brown =document.querySelector('.brown__btn');
let purple =document.querySelector('.purple__btn');
let black = document.querySelector('.black__btn')
let reset = document.querySelector('.reset__btn')
function change__background(color){
 document.body.style.backgroundColor = color;
}
yellow.addEventListener('click',function(){
    change__background('yellow');
});
orange.addEventListener('click',function(){
    change__background('orange');
});
red.addEventListener('click',function(){
    change__background('red');
});
green.addEventListener('click',function(){
    change__background('green');
});
pink.addEventListener('click',function(){
    change__background('pink');
});
brown.addEventListener('click',function(){
    change__background('brown');
});
purple.addEventListener('click',function(){
    change__background('purple');
});
black.addEventListener('click',function(){
    change__background('black');
});
reset.addEventListener('click',function(){
    change__background('#fff');
});