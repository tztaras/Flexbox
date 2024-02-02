console.log('greetings universe!');

let pugout = document.querySelector('.pugarea');
let pugNames = ['pug-1.jpg', 'pug-2.jpg', 'pug-3.jpg', 'pug-4.jpg'];


for (ver = 1; ver <= 4;ver++) {
    let img = document.createElement('img');
    
    img.src = './img/pugs/pug-' + ver + '.jpg';
    pugout.append(img);
}

