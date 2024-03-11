const inputToDo = document.getElementById("inputToDo");
const addToDoButton = document.getElementById("addToDoButton");
const searchToDo = document.getElementById("searchToDo");
const listGroup = document.querySelector(".list-group");
const clearAllTasksButton = document.getElementById("clearAllTasksButton");

let tasks = [];

addEventListeners();

function addEventListeners() {
  // document.addEventListener("DOMContentLoaded", getAndCheckTasks);
  // document.addEventListener('keyup', enterDeneme)
  addToDoButton.addEventListener("click", createNewTask);
  searchToDo.addEventListener("keyup", searchTasks);
  listGroup.addEventListener("click", removeItem);
  listGroup.addEventListener("click", updateStatusItem);
  clearAllTasksButton.addEventListener("click", clearAllTasks);
}

function getAndCheckTasks() {
  tasks.length == 0
    ? listGroup.parentElement.classList.add("d-none")
    : console.log(listGroup.parentElement.classList);
}

function createNewTask() {
  if (inputToDo.value.trim() == "") {
    alert("Görev kısmı boş bırakılarak eklenme yapılamaz!");
  } else {
    const newLi = document.createElement("li");
    newLi.classList =
      "list-group-item d-flex justify-content-between align-items-center";
    newLi.textContent = inputToDo.value;
    const newDeleteItem = document.createElement("a");
    newDeleteItem.href = "#";
    newDeleteItem.classList = "fa-solid fa-xmark text-decoration-none";
    newLi.appendChild(newDeleteItem);
    listGroup.appendChild(newLi);
    inputToDo.value = "";
    tasks.push(newLi);
  }
}

function searchTasks(e) {
  let taskListItems = document.querySelectorAll('.list-group-item')
  taskListItems.forEach(function (listItem) {
    if (listItem.textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) == -1) {
      listItem.classList.add('d-none')
      listItem.classList.remove('d-block')
    }
    else {
      listItem.classList.add('d-block')
      listItem.classList.remove('d-none')
    }
  })
}

function removeItem(e) {
  if (e.target.classList.contains("fa-xmark")) {
    const listGroupItem = e.target.parentElement;
    if (confirm("Görevi silmek istediğinize emin misiniz?")) {
      listGroupItem.remove();
    }
  }
}

function updateStatusItem(e) {
  if (e.target.classList.contains("list-group-item")) {
    e.target.classList.toggle("text-decoration-line-through");
  }
}

function clearAllTasks() {
  if (confirm("Tüm görevleri silmek istediğinize emin misiniz?")) {
    listGroup.innerHTML = "";
  }
}

//Bu kod her defasında 'Enter' tuşuna basılıp basılmadığını kontrol eder. Enter tuşuna basıldığında girilen task'i ekler.
// function enterDeneme(e) {
//   if(e.keyCode == 13) createNewTask()
// }
