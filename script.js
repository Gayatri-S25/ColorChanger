
const buttons=document.querySelectorAll('.button')
// console.log(buttons);
const body=document.querySelector('body');

//for each loop for looping on button
buttons.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='aqua'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='purple'){
            body.style.backgroundColor=e.target.id;
        }
    })
})