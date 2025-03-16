const container = document.querySelector("#container");

for (i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.setAttribute("id", "grid");
    container.appendChild(div);
}

container.addEventListener("mouseover", (e) => {
    let target = e.target;
    target.style.background = "blue";

})

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let squares = prompt("Enter number of squares per side for new grid");
})

