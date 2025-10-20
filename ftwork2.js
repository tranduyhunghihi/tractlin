const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('.header');
const logo = $('.logo');


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