let a = document.querySelector('.input__a')
let b = document.querySelector('.input__b')
let c = document.querySelector('.input__c')
let submit = document.querySelector('.submit__btn');
submit.addEventListener('click', function () {
    computeEquation(a.value, b.value, c.value);
});


document.addEventListener('keydown', function (event) {

        if (event.keyCode == 13) {
            computeEquation(a.value, b.value, c.value);
        }
    
})
function computeEquation(a, b, c) {
    var result = 0;
    if (a == 0) {
        result = -c / b;
        document.body.innerHTML = (`Phuong trinh co nghiem la x ${result}`);
    }
    if (a != 0) {
        var delta = b * b - 4 * a * c;

        if (delta < 0) {
            document.body.innerHTML = ('Phuong trinh vo nghiem')
        }
        if (delta === 0) {
            result = -b / (2 * a);
            document.body.innerHTML = (`Phuong trinh co nghiem kep x1 = x2:  ${result}`);
        }
        if (delta > 0) {
            var result1 = (-b + Math.sqrt(delta)) / (2 * a);
            var result2 = (-b - Math.sqrt(delta)) / (2 * a);
            document.body.innerHTML = (`Phuong trinh co 2 nghiem phan biet: x1 = ${result1} va x2 = ${result2}`)
        }
    }
}