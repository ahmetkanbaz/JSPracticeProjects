class Crud {
  constructor(url) {
    this.url = url;
  }

  async get() {
    const response = await fetch(this.url);

    if (response.ok && response.status == 200) return response.json();
    else throw new Error("Bir hatayla karşılaşıldı!");
  }

  async post(blog) {
    const response = await fetch(this.url, {
      method: "POST",
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.ok) return await response.json();
    else throw new Error("Bir hatayla karşılaşıldı!");
  }

  async getSingleBlog(id) {
    const response = await fetch(`${this.url}/${id}`);
    if (response.ok && response.status == 200) return response.json();
    else return 'Bir hatayla karşılaşıldı!'
  }

  async deleteSingleBlog (id) {
    const response = await fetch(`${this.url}/${id}`, {
      method: 'DELETE'
    })

    if (response.ok) return 'Blog başarıyla silindi.'
    else return 'Blog silinirken bir hatayla karşılaşıldı!'
  }

  async put (blog) {
    const response = await fetch (`${this.url}/${blog.id}`, {
      method: 'PUT',
      body: JSON.stringify(blog),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })

    if (response.ok && response.status == 200) return await response.json()
    else return 'Güncelleme esnasında bir hatayla karşılaşıldı!'
  }
}
