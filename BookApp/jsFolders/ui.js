class UI {
  static alertMessage = function (message) {
    alert(message)
  }

  static clearModalFormInputs = function () {
    modalBookName.value = ''
    modalBookSummary.value = ''
    modalBookDate.value = ''
    modalBookImageUrl.value = ''
  }

  // <div class="col-lg-2 col-md-3 col-sm-4 col-6" id="id">
  //           <div class="card">
  //             <img
  //               src="https://img.kitapyurdu.com/v1/getImage/fn:11772063/wh:true/wi:220"
  //               class="card-img-top object-fit-cover"
  //               alt="Kitap Adı"
  //             />
  //             <div class="card-body">
  //               <h6 class="card-title text-truncate">
  //                 Posta Kutusundaki Mızıka
  //               </h6>
  //               <p class="card-text">
  //               </p>
  //               <p class="text-end">
  //                 Tarih: <span class="fst-italic"> 12/10/2010 </span>
  //               </p>
  //               
  //             </div>
  //           </div>
  //         </div>

  static addNewBook4UI = function (book) {
    const {id, name, summary, date, imageUrl} = book
    console.log(book)
    const newBookCol = document.createElement('div')
    newBookCol.classList = 'col-lg-2 col-md-3 col-sm-4 col-6'
    newBookCol.id = id
    const newCard = document.createElement('div')
    newCard.classList = 'card h-100'
    const newImage = document.createElement('img')
    newImage.classList = 'card-img-top object-fit-cover'
    newImage.src = imageUrl
    newImage.alt = name
    
    const newCardBody = document.createElement('div')
    newCardBody.className = 'card-body'
    const newBookTitle = document.createElement('h6')
    newBookTitle.classList = 'card-title text-truncate'
    newBookTitle.textContent = name
    const newSummary = document.createElement('p')
    newSummary.className = 'card-text'
    newSummary.textContent = summary
    
    const newDate = document.createElement('p')
    newDate.className = 'text-end'
    const newDateInfo = document.createElement('span')
    newDateInfo.textContent = 'Tarih: '
    const newDateResult = document.createElement('span')
    newDateResult.className = 'fst-italic'
    newDateResult.textContent = date
    
    const newIcons = document.createElement('div')
    newIcons.classList = 'd-flex justify-content-around mt-2 pt-3 border-top border-secondary'
    const newUpdateIcon = document.createElement('a')
    newUpdateIcon.href = '#'
    newUpdateIcon.classList = 'fa-solid fa-pencil'
    const newDeleteIcon = document.createElement('a')
    newDeleteIcon.href = '#'
    newDeleteIcon.classList = 'fa-solid fa-trash'

    newIcons.appendChild(newUpdateIcon)
    newIcons.appendChild(newDeleteIcon)

    newDate.appendChild(newDateInfo)
    newDate.appendChild(newDateResult)

    newCardBody.appendChild(newBookTitle)
    newCardBody.appendChild(newSummary)
    newCardBody.appendChild(newDate)
    newCardBody.appendChild(newIcons)

    newCard.appendChild(newImage)
    newCard.appendChild(newCardBody)
    newBookCol.appendChild(newCard)

    allBooks.appendChild(newBookCol)

  }
}