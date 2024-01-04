// --------- CONTROLS -------------

let colorPicker = document.getElementById('colorPicker'),
    colorMode = document.getElementById('colorMode'),
    RandomMode = document.getElementById('randomColor'),
    eraser = document.getElementById('eraser'),
    reset = document.getElementById('reset'),
    showGridValue = document.getElementById('showGridValue'),
    range = document.getElementById('gridValue');


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

//change color
changeColorHover();

//Get ColorPicker color value
function updatecolor() {
    // Listen for a change in color
    colorPicker.addEventListener('input', function(event) {
        // Assign color Picker value to color
        let color = event.target.value;
        // update color in changeColorHover Functionality
        changeColorHover(color);
    })
}

//update color
updatecolor();

//Change button to focus mode when click
function changeToFocus() {
    let btns = document.getElementsByTagName('button');
    console.log(btns);
    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function() {
            // Remove 'focus' class from all buttons
            for (let j = 0; j < btns.length; j++) {
                btns[j].classList.remove('focus');
            }

            // Add 'focus' class to the clicked button
            this.classList.add('focus');
        });
    }
}

changeToFocus();