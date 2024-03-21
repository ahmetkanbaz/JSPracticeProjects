let search = "";
let categoryList = [];
let dropDownCategoryList = [];
let sort = "";
class Filter {
  static searchBlogs2Filter = function (searchValue) {
    search = searchValue;
    Filter.filterBlogs();
  };

  static sortBlogs2Filter = function (sortValue) {
    sort = sortValue;
    Filter.filterBlogs();
  };

  static categoryList2Filter = function (type, check, value) {
    if (type == "mobile") {
      if (check) {
        dropDownCategoryList.push(value);
      } else {
        if (dropDownCategoryList.indexOf(value) > -1) {
          dropDownCategoryList.splice(dropDownCategoryList.indexOf(value), 1);
        }
      }
    } else {
      if (check) {
        categoryList.push(value);
      } else {
        if (categoryList.indexOf(value) > -1)
          categoryList.splice(categoryList.indexOf(value), 1);
      }
    }
    Filter.filterBlogs();
  };

  static filterBlogs = async function () {
    let blogs = await crud.get();

    if (search) {
      blogs = blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(search.toLowerCase()) ||
          blog.author.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort) {
      if (sort == "A - Z") blogs.sort((a, b) => a.title.localeCompare(b.title));
      else if (sort == "Z - A")
        blogs.sort((a, b) => b.title.localeCompare(a.title));
      else if (sort == "Yeniden Eskiye")
        blogs.sort((a, b) => new Date(b.date) - new Date(a.date));
      else blogs.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (categoryList.length > 0) {
      blogs = Filter.filterBlogs4CheckCategories(blogs, categoryList)
    }

    if (dropDownCategoryList.length > 0) {
      blogs = Filter.filterBlogs4CheckCategories(blogs, dropDownCategoryList)
    }

    UI.displayFilterBlogs(blogs);
    if (blogs.length == 0) console.log("Bulunamadı.");
  };

  static filterBlogs4CheckCategories = function (blogs, tempArray) {
    return blogs.filter(blog => tempArray.includes(blog.category))
  }
}