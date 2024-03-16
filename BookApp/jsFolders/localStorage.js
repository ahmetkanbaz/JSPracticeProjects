class LocalStorage {
  static getBooks4LocalStorage = function () {
    let books;

    if (!localStorage.getItem("books")) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  };

  static addNewBook4Storage = function (book) {
    let books = LocalStorage.getBooks4LocalStorage();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    document.getElementById("warning4UI").remove();
  };

  static showBooksFromLocalStorage = function () {
    let books = LocalStorage.getBooks4LocalStorage();
    if (books.length == 0) {
      UI.warning4UI("Herhangi bir kitap bulunmamaktadır!");
    } else {
      books.map((book) => UI.addNewBook4UI(book));
    }
  };

  static deleteBook4LocalStorage = function (bookId) {
    let books = LocalStorage.getBooks4LocalStorage();
    books.map((book, index) => {
      if (book.id == bookId) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));

    books.length == 0 && UI.warning4UI("Tüm kitaplar silindi!");
  };
}
