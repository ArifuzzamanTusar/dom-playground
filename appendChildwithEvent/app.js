const button = document.getElementById('addNewDiv');
const listParent = document.getElementById("divisionList");



function addNewDivision() {
    let divName = document.getElementById("divInput");
    const li = document.createElement("li");
    li.innerText=divName.value;
    listParent.appendChild(li);
    divName.value = "";
  
}

button.onclick = addNewDivision;
