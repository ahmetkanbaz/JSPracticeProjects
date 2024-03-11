const inputToDo = document.getElementById("inputToDo");
const addToDoButton = document.getElementById("addToDoButton");
const searchToDo = document.getElementById("searchToDo");
const listGroup = document.querySelector(".list-group");
const clearAllTasksButton = document.getElementById("clearAllTasksButton");

let tasks = [];

addEventListeners();

function addEventListeners() {
  document.addEventListener("DOMContentLoaded", loadTasks4LS);
  addToDoButton.addEventListener("click", addToDo);
  listGroup.addEventListener("click", deleteSingleTask);
}

function loadTasks4LS() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  if (tasks.length == 0) {
    listGroup.parentElement.style.display = "none";
  } else {
    tasks.forEach(function (listItem) {
      createNewElement4UI(listItem);
    });
  }
}

function addToDo() {
  if (inputToDo.value.trim() == "") {
    // alert("Görev kısmı boş bırakılarak ekleme yapılamaz!");
    showAlert("danger", "Görev kısmı boş bırakılarak ekleme yapılamaz!");
  } else {
    let newToDo = {
      id: Date.now(),
      value: inputToDo.value,
      status: "",
    };
    createNewElement4UI(newToDo);
    addToDo4LS(newToDo);
    showAlert("success", "Görev başarıyla eklendi.");
    if (listGroup.parentElement.style.display == "none") {
      listGroup.parentElement.style.display = "block";
    }
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
  tasks.push(todo);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteSingleTask(e) {
  if (e.target.classList.contains("fa-xmark")) {
    let deleteTask = e.target.parentElement;
    if (confirm("Görevi silmek istediğinize emin misiniz?")) {
      deleteTask.remove();
    }
    deleteSingleTask4LS(deleteTask);
    showAlert('success', `${deleteTask.textContent} adlı görev başarılı bir şekilde silindi.`)
  }
  e.preventDefault();
}

function deleteSingleTask4LS(deleteTask) {
  tasks.forEach(function (listItem) {
    if (listItem.id == deleteTask.id) {
      tasks.splice(tasks.indexOf(listItem), 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showAlert(type, message) {
  let newAlertDiv = document.createElement("div");
  newAlertDiv.role = "alert";
  newAlertDiv.classList = `alert alert-${type}`;
  newAlertDiv.textContent = message;
  inputToDo.parentElement.parentElement.appendChild(newAlertDiv);

  setTimeout(() => {
    newAlertDiv.remove();
  }, 2500);
}
