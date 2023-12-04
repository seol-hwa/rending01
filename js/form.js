const inputFloatRed=document.querySelectorAll('.form-style-float-red > input');
const labelFloatRed=document.querySelectorAll('.form-style-float-red > label');
const inputFloatPur=document.querySelectorAll('.form-style-float-purple > input');
const labelFloatPur=document.querySelectorAll('.form-style-float-purple > label');
const inputFloatDark=document.querySelectorAll('.form-style-float-dark > input');
const labelFloatDark=document.querySelectorAll('.form-style-float-dark > label');
const inputFloatDefault=document.querySelectorAll('.form-style-float > input');
const labelFloatDefault=document.querySelectorAll('.form-style-float > label');

inputFocusEvt(inputFloatRed,labelFloatRed);
inputFocusEvt(inputFloatPur,labelFloatPur);
inputFocusEvt(inputFloatDark,labelFloatDark);
inputFocusEvt(inputFloatDefault,labelFloatDefault);

function inputFocusEvt(evtTarget,target2){
    evtTarget.forEach((el,index)=>{
        el.addEventListener('focus',function(){
            target2[index].classList.add('focus');
            if(this.type=='text'){
                this.placeholder='이름';
            }else if(this.type=='password'){
                this.placeholder='비밀번호';
            }else if(this.type=='email'){
                this.placeholder='email@example.com'
            }
        })
        el.addEventListener('blur',function(){
            target2[index].classList.remove('focus');
            this.placeholder='';
        })
    })
}