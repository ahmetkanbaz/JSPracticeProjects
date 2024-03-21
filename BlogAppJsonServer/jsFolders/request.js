class Request {
  static showAllBlogsFromJsonServer = async function () {
    const blogs = await crud.get();
    if (blogs.length > 0) blogs.map((blog) => UI.addNewBlog2UI(blog.id, blog.title, blog.imageUrl));
    UI.displayBlogsCategories()
  };

  static addNewBlog2JsonServer = async function(blog) {
    await crud.post(blog)
    UI.displayBlogsCategories()
  }

  static getDetailBlogFromJsonServer = async function (id, type) {
    const response = await crud.getSingleBlog(id)
    if (type == 'update') {
      UI.showUpdateBlogDetails2UI(response)
      UI.displayBlogsCategories()
    }
    if (type == 'info') UI.detailBlog2UI(response)
  }

  static deleteBlogFromJsonServer = async function (id) {
    await crud.deleteSingleBlog(id)
    UI.displayBlogsCategories()
  }

  static updateBlogFromJsonServer = async function (blog) {
    const response = await crud.put(blog)
    console.log(response)
  }
}
