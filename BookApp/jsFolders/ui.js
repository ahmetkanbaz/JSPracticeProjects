class UI {
  static alertMessage = function (message) {
    alert(message);
  };

  static clearModalFormInputs = function () {
    modalBookName.value = "";
    modalBookSummary.value = "";
    modalBookDate.value = "";
    modalBookImageUrl.value = "";
    createBookButtonModal.style.display = "flex";
    updateButtonModal.style.display = "none";
    addNewBookModalTitle.textContent = "Kitap Ekle";
  };

  static warning4UI = function (message) {
    const newWarningDiv = document.createElement("div");
    newWarningDiv.id = "warning4UI";
    newWarningDiv.classList = "alert alert-danger py-4 text-center";
    newWarningDiv.role = "alert";
    newWarningDiv.textContent = message;
    allBooks.appendChild(newWarningDiv);
  };

  static addNewBook4UI = function (book) {
    const { id, name, summary, date, imageUrl } = book;

    const newBookCol = document.createElement("div");
    newBookCol.classList = "col-lg-2 col-md-3 col-sm-4 col-6 mt-3";
    newBookCol.id = id;
    const newCard = document.createElement("div");
    newCard.classList = "card h-100";
    const newImage = document.createElement("img");
    newImage.classList = "card-img-top object-fit-cover";
    newImage.src = imageUrl;
    newImage.alt = name;

    const newCardBody = document.createElement("div");
    newCardBody.className = "card-body";
    const newBookTitle = document.createElement("h6");
    newBookTitle.classList = "card-title text-truncate";
    newBookTitle.textContent = name;
    const newSummary = document.createElement("p");
    newSummary.className = "card-text";
    newSummary.textContent = summary;

    const newDate = document.createElement("p");
    newDate.className = "text-end";
    const newDateInfo = document.createElement("span");
    newDateInfo.textContent = "Tarih: ";
    const newDateResult = document.createElement("span");
    newDateResult.className = "fst-italic";
    newDateResult.textContent = date;

    const newIcons = document.createElement("div");
    newIcons.classList =
      "d-flex justify-content-around mt-2 pt-3 border-top border-secondary";
    const newUpdateIcon = document.createElement("a");
    newUpdateIcon.href = "#";
    newUpdateIcon.classList = "fa-solid fa-pencil";
    newUpdateIcon.setAttribute("data-bs-toggle", "modal");
    newUpdateIcon.setAttribute("data-bs-target", "#addNewBookModal");
    const newDeleteIcon = document.createElement("a");
    newDeleteIcon.href = "#";
    newDeleteIcon.classList = "fa-solid fa-trash";

    newIcons.appendChild(newUpdateIcon);
    newIcons.appendChild(newDeleteIcon);

    newDate.appendChild(newDateInfo);
    newDate.appendChild(newDateResult);

    newCardBody.appendChild(newBookTitle);
    newCardBody.appendChild(newSummary);
    newCardBody.appendChild(newDate);
    newCardBody.appendChild(newIcons);

    newCard.appendChild(newImage);
    newCard.appendChild(newCardBody);
    newBookCol.appendChild(newCard);

    allBooks.appendChild(newBookCol);
  };

  static deleteBook4UI = function (book) {
    book.remove();
  };

  static updateBook4UI = function (book) {
    const {name, summary, date, imageUrl} = book
    modalBookName.value = name
    modalBookSummary.value = summary
    modalBookDate.value = date
    modalBookImageUrl.value = imageUrl
  }

  static updateDisplayBooks2UI = function (books) {
    allBooks.innerHTML = ''
    books.map(book => UI.addNewBook4UI(book))
  }

  static clearFilterItemsValues = function () {
    searchBook.value = ''
    sortButton.textContent = 'Sırala'
  }

  static deleteAllBooks2UI = function () {
    allBooks.innerHTML = ''
  }
}
