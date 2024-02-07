console.log('greetings universe!');

// let pugout = document.querySelector('.pugarea');
// let pugNames = ['pug-1.jpg', 'pug-2.jpg', 'pug-3.jpg', 'pug-4.jpg'];


// for (ver = 1; ver <= 4;ver++) {
//     let img = document.createElement('img');
    
//     img.src = './img/pugs/pug-' + ver + '.jpg';
//     pugout.append(img);
// }

let an1 = document.getElementById('main-pug');
an1.addEventListener('click', () => {
    // alert('wuf!');
    let a = document.querySelector('.pugarea');
    a.classList.toggle('animate1');

   
    
    // a.classList.toggle('animate1-back');
    
    
});

let an2 = document.querySelector('.pug1').addEventListener('click', () => {
    let a = document.querySelector('.pug1');
    a.classList.toggle('animate1-1');
});

let an3 = document.querySelector('.pug2').addEventListener('click', () => {
    let a = document.querySelector('.pug2').classList.toggle('animate3');
    // a.classList.toggle('animate3');
});

let an4 = document.querySelector('.pug3').addEventListener('click', () => {
    let a = document.querySelector('.pug3').classList.toggle('animate4');
});

// let an5 = document.querySelector('.pug4').addEventListener('click', () => {
//     let a = document.querySelector('.pug4').classList.toggle('animate5');
// })

let an6 = document.querySelector('.pug4').addEventListener('dblclick', () => {
    let a = document.querySelector('.pug4');
    a.style.transition = '2s';
    a.style.transform = (a.style.transform === 'rotate(180deg)') ? 'rotate(0deg)' : 'rotate(180deg)';
    a.style.filter = (a.style.filter === 'invert(100%)') ? 'invert(0%)' : 'invert(100%)';
})
