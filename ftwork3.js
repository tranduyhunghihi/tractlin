const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const header = $('.header');
const logo = $('.logo');
const before = $('.get-in-touch');
const after = $('.hover');
const contact = $('.default');
const slider = $('.slider');
const track1 = $('.track');
const track2 = track1.cloneNode(true);

document.onscroll = function() {
    const scroll = ((document.documentElement.scrollTop).toFixed(0)) || window.scrollY; 
    console.log(scroll);
    if(scroll >= 35) {
        logo.style.opacity = '0.2';
    }
    else{
        logo.style.opacity = '';
    }

}

//khi nhan vao header thi cuon ve dau trang

header.onclick = function(){
    window.scrollTo({
        top: 200,
        behavior: "smooth"
    })
}
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



//cuộn bìa trang vô hạn

slider.appendChild(track2);

let baseSpeed = 0.5;
let currentSpeed = baseSpeed;

let pos1 = 0;
let pos2 = -(track1.scrollWidth + 10);

function loop(){
    pos1 += currentSpeed;
    pos2 += currentSpeed;

    if(pos1 <= -(track1.scrollWidth + 10)){
        pos1 = pos2 + track2.scrollWidth + 10;
    }
    if(pos2 <= -(track2.scrollWidth + 10)){
        pos2 = pos1 + track1.scrollWidth + 10;
    }

    track1.style.transform = `translate3d(${pos1}px, 0, 0)`;
    track2.style.transform = `translate3d(${pos2}px, 0, 0)`;

    requestAnimationFrame(loop);

}

loop();