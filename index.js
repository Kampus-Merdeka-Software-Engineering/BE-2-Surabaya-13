const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const hotelRoutes = require('./router/router-hotel');
const helmet = require('helmet')

app.use(cors())
app.use(helmet())


// get config vars
dotenv.config();

const app = express();
const PORT = 3000;   


app.use('/', hotelRoutes);

// Menambahkan route untuk tampilan selamat datang di web
app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});