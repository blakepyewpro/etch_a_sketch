const main = document.querySelector("main");
const sizeInput = document.querySelector("#size");
const resetBtn = document.querySelector("#reset-button");

let size = getSize();
addGrid(size);
resetBtn.addEventListener("click", reset);

function getSize() {
  return Number(sizeInput.value);
}

function reset(){
  size = getSize();

  if (isNaN(size) || size <= 16) {
    sizeInput.value = "16";
    size = 16;
    removeGrid();
    addGrid(size);
  } else if (size >= 100) {
    sizeInput.value = "100";
    size = 100;
    removeGrid();
    addGrid(size);
  } else {
    removeGrid();
    addGrid(size);
  }
}

function addGrid(size) {
  for (let rows = 0; rows < size; rows++) {
    addBlockRow(size);
  }
}

function removeGrid() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.remove();
  });
}

function addBlockRow(size) {
  const sizeValue = 70 / size;

  const newRow = document.createElement("div");
  newRow.setAttribute("class", "row");

  for (let squares = 0; squares < size; squares++) {
    const newSquare = document.createElement("div");
    newSquare.setAttribute("class", "square");
    newSquare.style.minHeight = `${sizeValue}vh`;
    newSquare.style.minWidth = `${sizeValue}vh`;
    newSquare.addEventListener("mouseover", changeColor)
    newRow.appendChild(newSquare);
  }

  main.appendChild(newRow);
}

function changeColor(e) {
  if (e.target.style.backgroundColor == "black") {
    e.target.style.backgroundColor = "white";
  } else {
    e.target.style.backgroundColor = "black";
  }
}