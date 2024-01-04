// Grid Container Variable
const gridContainer = document.querySelector(".grid-container");

// Creating And Populating Grid Container with Square Div

function CreateSquareDiv(grid = 5) {

    for (let i = 0; i <= (grid * grid); i++) {
        // Create Square Div
        let squareDiv = document.createElement('div');
        
        squareDiv.classList.add("square"); // add a class of square to the square div element
        
        squareDiv.style.width = "calc(100% / 16)";
        squareDiv.style.height = "calc(100% / 16)";
        squareDiv.style.backgroundColor = "red";
        
        gridContainer.appendChild(squareDiv);
        console.log(squareDiv);
    }
}

CreateSquareDiv();