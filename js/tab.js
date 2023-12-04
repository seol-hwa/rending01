const navBtn=document.querySelectorAll('.nav-tabs .nav-link');
const textBox=document.querySelectorAll('.nav-tabs .tab-box');
const navBtn2=document.querySelectorAll('.nav-fill .nav-link');
const textBox2=document.querySelectorAll('.nav-fill .tab-box');

navBtn.forEach((btn, index)=>{
    btn.addEventListener('click',function(){
        navBtn.forEach(all=>{
            all.classList.remove('active');
        })
        this.classList.add('active');
        textBox.forEach(all=>{
            all.classList.remove('active');
        })
        textBox[index].classList.add('active');
    })
})

navBtn2.forEach((btn, index)=>{
    btn.addEventListener('click',function(){
        navBtn2.forEach(all=>{
            all.classList.remove('active');
        })
        this.classList.add('active');
        textBox2.forEach(all=>{
            all.classList.remove('active');
        })
        textBox2[index].classList.add('active');
    })
})