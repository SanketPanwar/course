//count variable used in function submit else statement 
let count=1;

const form=document.getElementById('form');
const fullname=document.getElementById('fname');
const password=document.getElementById('pass');
const email=document.getElementById('mail');
form.addEventListener('click',submit);
function submit(e){
    if(e.target.id=='submitbtn'){
    e.preventDefault();
    if(fullname.value==''||password.value==''||email.value==''){
        const msg=document.getElementById('msg');
        msg.innerHTML='<b>Enter All Fields</b>'
        msg.style.color='red';
        setTimeout(()=>msg.remove(),3000);
    }
    else{
        const key=`user${count++}`;
        const user1={
            name : fullname.value,
            password : password.value,
            email : email.value
        }
        fullname.value='';
        password.value='';
        email.value='';
        const user1_serialized=JSON.stringify(user1);
        localStorage.setItem(key,user1_serialized);
        const user1_desearialized=JSON.parse(localStorage.getItem(key));
        //DISPLAY USERDETAIL IN FRONTEND USING DIV ELEMENT
        const userDetail=document.getElementById('users');
        userDetail.innerHTML=`<br> name : ${user1_desearialized.name} <br> email : ${user1_desearialized.email}`

    }
    }
}

