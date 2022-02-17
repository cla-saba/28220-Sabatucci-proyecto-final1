const express = require('express');
const router = express.Router();
const Cart = require('../classes/Cart')

// Crea un carrito y devuelve su id -- (usuarios y administradores)
router.post('/', (req, res) => {
  res.send('POST');
});

// Vacia un carrito y lo elimina -- (usuarios y administradores)
router.delete('/:cartId', (req, res) => {
  res.send('DELETE');
});

// Me permite listar todos los productos guardados en un carrito -- (usuarios y administradores)
router.get('/:cartId/products', (req, res) => {
  res.send('GET');
});

// Para incorporar productos al carrito por su id de carrito y id de producto -- (usuarios y administradores)
router.post('/:cartId/products/:productId', (req, res) => {
  res.send('GET');
});

// Eliminar un producto al carrito por su id de carrito y id de producto -- (usuarios y administradores)
router.delete('/:cartId/products/:productId', (req, res) => {
  res.send('POST');
});

module.exports = router;