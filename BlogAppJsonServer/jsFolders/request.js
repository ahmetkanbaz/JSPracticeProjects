class Request {
  static showAllBlogsFromJsonServer = async function () {
    const blogs = await crud.get();
    if (blogs.length > 0) {
      blogs.map((blog) => UI.addNewBlog2UI(blog.id, blog.title, blog.imageUrl));
    }
  };

  static addNewBlog2JsonServer = async function(blog) {
    const response = await crud.post(blog)
  }
}
