const grid = document.querySelector(".grid");

function createGrid (n) {
    for (let i=0; i<n*n; i++) {
        const div = document.createElement("div");
        div.style.boxSizing = "border-box";
        div.style.width = `${960/n}px`;
        div.style.height = `${960/n}px`;
        div.style.opacity = "0";
        div.style.backgroundColor = `rgb(${getRandomNumber(256)},${getRandomNumber(256)},${getRandomNumber(256)})`;
        grid.appendChild(div);  
    }
}

function deleteGrid() {
    const gridElements = document.querySelectorAll(".grid div");
    for (let element of gridElements) {
        grid.removeChild(element);
    }
}

createGrid(16);

function getRandomNumber (n) {
    return Math.floor(Math.random() * n);
}

grid.addEventListener("mouseover", 
    function (event) {
        const target = event.target;
        if (target.className === "grid") {return;}
        let opacity = +target.style.opacity;
        opacity += 0.1;
        target.style.opacity = `${opacity}`;
    }
)

const button = document.querySelector("button");

button.addEventListener("click",
    function () {
        let input = prompt("Enter the grid size (limit: 100):");
        if (input <= 100) {
            deleteGrid();
            createGrid(input);
        }
    }
)

