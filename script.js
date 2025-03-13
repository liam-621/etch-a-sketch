const container = document.querySelector("#container");

for (i = 0; i < 32; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "border: solid; padding: 10px;");
    container.appendChild(div);
}
