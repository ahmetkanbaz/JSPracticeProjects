let tempSortValue = "";
let tempSearchValue = "";

class Filter {
  static sortBooks2Filter = function (sortValue) {
    let books = LocalStorage.getBooks4LocalStorage();
    if (sortValue == 'A - Z') books.sort((a, b) => a.name.localeCompare(b.name))
    else if (sortValue == 'Z - A') books.sort((a,b) => b.name.localeCompare(a.name))
    else if (sortValue == "Eskiden Yeniye") books.sort((a, b) => new Date(a.date) - new Date(b.date));
    else if (sortValue == 'Yeniden Eskiye') books.sort ((a, b) => new Date (b.date) - new Date(a.date))
    UI.updateDisplayBooks2UI(books)
  };
}
