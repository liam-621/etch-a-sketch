const container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "grid");
    div.style.width = "55px";
    container.appendChild(div);
}

container.addEventListener("mouseover", (e) => {
    let target = e.target;
    if (target.id === "grid") {
        target.style.background = "blue";
    }
})

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let squares = prompt("Enter number of squares per side for new grid");
    if (squares > 100) {
        alert("Please enter a value less than 100.");
    } else {
        container.innerHTML = ""; // Clear the grid
        for (i = 0; i < squares * squares; i++) {
            const div = document.createElement("div");
            div.setAttribute("id", "grid");
            div.style.width = `${880 / squares}px`;
            container.appendChild(div);
        }
    } 
})


