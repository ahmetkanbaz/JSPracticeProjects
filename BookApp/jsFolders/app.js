const sortBooksItems = document.querySelectorAll(".dropdown-item");
const addNewBookButtons = document.querySelectorAll(".addNewBookButton");
const searchBook = document.getElementById("searchBook");
const allBooks = document.getElementById("allBooks");

const addNewBookModal = document.getElementById("addNewBookModal");
const addNewBookModalTitle = document.getElementById('addNewBookModalTitle')
const modalBookName = document.getElementById('modalBookName')
const modalBookSummary = document.getElementById('modalBookSummary')
const modalBookDate = document.getElementById('modalBookDate')
const modalBookImageUrl = document.getElementById('modalBookImageUrl')
const createBookButtonModal = document.getElementById('createBookButtonModal')
const updateButtonModal = document.getElementById('updateButtonModal')

addEventListeners();

function addEventListeners() {
  document.addEventListener('DOMContentLoaded', LocalStorage.showBooksFromLocalStorage)
  createBookButtonModal.addEventListener('click', Book.addBook)
}
