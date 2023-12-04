//nav_1
const nav1_menu=document.querySelectorAll('.nav-style-1 .main-list__menu');
const nav1_btn=document.querySelector('.nav-style-1 .mo-nav-btn');
const nav1_moWrap= document.querySelector('.mo-nav-wrap-1');

nav1_menu.forEach(menu=>{
    menu.addEventListener('mouseenter',function(){
        this.children[0].style.background='#000';
        this.children[0].style.transform='translateX(0)';
    })
    menu.addEventListener('mouseleave',function(){
        this.children[0].style.transform='translateX(110%)';
        setTimeout(() => {
            this.children[0].style.background='transparent';
            this.children[0].style.transform='translateX(-110%)';
        }, 300);
    })
})

nav1_btn.addEventListener('click',function(){
    this.classList.toggle('active');
    nav1_moWrap.classList.toggle('active');
})