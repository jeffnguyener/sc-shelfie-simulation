require('dotenv').config();
const massive = require('massive')
const express = require('express');
const app = express();
const control = require('./controller');
const { SERVER_PORT, CONNECTION_STRING } = process.env

app.use(express.json())

app.get('/api/products', control.getAllproducts)
app.post('/api/addproduct', control.addProduct)
app.put('/api/product/:id', control.updateProduct)
app.delete('/api/product/:id', control.deleteProduct)


massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    console.log('Database 👌!')
})

app.listen(SERVER_PORT, () => console.log(`Cruising on port....${SERVER_PORT}`)) 