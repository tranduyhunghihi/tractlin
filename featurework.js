const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body');
const before = $('.get-in-touch');
const after = $('.hover');
const contact = $('.default');
const text1 = $('.text1');
const text2 = $('.text2');
const slider = $('.slider');
const track1 = $('.track');
const track2 = track1.cloneNode(true);




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


slider.appendChild(track2);

let baseSpeed = 0.5;
let currentSpeed = baseSpeed;

let pos1 = 0;
// ⚡ trừ thêm khoảng cách giữa 2 track đúng bằng gap trong CSS
let pos2 = -(track1.scrollWidth + 40); 

function loop() {
  pos1 -= currentSpeed;
  pos2 -= currentSpeed;

  // Nếu track1 chạy hết → đưa ra sau track2
  if (pos1 <= -(track1.scrollWidth + 40)) {
    pos1 = pos2 + track2.scrollWidth + 40;
  }

  // Nếu track2 chạy hết → đưa ra sau track1
  if (pos2 <= -(track2.scrollWidth + 40)) {
    pos2 = pos1 + track1.scrollWidth + 40;
  }

  track1.style.transform = `translate3d(${pos1}px, 0, 0)`;
  track2.style.transform = `translate3d(${pos2}px, 0, 0)`;

  requestAnimationFrame(loop);
}

loop();

// Hover chậm lại
slider.addEventListener("mouseenter", () => {
  currentSpeed = baseSpeed * 0.25;
});
slider.addEventListener("mouseleave", () => {
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