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
}



createGrid();

let gridCell = document.querySelectorAll('.cell');
gridCell.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = "black";
    });
});

    


