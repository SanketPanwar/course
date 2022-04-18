const ul=document.querySelector('#items');
// console.log(ul.parentNode);
// console.log(ul.parentElement);
// ul.parentNode.style.backgroundColor='#f4f4f4';

// console.log(ul.childNodes);
// console.log(ul.children);
// ul.children[1].innerText='Hello 2';

// console.log(ul.firstChild);
// console.log(ul.firstElementChild);
// ul.firstElementChild.style.backgroundColor='#aaaaaa';

// console.log(ul.nextSibling);
// console.log(ul.nextElementSibling);
// ul.previousElementSibling.style.fontWeight='bold';
const newdiv=document.createElement('div')
newdiv.className='hello';
newdiv.id='hello1';
newdiv.setAttribute('title','how');
const text=document.createTextNode('HEllo');
newdiv.appendChild(text);
const headerTitle=document.getElementById('header-title');
const container=document.querySelector('header .container')
container.insertBefore(newdiv,headerTitle);

const newLi=document.createElement('li');
newLi.appendChild(document.createTextNode('HEllo'));
const item=document.getElementById('items');
item.insertBefore(newLi,item.children[0])






