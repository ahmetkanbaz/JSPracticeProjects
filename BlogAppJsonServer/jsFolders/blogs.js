class Blog {
  constructor(id, title, author, category, content, date, imageUrl) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.category = category;
    this.content = content;
    this.date = date;
    this.imageUrl = imageUrl;
  }

  static addBlog = function (e) {
    let id = String(Date.now());
    let title = blogTitleModal.value.trim();
    let author = blogAuthorModal.value.trim();
    let category = blogCategoryModal.value.trim();
    let content = blogContentModal.value.trim();
    let date = blogDateModal.value;
    let imageUrl = blogImageUrlModal.value.trim();

    if (!title || !author || !category || !content || !imageUrl)
      UI.alert("* işaretli alanları doldurunuz!");
    else {
      let newBlog = new Blog(
        id,
        title,
        author,
        category,
        content,
        date,
        imageUrl
      );
      UI.addNewBlog2UI(id, title, imageUrl);
      Request.addNewBlog2JsonServer(newBlog);
    }
    e.preventDefault();
  };

  static detailBlog = function (e) {
    if (e.target.classList.contains("fa-eye")) {
      Request.getDetailBlogFromJsonServer(
        e.target.parentElement.parentElement.parentElement.id, 'info'
      );
    }
    e.preventDefault();
  };

  static deleteBlog = function (e) {
    if (e.target.classList.contains("fa-trash")) {
      if (confirm("Blogu silmek istediğinize emin misiniz?")) {
        UI.deleteBlog2UI(e.target.parentElement.parentElement.parentElement);
        Request.deleteBlogFromJsonServer(
          e.target.parentElement.parentElement.parentElement.id
        );
      }
    }
    e.preventDefault();
  };

  static showUpdateBlogDetails = async function (e) {
    if (e.target.classList.contains("fa-pencil")) {
      Request.getDetailBlogFromJsonServer(e.target.parentElement.parentElement.parentElement.id, 'update')
    }
    e.preventDefault();
  };
}
