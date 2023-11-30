const express = require('express');
const bodyParser = require('body-parser');
// const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


// get config vars
dotenv.config();

const app = express();
// app.use(bodyParser.json());
const PORT = 3000;   


// Menambahkan route untuk tampilan selamat datang di web
app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});