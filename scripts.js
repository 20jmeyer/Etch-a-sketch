
let mousedown = false;

function colorCell(e) {
    e.target.style.backgroundColor="black";
    mousedown=true;
}

function makeGrid(size) {
    const container = document.querySelector("#container");
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows=`repeat(${size},1fr)`;
    
    for (let i = 0; i < (size*size); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseover",colorCell)
        container.appendChild(cell).className="grid-item";
    }

}

makeGrid(60);
