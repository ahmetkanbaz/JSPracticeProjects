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
    }

    e.preventDefault();
  };
}
