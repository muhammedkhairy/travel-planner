weatherData = {}; // to hold geoNames data
weatherInfo = {}; // to hold info from weather bit
pixabayLink = {}; //hold info from pixabay

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
  weatherData['cityName'] = request.body.cityName;
  weatherData['countryName'] = request.body.countryName;
  weatherData['latitude'] = request.body.latitude;
  weatherData['longitude'] = request.body.longitude;
  response.send(weatherData);
  //console.log(weatherData);
  //return weatherData;
});

app.get('/weatherURL', (request, response) => {
  const url_forecast = 'https://api.weatherbit.io/v2.0/forecast/daily';
  const lat = `lat=${weatherData.latitude}`;
  const long = `lon=${weatherData.longitude}`;
  const url = `${url_forecast}?${lat}&${long}&key=${process.env.API_WEATHER_KEY}`;
  response.send(url);
});

app.post('/weatherbit', (request, response) => {
  weatherInfo['date'] = request.body.date;
  weatherInfo['highTemperature'] = request.body.highTemperature;
  weatherInfo['lowTemperature'] = request.body.lowTemperature;
  weatherInfo['weather'] = request.body.weather;
  response.send(weatherInfo);
  //console.log(weatherInfo)
});

app.get('/pixabayURL', (request, response) => {
  const url_image = 'https://pixabay.com/api/?key=';
  const parameters = '&image_type=photo&category=travel&safesearch=true';
  const city = `&q=${weatherData.cityName}`;
  const pixabayURL = `${url_image}${process.env.PIXABAY_KEY}${city}${parameters}`;
  response.send(pixabayURL);
});

app.post('/pixabay', (request, response) => {
  //pixabayLink['date'] = new Date();
  pixabayLink['imageURL'] = request.body.imageURL;
  response.send(pixabayLink);
  //console.log(weatherInfo)
});

app.get('/all', (request, response) => {
  response.send({ weatherData, weatherInfo, pixabayLink });
});

module.exports = app;
