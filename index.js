const express = require('express');
// const bodyParser = require('body-parser');
const cors = require('cors')
const dotenv = require('dotenv');
const hotelRoutes = require('./router/router-hotel');


// const UserModel = require ('./models').user;

// app.use(bodyParser.json());

// get config vars
dotenv.config();

const app = express();
const PORT = 3000;   

// //membuat Get All User
// app.get('/user', async (req, res) => {
//   try {
//     const users = await UserModel.findAll();
//     res.status(200).json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({});
//   }
// });


app.use('/', hotelRoutes);

// Menambahkan route untuk tampilan selamat datang di web
app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});