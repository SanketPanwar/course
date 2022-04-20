
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
        const key=`user${email.value}`;
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
        //DISPLAY USERDETAIL IN FRONTEND USING ul ELEMENT
        const userDetail=document.getElementById('users');
        const newelement=document.createElement('li');
        newelement.innerHTML=`${user1_desearialized.name} : ${user1_desearialized.email}`
        userDetail.appendChild(newelement)


    }
    }
}

Object.keys(localStorage).forEach((key) => {
    stringifiedDetailsOfPeople = localStorage.getItem(key);
    detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
        const userDetail=document.getElementById('users');
        const newelement=document.createElement('li');
        newelement.innerHTML=`${detailsOfPeople.name} : ${detailsOfPeople.email}`
        userDetail.appendChild(newelement)
     });
