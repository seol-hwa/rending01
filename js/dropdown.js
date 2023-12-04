const dropBtn=document.querySelectorAll('.dropdown-btn');
const dropMenu=document.querySelectorAll('.dropdown-menu');
// const defaultDropBtn=document.querySelectorAll('.dropdown .dropdown-btn');
// const defaultDropMenu=document.querySelectorAll('.dropdown .dropdown-menu');
// const topDropBtn=document.querySelectorAll('.dropdown-top .dropdown-btn');
// const topDropMenu=document.querySelectorAll('.dropdown-top .dropdown-menu');

dropDownAct(dropBtn, dropMenu);

function dropDownAct(btn, item){
    btn.forEach((btn, index) => {
        btn.addEventListener('click', function () {
            if (item[index].classList.contains('active')) {
                item.forEach(all => {
                    all.classList.remove('active');
                })
            } else {
                item.forEach(all => {
                    all.classList.remove('active');
                })
                item[index].classList.add('active');
            }
        })
    })
}