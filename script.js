const container = document.querySelector("#container");

function createGrid (squares) {
    for (i = 0; i < squares * squares; i++) {
        const div = document.createElement("div");
        div.setAttribute("id", "grid");
        div.style.width = `${880 / squares}px`;
        container.appendChild(div);
    }    
}

createGrid(16); // Initalize default grid as 16x16

function colorGen() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

container.addEventListener("mouseover", (e) => { // Event listener on the whole container, rather than creating one for each div
    let target = e.target;
    if (target.id === "grid") { // Ensuring that the color only changes on grid elements
        target.style.background = colorGen();
    }
})

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let squares = prompt("Enter number of squares per side for new grid");
    if (squares > 100) {
        alert("Please enter a value less than 100.");
    } else {
        container.innerHTML = ""; // Clear the grid
        createGrid(squares);
    } 
})



