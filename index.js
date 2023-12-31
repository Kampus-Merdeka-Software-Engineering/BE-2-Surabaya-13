const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const hotelRoutes = require('./router/router-hotel');
const reserveRoutes = require('./router/router-reserved');
const subscribesRoutes = require('./router/router-subscribes');
const helmet = require('helmet')

require('dotenv').config();

const app = express();

app.use(cors());
app.use(helmet())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(hotelRoutes);
app.use(reserveRoutes);
app.use(subscribesRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Halo, Selamat Datang!</h1>');
});
  
app.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log('Server berjalan pada port 3000');
});