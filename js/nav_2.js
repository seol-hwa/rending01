//nav_2
const nav2_open=document.querySelector('.nav-style-2 .mo-nav-open');
const nav2_close=document.querySelector('.mo-nav-wrap-2 .mo-nav-close');
const nav2_moWrap=document.querySelector('.mo-nav-wrap-2');
const nav2_subList=document.querySelectorAll('.mo-nav-wrap-2 .sub-list');

nav2_open.addEventListener('click',function(){
    nav2_moWrap.classList.add('active');
})
nav2_close.addEventListener('click',function(){
    nav2_moWrap.classList.remove('active');
})

nav2_subList.forEach(sub=>{
    sub.previousElementSibling.addEventListener('click',function(e){
        e.preventDefault();
        if (!this.classList.contains('active')){
            sub.style.height=(sub.children[0].offsetHeight * sub.children.length)+'px';
            this.classList.add('active');
        }else{
            sub.style.height=0;
            this.classList.remove('active');
        }
        
    })
})