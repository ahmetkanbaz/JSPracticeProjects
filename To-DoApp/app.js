const inputToDo = document.getElementById("inputToDo");
const addToDoButton = document.getElementById("addToDoButton");
const searchToDo = document.getElementById("searchToDo");
const listGroup = document.querySelector(".list-group");
const clearAllTasksButton = document.getElementById("clearAllTasksButton");

addEventListeners();

function addEventListeners() {
  addToDoButton.addEventListener("click", addToDo);
  listGroup.addEventListener("click", deleteSingleTask);
}

function addToDo() {
  if (inputToDo.value.trim() == "") {
    alert("Görev kısmı boş bırakılarak ekleme yapılamaz!");
  } else {
    let newToDo = {
      id: Date.now(),
      value: inputToDo.value,
      status: "",
    };
    createNewElement4UI(newToDo);
    // addToDo4LS(newToDo)
  }
}

function createNewElement4UI(todo) {
  let newLi = document.createElement("li");
  newLi.id = todo.id;
  newLi.classList = `list-group-item d-flex justify-content-between align-items-center ${todo.status}`;
  newLi.textContent = todo.value;
  let newDeleteTaskIcon = document.createElement("a");
  newDeleteTaskIcon.href = "#";
  newDeleteTaskIcon.classList = "fa-solid fa-xmark text-decoration-none";
  newLi.appendChild(newDeleteTaskIcon);
  listGroup.appendChild(newLi);
  inputToDo.value = "";
}

function addToDo4LS(todo) {
  
}

function deleteSingleTask(e) {
  if (e.target.classList.contains("fa-xmark")) {
    if (confirm("Görevi silmek istediğinize emin misiniz?"))
      e.target.parentElement.remove();
  }
}
