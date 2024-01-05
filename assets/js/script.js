// --------- CONTROLS -------------

let colorPicker = document.getElementById("colorPicker"),
  colorMode = document.getElementById("colorMode"),
  RandomMode = document.getElementById("randomColor"),
  eraser = document.getElementById("eraser"),
  reset = document.getElementById("reset"),
  showGridValue = document.getElementById("showGridValue"),
  range = document.getElementById("gridValue");

//get all buttons into a HTML collection
let btns = document.getElementsByTagName("button");

// Selected color;
let color = "";

//buttonState
let buttonState = "";

//Range value
let rangeValue = 0;

// Grid Container Variable
const gridContainer = document.querySelector(".grid-container");

// Creating And Populating Grid Container with Square Div
function CreateSquareDiv(grid = 5) {
  for (let i = 1; i <= grid * grid; i++) {
    // Create Square Div
    let squareDiv = document.createElement("div");

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
function changeColorHover(color = "black") {
  // Get all squares
  let squares = document.querySelectorAll(".square");

  // loop through
  squares.forEach(function (square) {
    // listen for a mouse enter
    square.addEventListener("mouseenter", () => {
      // change the background color
      square.style.backgroundColor = color;
    });

    // listen for a mouse leave
    square.addEventListener("mouseleave", () => {
      // change the background color
      square.style.backgroundColor = color;
    });
  });
}

//change color
changeColorHover();

//Get ColorPicker color value
function updatecolor(buttonState) {

    // Listen for a change in color
    colorPicker.addEventListener("input", function (event) {
        // Assign color Picker value to color
        color = event.target.value;
        // update color in changeColorHover Functionality
        changeColorHover(color);
    });

    if (buttonState === "eraser") {
        // Assign color to original color
        color = "beige";

        //update color in chageColorHover Functionality
        changeColorHover(color);
    }

    else if (buttonState === "reset") {
      // Get all Square Divs
      let allSquares = document.querySelectorAll('.square');
      
      // change each square div backgroud color
      allSquares.forEach(function(square) {
        square.style.backgroundColor = 'beige';
      })

      //change color
      changeColorHover(color);
    }
}

//update color
updatecolor();

//Change button to focus mode when click
function changeToFocus() {
  // loop through the HTML collection
  for (let i = 0; i < btns.length; i++) {
    //listen to each button for a click
    btns[i].addEventListener("click", function () {
      // Remove 'focus' class from all buttons
      for (let j = 0; j < btns.length; j++) {
        btns[j].classList.remove("focus");
      }

      // Add 'focus' class to the clicked button
      this.classList.add("focus");

      // Update Button Status
      buttonState = this.id;

      updatecolor(buttonState);
    });
  }
}

changeToFocus();

// function to get grid value
function getGridValue() {
  // listen for a click on the range input
  range.addEventListener('click', () => {
    rangeValue = range.value;
    
    // Update Grid Text Content
    showGridValue.textContent = `${rangeValue} X ${rangeValue}`;

    // Update Grid in grid-container
    const squareDivsToRemove = gridContainer.querySelectorAll('.square'); // Select all square divs

    squareDivsToRemove.forEach(function(squareDiv) {
      squareDiv.parentNode.removeChild(squareDiv); // Remove each square div from its parent
    });

    // Call the Create new square div
    CreateSquareDiv(rangeValue);

    //change color
    changeColorHover();
  })
}

// call the Get Grid Value
getGridValue();