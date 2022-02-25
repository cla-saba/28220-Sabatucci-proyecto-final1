const fs = require('fs');

class Products {
  constructor() {
    this.products = []
    this.id = 0
    this.file = '../data/productos.txt';
  };

  async readFile() {
    const content = await fs.promises.readFile(this.file, 'utf-8');
    console.log('Registro leido');
    return JSON.parse(content);
  }

  async writeFile(parsedFile) {
    await fs.promises.writeFile(this.file, JSON.stringify(parsedFile, null, 2));
  }

  async listById(id) {
    const parsedFile = await this.readFile();
    const product = parsedFile.find(product => product.id == id);
    if (product) {
      return product;
    } else {
      return { error: 'producto no encontrado' };
    }
  };

  async listAll() {
    return await this.readFile();
  };

  async addProduct(product) {
    const newProduct = { ...product, id: ++this.id, timestamp: Date.now() };
    let parsedFile = await this.readFile();
    parsedFile.push(newRecord);
    await this.writeFile(parsedFile);
    return newProduct;
  };

  modifyById(product, id) {
    const newProduct = { id: Number(id), ...product, timestamp: Date.now() };
    const index = this.products.findIndex(p => p.id == id);
    if (index !== -1) {
      this.products[index] = newProduct;
      return newProduct;
    } else {
      return { error: 'producto no encontrado' };
    }
  };

  deleteById(id) {
    const index = this.products.findIndex(product => product.id == id);
    if (index !== -1) {
      return this.products.splice(index, 1);
    } else {
      return { error: 'producto no encontrado' };
    }
  }
};

module.exports = Products;