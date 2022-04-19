const ul=document.getElementById('items')
const submitbtn=document.querySelector('#submitbtn')

//ADD description Box
const itemform=document.getElementById('addForm');
const desc=document.createElement('input');
desc.type="text";
desc.id='descript';
desc.className='form-control mr-2';
desc.placeholder='Add Description...';
itemform.insertBefore(desc,submitbtn);

submitbtn.addEventListener('click',addition)

function addition(e){
    e.preventDefault();
    const inputbox=document.getElementById('item').value;
    const dsc=document.getElementById('descript').value;
    const newLi=document.createElement('li');
    const dltbtn=document.createElement('button');
    dltbtn.className='btn btn-danger btn-sm float-right delete';
    dltbtn.appendChild(document.createTextNode('X'));
    newLi.className='list-group-item';
    const nameOfItem=document.createTextNode(inputbox).textContent;
    const itemDescription=(document.createTextNode(dsc)).textContent;
    const textadd=document.createTextNode(`${nameOfItem} : ${itemDescription}`)
    newLi.appendChild(textadd);
    newLi.appendChild(dltbtn);
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


//Add Filter
const filterBar=document.getElementById('filter');
filterBar.addEventListener('keyup',search)
function search(e){
    const text=filterBar.value.toLowerCase();
    const lis=document.getElementsByClassName('list-group-item')
    Array.from(lis).forEach(function(li){
        if(li.firstChild.textContent.toLowerCase().indexOf(text) != -1)
        li.style.display='block';
        else
        li.style.display='none';
        
    })
}