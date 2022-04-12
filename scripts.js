const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 16; j++) {
        const square = document.createElement('div');
        square.className = "square";
        square.style.height = "50px";
        square.style.width = "50px";
        square.style.backgroundColor = "white";
        square.style.borderColor = "black";
        square.style.borderStyle = "solid";
        row.appendChild(square);
    }
    container.appendChild(row);
}

