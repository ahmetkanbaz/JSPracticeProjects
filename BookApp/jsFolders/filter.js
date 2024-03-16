let sortValue = "";
let searchValue = "";
class Filter {
  static sortBooks2Filter = function (sort) {
    sortValue = sort;
    Filter.filterBooks();
  };

  static searchBooks2Filter = function (search) {
    searchValue = search;
    Filter.filterBooks();
  };

  static filterBooks = function () {
    let books = LocalStorage.getBooks4LocalStorage();

    if (sortValue) {
      if (sortValue == "A - Z")
        books.sort((a, b) => a.name.localeCompare(b.name));
      else if (sortValue == "Z - A")
        books.sort((a, b) => b.name.localeCompare(a.name));
      else if (sortValue == "Yeniden Eskiye")
        books.sort((a, b) => new Date(b.date) - new Date(a.date));
      else if (sortValue == "Eskiden Yeniye")
        books.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (searchValue) {
      books = books.filter((book) => book.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

    UI.updateDisplayBooks2UI(books);

    if (books.length == 0) {
      UI.warning4UI('Aradığınız kitap bulunamadı!')
    }
  };
}
