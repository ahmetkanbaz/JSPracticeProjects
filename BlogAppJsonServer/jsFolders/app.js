const sortBlogsDropDown = document.getElementById('sortBlogsDropDown')
const sortDropItems = document.querySelectorAll('.dropdown-item')

const clearAllFiltersButton = document.getElementById('clearAllFiltersButton')

const searchBookInput = document.getElementById('searchBookInput')

const blogs = document.querySelector('blogs')
const clearAllBlogs = document.getElementById('clearAllBlogs')

addEventListeners()

function addEventListeners () {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Hello World!')
  })
}