// Grid Container Variable
const gridContainer = document.querySelector(".grid-container");

// Creating And Populating Grid Container with Square Div
function CreateSquareDiv(grid = 5) {

    for (let i = 1; i <= (grid * grid); i++) {
        // Create Square Div
        let squareDiv = document.createElement('div');
        
        squareDiv.classList.add("square"); // add a class of square to the square div element

        squareDiv.id = i; //Id to give each square a unique number
        
        squareDiv.style.width = `${100 / grid}%`;
        squareDiv.style.height = `${100 / grid}%`;
        squareDiv.style.backgroundColor = "beige";
        squareDiv.style.border = "1px solid black";
        
        gridContainer.appendChild(squareDiv);
    }
}

// Activate Populating Grid with squares
CreateSquareDiv();

// Change Color of Square div when a mouse hovers over it
function changeColorHover(color="black") {
    // Get all squares
    let squares = document.querySelectorAll(".square");
    
    // loop through
    squares.forEach(function(square) {
        // listen for a mouse enter
        square.addEventListener("mouseenter", () => {
            // change the background color
            square.style.backgroundColor = color;
        })

        // listen for a mouse leave
        square.addEventListener("mouseleave", () => {
            // change the background color
            square.style.backgroundColor = color;
        })
    })
}

changeColorHover();