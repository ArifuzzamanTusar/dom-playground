// Getting the list parent
const listParent = document.getElementById("divisionList");
console.log(listParent.innerHTML);

//Createing a new list item with CreateElement JS

const createLi = document.createElement('li');
let newDivisionName = "Rajshahi";
createLi.innerText= newDivisionName;


// === APPENDING ==

listParent.appendChild(createLi);