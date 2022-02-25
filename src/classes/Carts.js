class Carts {
  constructor() {
    this.carts = []
    this.id = 0
  };
  
  // Crea un carrito y devuelve su id.
  addCart() {
    const newCart = { id: ++this.id, timestamp: Date.now() };
    this.carts.push(newCart);
    return id;
  }

  // Vacía un carrito y lo elimina.
  deleteById(cartId) {
    // const index = this.carts.findIndex(cart=> )
  }

  // Me permite listar todos los productos guardados en el carrito.
  getProducts(productId) {
  }

  // Para incorporar productos al carrito por su id de producto
  addProduct(product) {
  }

  // Eliminar un producto del carrito por su id de carrito y de producto
  deleteProduct(productId) {
  }

  // updateProduct(productId, product) {
  // }
};
module.exports = Carts;