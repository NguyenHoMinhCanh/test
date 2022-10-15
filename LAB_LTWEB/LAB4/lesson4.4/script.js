let textArea = document.querySelector('#text__area')
let button = document.querySelector('button');
let input = document.querySelector('input');

function count(){
    let textAreaInput = textArea.value.trim();
    let textInput = input.value.trim();
    let count = textAreaInput.split(textInput).length -1;
    document.body.innerHTML = `Số lần xuất hiện là: ${count}`;
}
button.addEventListener('click', count);
document.addEventListener('keydown', function(e){
    if(e.keyCode == 13){
        count();
    }
})