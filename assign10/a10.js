
const forms=document.getElementById('form');
const fullname=document.getElementById('fname');
const password=document.getElementById('pass');
const email=document.getElementById('mail');
forms.addEventListener('click',submit);

function submit(e){
    if(e.target.id==='submitbtn'){
        e.preventDefault();
        if(fullname.value==''||password.value==''||email.value=='')
        {
            const msg=document.getElementById('msg');
            msg.innerHTML='<b>Enter all fields</b>'
            msg.style.color='red';
            setTimeout(()=>msg.remove(),3000);
        }
        else
        {
            console.log(fullname.value,password.value,email.value)
            localStorage.setItem(fullname.value,email.value)
            fullname.value='';
            password.value='';
            email.value='';
            
        }
    }
}
