require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.SERVER_PORT;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const productRouter = require('./src/routers/products');
app.use('/api/products', productRouter);

const cartRouter = require('./src/routers/cart');
app.use('/api/cart', cartRouter);

const server = app.listen(PORT, () => {
  console.log(`HTTP Server en puerto: ${PORT}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`));