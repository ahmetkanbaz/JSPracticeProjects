class LocalStorage {
  static getBooks4LocalStorage = function () {
    let books;

    if (!localStorage.getItem('books')) {
      books = []
    }
    else {
      books = JSON.parse(localStorage.getItem('books'))
    }
    return books
  }

  static addNewBook4Storage = function (book) {
    let books = LocalStorage.getBooks4LocalStorage()
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
    document.getElementById('warning4UI').remove()
    
  }

  static showBooksFromLocalStorage = function () {
    let books = LocalStorage.getBooks4LocalStorage()
    if (books.length == 0) {
      UI.warning4UI('Herhangi bir kitap bulunmamaktadır!')
    }
    else {
      books.map((book) => UI.addNewBook4UI(book))
    }
  }
}