const liAction=document.querySelectorAll('.list-item-action');

liAction.forEach(li=>{
    li.addEventListener('click',function(e){
        e.preventDefault();
        if (!li.classList.contains('disabled')){
            liAction.forEach(all=>{
                all.classList.remove('active');
            })
            li.classList.add('active');
        }
    })
})