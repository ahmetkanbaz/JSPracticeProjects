const inputValue = document.getElementById('addToDoInput')
const addButton = document.getElementById('addButton')

addEventListeners();

function addEventListeners () {
  inputValue.addEventListener('keyup', writeInput)
  addButton.addEventListener('click', changeColor)
}


function changeColor () {
  addButton.style.backgroundColor = 'red'
}

function writeInput (e) {
  console.log(e.target.value)
}