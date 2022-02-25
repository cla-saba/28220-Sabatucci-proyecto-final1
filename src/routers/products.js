const express = require('express');
const router = express.Router();
const fs = require('fs');
const Products = require('../classes/Products');
const Product = new Products();

const isAdmin = true;

const checkAuthorization = (req, res, next) => {
  if (!isAdmin) {
    const { method, baseUrl } = req;
    return res.status(500).send({
      error: -1,
      descripcion: `ruta ${baseUrl} metodo ${method} no autorizada`
    });
  }
  next();
}

// Me permite listar todos los productos disponibles -- (usuarios y administradores)
router.get('/', (req, res) => {
  const allProducts = Product.listAll();
  res.status(200).json(allProducts);
});

// Me permite listar un producto por su id -- (usuarios y administradores)
router.get('/:productId', (req, res) => {
  const { productId } = req.params;
  const oneProduct = Product.listById(productId);
  res.status(200).json(oneProduct);
});

// Para incorporar productos al listado -- (administradores)
router.post('/',
  checkAuthorization,
  (req, res) => {
    const newProduct = Product.addProduct(req.body);
    res.status(201).json(newProduct);
  });

// Actualiza un producto por su id -- (administradores)
router.put('/:productId',
  checkAuthorization,
  (req, res) => {
    const { productId } = req.params;
    const modifiedProduct = Product.modifyById(req.body, productId);
    res.status(200).json(modifiedProduct);
  });

// Borra un producto por su id -- (administradores)
router.delete('/:productId',
  checkAuthorization,
  (req, res) => {
    const { productId } = req.params;
    const deletedProduct = Product.deleteById(productId);
    res.status(200).json(deletedProduct);
  });

module.exports = router;