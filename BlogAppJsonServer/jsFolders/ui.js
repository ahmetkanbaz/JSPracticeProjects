class UI {
  static alert = function (message) {
    alert(message);
  };

  static clearModalInputs = function () {
    blogTitleModal.value = "";
    blogAuthorModal.value = "";
    blogCategoryModal.value = "";
    blogContentModal.value = "";
    blogDateModal.value = "";
    blogImageUrlModal.value = "";
    blogModalLabel.textContent = "Blog Ekle";
    createNewBlogButtonModal.classList.remove("d-none");
    updateBlogButtonModal.classList.add("d-none");
  };

  static addNewBlog2UI = function (id, title, imageUrl) {
    const newBlogCol = document.createElement("div");
    newBlogCol.id = id;
    newBlogCol.className = "col-md-4 col-6";
    newBlogCol.innerHTML = `<div
    class="d-flex flex-column justify-content-center position-relative singleBlog"
  >
    <img
      src=${imageUrl}
      alt=${title}
      class="img-fluid rounded object-fit-cover"
    />
    <div
      class="position-absolute py-2 d-flex w-100 justify-content-evenly blogIcons"
    >
      <button
        type="button"
        class="btn btn-primary fa-solid fa-pencil"
        data-bs-toggle="modal" data-bs-target="#blogModal"
      ></button>
      <button
        type="button"
        class="btn btn-info fa-solid fa-eye"
        data-bs-toggle="modal" data-bs-target="#blogInfoModal"
      ></button>
      <button
        type="button"
        class="btn btn-danger fa-solid fa-trash"
      ></button>
    </div>
  </div>`;

    blogs.appendChild(newBlogCol);
  };

  static detailBlog2UI = function (blog) {
    const { title, author, category, content, date, imageUrl } = blog;

    blogInfoModalTitleModal.textContent = title;
    blogInfoModalAuthorModal.textContent = author;
    blogInfoModalCategoryModal.textContent = category;
    blogInfoModalContentModal.textContent = content;
    blogInfoModalDateModal.textContent = date;
    blogInfoModalImageUrlModal.textContent = imageUrl;
  };

  static deleteBlog2UI = function (blog) {
    blog.remove();
  };

  static showUpdateBlogDetails2UI = function (blog) {
    const { title, author, category, content, date, imageUrl } = blog;
    blogTitleModal.value = title;
    blogAuthorModal.value = author;
    blogCategoryModal.value = category;
    blogContentModal.value = content;
    blogDateModal.value = date;
    blogImageUrlModal.value = imageUrl;
    blogModalLabel.textContent = "Blog Güncelle";
    createNewBlogButtonModal.classList.add("d-none");
    updateBlogButtonModal.classList.remove("d-none");

    updateBlogButtonModal.addEventListener("click", (e) => {
      let updateBlog = {
        id: blog.id,
        title: blogTitleModal.value,
        author: blogAuthorModal.value,
        category: blogCategoryModal.value,
        content: blogContentModal.value,
        date: blogDateModal.value,
        imageUrl: blogImageUrlModal.value,
      };
      Request.updateBlogFromJsonServer(updateBlog);
      e.preventDefault();
    });
  };

  static displayBlogsCategories = async function () {
    const blogs = await crud.get();
    let categories = [];
    blogCategories.innerHTML = "";
    blogCategoriesMobile.innerHTML = "";

    if (blogs.length > 0) {
      blogs.map((blog) => categories.push(blog.category));
    }

    const uniqueCategories = [...new Set(categories)];
    uniqueCategories.map((categoryName) => UI.createNewCategory(categoryName));
  };

  static createNewCategory = function (categoryName) {
    blogCategories.innerHTML += `<input
    type="checkbox"
    class="btn-check"
    id=${categoryName}
    autocomplete="off"
  />
  <label class="btn btn-outline-primary" for=${categoryName}
    >${categoryName}</label
  >`;
    blogCategoriesMobile.innerHTML += `<li class = 'ps-1'>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id=${categoryName}
          />
          <label class="form-check-label" for=${categoryName}>
            ${categoryName}
          </label>
        </div>
      </li>`;
  };

  static displayFilterBlogs = function (tempBlogs) {
    blogs.innerHTML = "";
    tempBlogs.map((blog) =>
      UI.addNewBlog2UI(blog.id, blog.title, blog.imageUrl)
    );
  };
}
