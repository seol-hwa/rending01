const modalBtn=document.querySelectorAll('.open-modal');
const background=document.querySelectorAll('.popup__bg');
const closeBtn=document.querySelectorAll('.popup__close-btn');
const cancleBtn=document.querySelectorAll('.popup__cancle-btn');
const checkBtn=document.querySelectorAll('.popup__check-btn');

modalBtn.forEach((btn)=>{
    btn.addEventListener('click',function(){
        this.nextElementSibling.classList.add('active');
    })
})

//modal close
background.forEach(bg=>{
    bg.addEventListener('click',function(e){
        if(e.target.classList.contains('popup__bg')){
            modalBtn.forEach(all=>{
                all.nextElementSibling.classList.remove('active');
            })
        }
    })
})
closeBtn.forEach(close=>{
    closeModal(close);
})
cancleBtn.forEach(close=>{
    closeModal(close);
})
checkBtn.forEach(check=>{
    closeModal(check);
})

function closeModal(close){
    close.addEventListener('click',function(){
        modalBtn.forEach(all=>{
            all.nextElementSibling.classList.remove('active');
        })
    })
}