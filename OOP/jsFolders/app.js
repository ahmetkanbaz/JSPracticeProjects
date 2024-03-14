const inputValue = document.getElementById('addToDoInput')
const addButton = document.getElementById('addButton')
const toDo = document.getElementById('toDosList');

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

const deneme = 'Hello!';
const deneme2 = document.createTextNode(deneme)

const newItemLi = document.createElement('li');
newItemLi.className = `list-group-item bg-danger`;
newItemLi.appendChild(deneme2)
toDo.appendChild(newItemLi);