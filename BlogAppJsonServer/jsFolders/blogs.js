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

  static showAllBlogsFromJsonServer = async function () {
    const allBlogs = await crud.get();
    if (allBlogs.length > 0)
      allBlogs.map((blog) =>
        UI.addNewBlog2UI(blog.id, blog.title, blog.imageUrl)
      );
    else if (allBlogs.length == 0) UI.alert("Blog bulunamadı!");
    else UI.alert("Bir hatayla karşılaşıldı!");
  };

  static addBlog = async function (e) {
    UI.clearModalInputs()
    let id = Date.now();
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
      const res = await crud.post(newBlog);
      console.log(res);
    }
    e.preventDefault();
  };

  static detailBlog = async function (e) {
    if (e.target.classList.contains("fa-eye")) {
      const blog = await crud.getSingleBlog(
        e.target.parentElement.parentElement.parentElement.id
      );
      console.log(blog);
    }
    e.preventDefault();
  };

  static deleteBlog = async function (e) {
    if (e.target.classList.contains("fa-trash")) {
      if (confirm("Blogu silmek istediğinize emin misiniz?")) {
        UI.deleteBlog2UI(e.target.parentElement.parentElement.parentElement);
        await crud.deleteSingleBlog(
          e.target.parentElement.parentElement.parentElement.id
        );
      }
    }
    e.preventDefault();
  };

  static updateBlog = async function (e) {
    if (e.target.classList.contains("fa-pencil")) {
      const blog = await crud.getSingleBlog(e.target.parentElement.parentElement.parentElement.id)
      UI.showUpdateBlogDetails2UI(blog)
    }

    e.preventDefault();
  };
}
