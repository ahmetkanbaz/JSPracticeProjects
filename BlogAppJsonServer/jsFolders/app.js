const sortBlogsDropDown = document.getElementById('sortBlogsDropDown')
const sortDropItems = document.querySelectorAll('.dropdown-item')

const clearAllFiltersButton = document.getElementById('clearAllFiltersButton')

const searchBookInput = document.getElementById('searchBookInput')

const blogs = document.querySelector('.blogs')
const clearAllBlogs = document.getElementById('clearAllBlogs')

const blogTitleModal = document.getElementById ('blogTitleModal')
const blogAuthorModal = document.getElementById('blogAuthorModal')
const blogCategoryModal = document.getElementById('blogCategoryModal')
const blogContentModal = document.getElementById('blogContentModal')
const blogDateModal = document.getElementById('blogDateModal')
const blogImageUrlModal = document.getElementById('blogImageUrlModal')
const createNewBlogButtonModal = document.getElementById('createNewBlogButtonModal')
const updateBlogButtonModal = document.getElementById('updateBlogButtonModal')

addEventListeners()

const crud = new Crud ('http://localhost:3000/blogs')

function addEventListeners () {
  document.addEventListener('DOMContentLoaded', Request.showAllBlogsFromJsonServer)

  createNewBlogButtonModal.addEventListener('click', Blog.addBlog)
  blogs.addEventListener('click', Blog.detailBlog)
  blogs.addEventListener('click', Blog.deleteBlog)
}