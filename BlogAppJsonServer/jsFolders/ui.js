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
      ></button>
      <button
        type="button"
        class="btn btn-danger fa-solid fa-trash"
      ></button>
    </div>
  </div>`;

    blogs.appendChild(newBlogCol);
  };

  static deleteBlog2UI = function (blog) {
    blog.remove();
  };

  static showUpdateBlogDetails2UI = function (blog) {
    const { title, author, category, content, date, imageUrl } = blog;
    console.log(date)
    blogTitleModal.value = title;
    blogAuthorModal.value = author;
    blogCategoryModal.value = category;
    blogContentModal.value = content;
    blogDateModal.value = date;
    blogImageUrlModal.value = imageUrl;
    createNewBlogButtonModal.classList.add("d-none");
  };
}
