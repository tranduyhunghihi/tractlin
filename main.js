const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const logo = $('.logo');
const message = $('.message');
const box_message = $('.box-message');
const logo_img = $('.logo-img');
const archive = $('.archive');
const info_imgs = $$('.info-img');
const info_paragraphs = $$('.info-paragraph');
const info_titles = $$('.info-title');
const info_containers = $$('.info-container');
const geometries = $$('.geometry');
const body = $('body');
const before = $('.get-in-touch');
const after = $('.hover');
const contact = $('.default');
const layout = $('.layout');

console.log(layout)


info_imgs.forEach((info_img, index) =>{
  const info_container = info_containers[index];
  const info_paragraph = info_paragraphs[index];
  const info_title = info_titles[index];
  const geometry = geometries[index];

      let canLeave = false;
      info_container.addEventListener('click', () => {
        canLeave = true;  
            info_img.style.opacity = '0';
            info_img.style.pointerEvents = '0';
            info_paragraph.style.opacity = '1';
            info_title.style.display ='none'; 
            geometry.style.display = 'none';


      })
      info_container.addEventListener('mouseleave', () =>{
        if(!canLeave) return;
        info_img.style.opacity = '1';
        info_img.style.pointerEvents = 'auto';
        info_paragraph.style.opacity = '0';
        info_title.style.display ='block';
        geometry.style.display = 'block';

      })
      
})

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



setTimeout(() => {
  Object.assign(box_message.style, {
    display: 'block',
    animation:  "Sideup ease-in-out  0.6s forwards"
    
  })
},1000)


setTimeout(() => {
  layout.style.display = 'none';
},3000)
setTimeout(() => {
  Object.assign(logo.style, {
        display: 'block',
        animation:  "Logoapear ease-in-out  0.2s forwards"
  })
  Object.assign(box_message.style, {
      display: 'none'
      
},3000)

const logoHeight = logo.offsetHeight;
const font = parseFloat(getComputedStyle(logo).fontSize);

document.onscroll = function() {
  const scroll = ((document.documentElement.scrollTop).toFixed(0)) || window.scrollY; 
  console.log(scroll);
  const newScroll = scroll - 270;
  const newHeight = logoHeight - newScroll;
  
  
  // console.log((document.documentElement.scrollTop).toFixed(0))

  if(scroll < 100){
    Object.assign(logo_img.style,{
      fill:'#fbfadd'
    })
  }
  else if(scroll < 805){
    Object.assign(logo_img.style,{
      fill:'#433a33'
    })  
  }else{
    Object.assign(logo_img.style,{
      fill:'#81d2e6'
    })
  }
  if(scroll > 1100){
    body.style.backgroundColor = '#fbfadd';
  }else{
    body.style.backgroundColor = ''
  }
  if(scroll > 270) {
    logo.classList.add('fixed');
    logo_img.style.height = newHeight > 40 ? newHeight + 'px': 40 +'px';
    
  }else{
    logo.classList.remove('fixed'); 
  }
  if(scroll >=410){
    const start = {
      r: 251,
      g: 250,
      b: 221
    };
    const end = {
      r: 68,
      g: 62,
      b: 55
    }
    let progress = (scroll - 410) / (510 - 410);
    progress = Math.min(Math.max(progress,0),1);
    console.log(progress);

    const r = Math.round(start.r + (end.r - start.r) *progress);
    const g = Math.round(start.g + (end.g - start.g) *progress);
    const b = Math.round(start.b + (end.b - start.b) *progress);

    archive.style.color = `rgb(${r},${g},${b})`;
  }else{
    Object.assign(archive.style,{
      color: '#fbfadd'
    })
  }

}
},3900);




