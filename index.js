require('dotenv').config();
const express = require('express')
// const cors = require('cors')
const app = express()
const port = process.env.SERVER_PORT

// app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));

const productRouter = require('./src/routers/products');
app.use('/api/products', productRouter);

const cartRouter = require('./src/routers/cart');
app.use('/api/cart', cartRouter);

const server = app.listen(port, () => {
  console.log(`HTTP Server en puerto: ${port}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`));