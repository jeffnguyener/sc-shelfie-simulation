require('dotenv').config();
const massive = require('massive')
const express = require('express');
const app = express();
const control = require('./controller');



app.use(express.json())

const PORT = 4000
app.listen(PORT, () => console.log(`Cruising on port....${PORT}`)) 