class Book {
  constructor(id, name, summary, date, imageUrl) {
    this.id = id;
    this.name = name;
    this.summary = summary;
    this.date = date;
    this.imageUrl = imageUrl;
  }

  static addBook = function (e) {
    const id = Date.now();
    const name = modalBookName.value.trim();
    const summary = modalBookSummary.value.trim();
    const date = modalBookDate.value;
    const imageUrl = modalBookImageUrl.value.trim();

    if (!name || !summary || !date || !imageUrl) {
      UI.alertMessage("Lütfen tüm alanları doldurunuz!");
    } else {
      // UI.clearModalFormInputs()
      const book = new Book(id, name, summary, date, imageUrl);
      UI.addNewBook4UI(book)
      LocalStorage.addNewBook4Storage(book)
    }

    e.preventDefault();
  };

  static deleteBook = function (e) {
    if (e.target.className == 'fa-solid fa-trash') {
      let singleBook = e.target.parentElement.parentElement.parentElement.parentElement
      let bookName = e.target.parentElement.parentElement.children[0].textContent
      if (confirm(`${bookName} adlı kitabı silmek istediğinize emin misiniz?`)) {
        UI.deleteBook4UI(singleBook)
        LocalStorage.deleteBook4LocalStorage(singleBook.id)
      }
    }
    e.preventDefault()
  }
}
