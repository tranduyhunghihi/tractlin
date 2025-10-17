const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body');
const before = $('.get-in-touch');
const after = $('.hover');
const contact = $('.default');
const text1 = $('.text1');
const text2 = $('.text2');
const slider = $('.slider');
const track = $('.track');



setTimeout(() => {
    text1.style.animation = 'SlideUp ease 0.3s forwards';
    text2.style.animation = 'SlideUp ease 0.4s forwards';
},1000)


document.onscroll = function(){
    const scroll = (document.documentElement.scrollTop).toFixed(0) || window.scrollY;
    console.log(scroll);
    if(scroll > 360){
        body.style.backgroundColor = '#f9f9dd';
        slider.classList.add('change-color')
    }else{
        body.style.backgroundColor = '';
        slider.classList.remove('change-color');

    }
}
//tao cuon hinh anh vo han
let baseSpeed = 0.5;
let currentSpeed = baseSpeed;
let position = 0;
track.innerHTML += track.innerHTML;


function loop() {
    position += currentSpeed;
    if(position >= track.scrollWidth){
        position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(loop);
} 

loop();

slider.addEventListener('mouseenter', () => {
    currentSpeed = baseSpeed*0.25;
});
slider.addEventListener('mouseleave', () => {
    currentSpeed = baseSpeed;
});


before.onmouseenter = function(){
    console.log('hihi');
    contact.style.opacity = '0';
    contact.style.pointerEvents = '0';
    after.style.display = 'block';
    
  }
  after.onmouseleave = function(){
    console.log('haha');
    after.style.display = 'none';
    contact.style.opacity = '1';
    contact.style.pointerEvents = 'auto';
}