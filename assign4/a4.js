//getElementsByClassName
const items = document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor = "blue";

for (let i = 0; i < items.length; i++) items[i].style.fontWeight = "bold";
