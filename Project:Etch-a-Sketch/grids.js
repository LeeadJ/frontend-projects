function generateSquare(container, numberOfSqaures) {
    const grid = document.createElement('div');
    container.appendChild(grid);

    let gridPercentage = 100 / numberOfSqaures;
    grid.style.cssText = `flex: 0 0 calc(${gridPercentage}% - 3px); height: calc(${gridPercentage}% - 3px); background-color: lightblue`

    grid.addEventListener('mouseover', () => grid.style.backgroundColor = 'blue');

}

function clearAndCreateUserGrid(numberOfSqaures) {
    const container = document.querySelector('#grid-container');
    container.innerHTML = '';
    const gridSize = numberOfSqaures * numberOfSqaures;
    for (let i = 0; i < gridSize; i++) {
        generateSquare(container, numberOfSqaures);
    }
}

function createGrid() {
    const container = document.querySelector('#grid-container');
    const defaultGridSize = 16;

    for (let i = 0; i < 256; i++) {
        generateSquare(container, defaultGridSize);
    }

    const btn = document.querySelector('#btn');
    // prompt event to change grid size
    btn.addEventListener('click', () => {
        let userInput;
        do {
            userInput = prompt('Please enter the number (max 100) of squares per side.');
        } 
        // test to make sure input is valid or user clicks cancel
        while ((userInput > 100 || !Number.isInteger(parseInt(userInput)) && userInput !== null)) {
            userInput = prompt(`Invalid input: "${userInput}"! \n Please enter the number (max 100) of squares per side.`)
        }
        if (userInput != null) {
            clearAndCreateUserGrid(userInput);
        }
    })
}

createGrid();