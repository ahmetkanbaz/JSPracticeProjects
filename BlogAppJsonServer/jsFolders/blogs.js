class Blog {
  constructor (id, name, author, category, content, date, imageUrl) {
    this.id = id
    this.name = name
    this.author = author
    this.category = category
    this.content = content
    this.date = date
    this.imageUrl = imageUrl
  }

  static newBlog = function () {
    let id = new Date()
    let name = blogNameModal.value.trim()

    console.log(name)
  }
}