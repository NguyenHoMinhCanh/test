let buttons = document.querySelectorAll('button');

let random = Math.floor(Math.random() * buttons.length)
buttons.forEach((button) => {
    buttons[random].addEventListener('click', function () {
        buttons[random].style.opacity = '0';
        buttons[random].style.pointerEvents = 'none';

    })
    button.addEventListener('click', function () {
        if (button != buttons[random]) {
            alert('you chose wrong');
        }
    })

});