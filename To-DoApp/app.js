const toDoInput = document.getElementById("toDoInput");
const addToDoButton = document.getElementById("addToDoButton");
const listGroup = document.querySelector(".list-group");

addEventListeners();

function addEventListeners() {
  // document.addEventListener('keyup', enterDeneme)
  addToDoButton.addEventListener("click", createNewTask);
  listGroup.addEventListener("click", removeItem);
  listGroup.addEventListener('click', updateStatusItem)
}

function createNewTask() {
  if (toDoInput.value.trim() == "") {
    alert("Görev kısmı boş bırakılarak eklenme yapılamaz!");
  } else {
    const newLi = document.createElement("li");
    newLi.classList =
      "list-group-item d-flex justify-content-between align-items-center";
    newLi.textContent = toDoInput.value;
    const newDeleteItem = document.createElement("a");
    newDeleteItem.href = "#";
    newDeleteItem.classList = "fa-solid fa-xmark text-decoration-none";
    newLi.appendChild(newDeleteItem);
    listGroup.appendChild(newLi);
    toDoInput.value = "";
  }
}

function removeItem(e) {
  if (e.target.classList.contains("fa-xmark")) {
    const listGroupItem = e.target.parentElement;
    if (confirm("Görevi silmek istediğinize emin misiniz?")) {
      listGroupItem.remove();
    }
  }
}

function updateStatusItem (e) {
  if (e.target.classList.contains('list-group-item')) {
    e.target.classList.toggle('text-decoration-line-through')
    console.log(e.target.className)
  }
}

//Bu kod her defasında 'Enter' tuşuna basılıp basılmadığını kontrol eder. Enter tuşuna basıldığında girilen task'i ekler.
// function enterDeneme(e) {
//   if(e.keyCode == 13) createNewTask()
// }
