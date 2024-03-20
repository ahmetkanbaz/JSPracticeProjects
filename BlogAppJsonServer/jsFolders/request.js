class Request {
  static showAllBlogsFromJsonServer = async function () {
    const blogs = await crud.get();
    if (blogs.length > 0) {
      blogs.map((blog) => UI.addNewBlog2UI(blog.id, blog.title, blog.imageUrl));
    }
  };
}
