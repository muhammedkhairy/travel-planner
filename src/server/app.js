weatherData = {}; // to hold geoNames data
weatherInfo = {} // to hold info from weather bit

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.sendFile(path.resolve('dist', 'index.html'));
});

app.post('/geoNamesData', (request, response) => {
  weatherData['date'] = new Date();
  weatherData['countryName'] = request.body.countryName;
  weatherData['latitude'] = request.body.latitude;
  weatherData['longitude'] = request.body.longitude;
  response.send(weatherData);
  //console.log(weatherData);
  //return weatherData;
});

app.get('/weatherURL', (request, respond) => {
  const url_forecast = 'https://api.weatherbit.io/v2.0/forecast/daily';
  const lat = `lat=${weatherData.latitude}`;
  const long = `lon=${weatherData.longitude}`;
  const url = `${url_forecast}?${lat}&${long}&key=${process.env.API_WEATHER_KEY}`;
  console.log(url);

  respond.send(url);
});


app.post('/weatherbit', (request, response) => {
  weatherInfo['date'] = request.body.date;
  weatherInfo['highTemperature'] = request.body.highTemperature;
  weatherInfo['lowTemperature'] = request.body.lowTemperature;
  weatherInfo['weather'] = request.body.weather;
  response.send(weatherInfo);
  //console.log(weatherInfo)
});

module.exports = app;
