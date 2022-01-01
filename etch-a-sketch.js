
// create grid with user specified dimensions and default black coloring
function createGrid() {

    let gridSize = prompt("Enter a number from 1 - 100 for the size of the grid");

    while (gridSize > 100) {
        gridSize = prompt("Please enter a number less than 101.");
    }
    while (gridSize < 0) {
        gridSize = prompt("Please enter a number greater than 0.");
    }

    noOfSquares = gridSize * gridSize;

    const container = document.querySelector('#container');

    for (let i = 1; i <= noOfSquares; i++) {
        const cell = document.createElement('div');
        container.appendChild(cell);
        cell.classList.add('cell');
        let size = 960 / parseInt(gridSize);
        cell.style.height = `${size}px`;
        cell.style.width = `${size}px`;
    }
    blackSketch();
}


// change cell background to black on mouseover
function blackSketch() {
    let gridCell = document.querySelectorAll('.cell');
    gridCell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "black";
        });
    });
}


// change cell background to random rgb value on mouseover
function rgbSketch() {

    let gridCell = document.querySelectorAll('.cell');
    gridCell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = randomRgbColor();
        });
    });
}


// eraser to change cell background color back to white
function eraserSketch() {

    let gridCell = document.querySelectorAll('.cell');
    gridCell.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "white";
        });
    });
}


// generate random rgb color
function randomRgbColor() {

    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);

    return "rgb(" + x + "," + y + "," + z + ")";
}


// remove cells from grid
function eraseGrid() {

    const grid = document.querySelectorAll('.cell');
    grid.forEach((cell) => {
        cell.remove();
    });
    createGrid();
}

createGrid();


