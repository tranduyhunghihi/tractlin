const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const header = $('.header');
const logo = $('.logo');
const imgs = $$('.book-img');
let index = 1;
const time = 300;

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
//hinh anh de len nhau vo han

function showImg(){
    imgs.forEach((img,i )=>{
        if(i === 0){
            img.classList.remove('display');
        }else{
            img.classList.add('display');

        }
    })

    index = 1;

    const showInterval = setInterval(() => {
        imgs[index].classList.remove('display');
        index++;

        if(index >= imgs.length){
            clearInterval(showInterval);

            setTimeout(() => {
                imgs.forEach((img, i) => {
                    if(i !== 0) {
                        img.classList.add('display');
                    }
                })
                showImg();

            },time)
        }

    },time)
}
showImg();




//demo vid
const container = $('.container');
setInterval(() => {
    container.classList.toggle('change_color');
},200);