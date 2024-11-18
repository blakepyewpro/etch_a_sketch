const main = document.querySelector("main")

addGrid(16);

function addGrid(size) {
  for (let rows = 0; rows < size; rows++) {
    addBlockRow(size);
  }
}

function addBlockRow(size) {
  const sizeValue = 75 / size;

  const newRow = document.createElement("div");
  newRow.setAttribute("class", "row");

  for (let squares = 0; squares < size; squares++) {
    const newSquare = document.createElement("div");
    newSquare.setAttribute("class", "square");
    newSquare.style.minHeight = `${sizeValue}vh`
    newSquare.style.minWidth = `${sizeValue}vh`
    newRow.appendChild(newSquare);
  }

  main.appendChild(newRow);
}

function changeColor(element) {
  
}