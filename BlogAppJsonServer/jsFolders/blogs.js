class Blog {
  constructor (id, title, author, category, content, date, imageUrl) {
    this.id = id
    this.title = title
    this.author = author
    this.category = category
    this.content = content
    this.date = date
    this.imageUrl = imageUrl
  }

  static addBlog = function () {
    let id = Date.now()
    let title = blogTitleModal.value.trim()
    let author = blogAuthorModal.value.trim()
    let category = blogCategoryModal.value.trim()
    let content = blogContentModal.value.trim()
    let date = blogDateModal.value
    let imageUrl = blogImageUrlModal.value.trim()

    if (!title || !author || !category || !content || !imageUrl) UI.alert('* işaretli alanları doldurunuz!')
    else {
      let newBlog = {
        id, title, author, category, content, date, imageUrl
      }
      UI.addNewBlog2UI(id, title, imageUrl)
    }
  }
}