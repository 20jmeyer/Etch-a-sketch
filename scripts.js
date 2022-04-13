
let mousedown = false;

function colorCell(e) {
    e.target.style.backgroundColor="black";
    mousedown=true;
}

function changeSize(e){
    console.log(e.target.value);
    currentSize=e.target.value;
    makeGrid(e.target.value);
}


function makeGrid(size) {
    const container = document.querySelector("#container");
    container.innerHTML='';
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows=`repeat(${size},1fr)`;
    
    for (let i = 0; i < (size*size); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover",colorCell)
        container.appendChild(cell).className="grid-item";
    }

}
let currentSize=30;

function clearGrid(){
    const container = document.querySelector("#container");
    container.innerHTML='';
    makeGrid(currentSize);
}

function init(){
    const size=document.querySelector("#size");
    size.addEventListener("input",changeSize);
    const clear=document.querySelector(".clear");
    clear.addEventListener("click",clearGrid);
    makeGrid(currentSize);
}


window.onload=init();

