let welcome = ['Hello', 'Xin chao ', 'Hi'];

function randomWelcome() {
       let random = Math.floor(Math.random() * welcome.length)
        alert(welcome[random]);
}
randomWelcome();