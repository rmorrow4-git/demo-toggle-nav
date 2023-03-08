console.log('JavaScript Connected!');

// select the element the user is going to click on
const btn = document.querySelector('.toggle-btn');

// add evt listener
btn.addEventListener('click', function (){
    document.querySelector('nav').classList.toggle('show-nav');
});

