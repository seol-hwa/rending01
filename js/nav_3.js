//nav_3
const nav3_btn=document.querySelector('.header3__pc-wrap .mo-nav-btn');
const nav3_moWrap=document.querySelector('.mo-nav-wrap-3');
const nav3_subList=document.querySelectorAll('.mo-nav-wrap-3 .sub-list');

nav3_btn.addEventListener('click',function(){
    if(!this.classList.contains('active')){
        document.querySelector('body').style.overflowY='hidden';
        this.classList.add('active');
        nav3_moWrap.classList.add('active');
    }else{
        document.querySelector('body').style.overflowY='initial';
        this.classList.remove('active');
        nav3_moWrap.classList.remove('active');
    }
})

nav3_subList.forEach(sub=>{
    sub.previousElementSibling.addEventListener('click',function(e){
        e.preventDefault();
        if (!this.classList.contains('active')){
            nav3_subList.forEach(all=>{
                all.style.height=0;
                all.previousElementSibling.classList.remove('active');
            })
            sub.style.height=(sub.children[0].offsetHeight * sub.children.length)+'px';
            this.classList.add('active');
        }else{
            sub.style.height=0;
            this.classList.remove('active');
        }
        
    })
})