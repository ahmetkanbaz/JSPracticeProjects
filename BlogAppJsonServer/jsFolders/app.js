const sortBlogsDropDown = document.getElementById('sortBlogsDropDown')
const sortDropItems = document.querySelectorAll('.dropdown-item')

const clearAllFiltersButton = document.getElementById('clearAllFiltersButton')

const searchBookInput = document.getElementById('searchBookInput')

const blogs = document.querySelector('blogs')
const clearAllBlogs = document.getElementById('clearAllBlogs')

const blogNameModal = document.getElementById ('blogNameModal')


const createNewBlogButtonModal = document.getElementById('createNewBlogButtonModal')

addEventListeners()

function addEventListeners () {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World!')
  })

  createNewBlogButtonModal.addEventListener('click', Blog.newBlog)
}