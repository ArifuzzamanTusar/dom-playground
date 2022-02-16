// TAG Name
const heading3 = document.getElementsByTagName("h3");

// Getting all elements Text Content in a loop
for(let someting of heading3){
    console.log(someting.innerText);
}



// ID
const article1 = document.getElementById("article1");
article1.style.background="grey";

// Class
const articleHeading = document.getElementsByClassName("articleheading");

for(let heading of articleHeading){
    console.log(heading.innerText+"-------");
    heading.style.color="red";
}

//QuerySelector

const paragraph1 = document.querySelectorAll("#article1 p");
console.log(paragraph1.length);
//traditional array printing
for (let index = 0; index < paragraph1.length; index++) {
    const element = paragraph1[index];
    console.log(element.innerText);
    // lets add some style 
    element.style.fontStyle = 'italic';
    element.style.color ='white';
    element.style.padding ="15px";

    
}
//Setting Attributes
const helpTooltipText = document.getElementById("helpText");
helpTooltipText.setAttribute('title','This is a helpText')

//PARENT NODE
// parentNode Finding of the helpText   
console.log("-------------"+helpTooltipText.parentNode.parentNode.innerHTML);

// ChildNODE 

const article2 = document.getElementById("article2");
console.log(article2.innerHTML);
const childNode = article2.childNodes;
console.log("length = "+childNode.length);

for(let theElement of childNode){
    console.log(theElement.innerHTML);
    
    
}

