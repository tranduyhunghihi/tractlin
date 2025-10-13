const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('body');
const before = $('.get-in-touch');
const after = $('.hover');
const contact = $('.default');

document.onscroll = function(){
    const scroll = (document.documentElement.scrollTop).toFixed(0) || window.scrollY;
    // console.log(scroll);
    if(scroll > 1100){
        body.style.backgroundColor = '#f9f9dd';
    }else{
        body.style.backgroundColor = '';

    }
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