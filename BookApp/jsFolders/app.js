const sortButton = document.querySelector('.sortButton')
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

const clearAllBooks = document.getElementById('clearAllBooks')

addEventListeners();

function addEventListeners() {
  document.addEventListener('DOMContentLoaded', LocalStorage.showBooksFromLocalStorage)
  addNewBookButtons.forEach(button => button.addEventListener('click', UI.clearModalFormInputs))
  createBookButtonModal.addEventListener('click', Book.addBook)
  allBooks.addEventListener('click', Book.deleteBook)
  allBooks.addEventListener('click', Book.updateBook)
  sortBooksItems.forEach(item => item.addEventListener('click', Book.sortBooks))
  searchBook.addEventListener('keyup', Book.searchBooks)

  clearAllBooks.addEventListener('click', Book.deleteAllBooks)
}
