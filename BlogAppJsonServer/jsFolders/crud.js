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
}
