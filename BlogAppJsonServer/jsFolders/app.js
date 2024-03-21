const sortBlogsDropDown = document.getElementById('sortBlogsDropDown')
const sortDropItems = document.querySelectorAll('.dropdown-item')

const clearAllFiltersButton = document.getElementById('clearAllFiltersButton')

const searchBookInput = document.getElementById('searchBookInput')

const blogs = document.querySelector('.blogs')
const clearAllBlogs = document.getElementById('clearAllBlogs')

const blogModalLabel = document.getElementById('blogModalLabel')
const blogTitleModal = document.getElementById ('blogTitleModal')
const blogAuthorModal = document.getElementById('blogAuthorModal')
const blogCategoryModal = document.getElementById('blogCategoryModal')
const blogContentModal = document.getElementById('blogContentModal')
const blogDateModal = document.getElementById('blogDateModal')
const blogImageUrlModal = document.getElementById('blogImageUrlModal')
const createNewBlogButtonModal = document.getElementById('createNewBlogButtonModal')
const updateBlogButtonModal = document.getElementById('updateBlogButtonModal')

const addBlogUI = document.getElementById('addBlogUI')

const blogInfoModalTitleModal = document.getElementById('blogInfoModalTitleModal')
const blogInfoModalAuthorModal = document.getElementById('blogInfoModalAuthorModal')
const blogInfoModalCategoryModal = document.getElementById('blogInfoModalCategoryModal')
const blogInfoModalContentModal = document.getElementById('blogInfoModalContentModal')
const blogInfoModalDateModal = document.getElementById('blogInfoModalDateModal')
const blogInfoModalImageUrlModal = document.getElementById('blogInfoModalImageUrlModal')

const blogCategories = document.querySelector('.blogCategories')
const blogCategoriesMobile = document.querySelector('.blogCategoriesMobile')

addEventListeners()

const crud = new Crud ('http://localhost:3000/blogs')

function addEventListeners () {
  document.addEventListener('DOMContentLoaded', Request.showAllBlogsFromJsonServer)
  createNewBlogButtonModal.addEventListener('click', Blog.addBlog)
  addBlogUI.addEventListener('click', UI.clearModalInputs)
  blogs.addEventListener('click', Blog.detailBlog)
  blogs.addEventListener('click', Blog.deleteBlog)
  blogs.addEventListener('click', Blog.showUpdateBlogDetails)
  searchBookInput.addEventListener('keyup', Blog.searchBlog)
  sortDropItems.forEach(item => item.addEventListener('click', Blog.sortBlog))

}