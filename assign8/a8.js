const ul=document.getElementById('items')
const submitbtn=document.querySelector('input[type="submit"]')

//ADD EDIT button
const editbtn=document.createElement('button');
editbtn.appendChild(document.createTextNode('Edit'))
editbtn.className='btn btn-sm float-right';
for(let i=0;i<ul.children.length;i++){
console.log(ul.children[i])
ul.children[i].appendChild(editbtn.cloneNode(true));
}



//DELETE Btn Functionality

submitbtn.addEventListener('click',addition)

function addition(e){
    e.preventDefault();
    const inputbox=document.getElementById('item').value;
    const newLi=document.createElement('li');
    const dltbtn=document.createElement('button');
    dltbtn.className='btn btn-danger btn-sm float-right delete';
    dltbtn.appendChild(document.createTextNode('X'));
    newLi.className='list-group-item';
    newLi.appendChild(dltbtn);
    newLi.appendChild(document.createTextNode(inputbox));
    //add edit button
    const editbtn=document.createElement('button');
   editbtn.appendChild(document.createTextNode('Edit'))
   editbtn.className='btn btn-sm float-right';
   newLi.appendChild(editbtn);
   
   ul.appendChild(newLi);
}

ul.addEventListener('click',remove)
function remove(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            ul.removeChild(e.target.parentElement)
        }
    }
}

