class Crud {
  constructor(url) {
    this.url = url;
  }

  async get() {
    const response = await fetch(this.url)

    if (response.ok && response.status == 200) {
      return response.json()
    }

    else {
      throw new Error ('Bir hatayla karşılaşıldı!')
    }
  }
}
