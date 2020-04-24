import daysRemaining from './days_countdown';
import checkDestinationAndDate from './destination_date';
import geoNamesData from './geoNames_data';
import getWeatherIoURL from './weatherbit_url';
import postData from './post_geoNames';
import exposeWeatherIoForecast from './weatherbit_data';
import weatherBitData from './Post_weatherbit';
import getPixabayURL from './PixabayURL';
import exposePixabayData from './pixabayData';
import pixabayData from './post_pixabay';
import userInterface from './userInterface';

export function main() {
  document.getElementById('search').addEventListener('click', (event) => {
    event.preventDefault();
    const baseURL = 'http://api.geonames.org/searchJSON?q=';
    const API_Credentials = '&username=muhammedkhairy';
    const destination = document.querySelector('#destination').value;

    if (checkDestinationAndDate() && daysRemaining()) {
      console.log('good work');
      geoNamesData(baseURL, destination, API_Credentials).then((data) => {
        //console.log(data);
        postData('/geoNamesData', {
          cityName: data.name,
          countryName: data.countryName,
          latitude: data.lat,
          longitude: data.lng,
        });
      });
      getWeatherIoURL('/weatherURL').then((data) => {
        //console.log(data);
        exposeWeatherIoForecast(data).then((data) => {
          weatherBitData('/weatherbit', {
            date: data.datetime,
            highTemperature: data.max_temp,
            lowTemperature: data.low_temp,
            weather: data.weather.description,
          });
        });
      });
      getPixabayURL('/pixabayURL').then((data) => {
        exposePixabayData(data).then((data) => {
          pixabayData('/pixabay', {
            imageURL: data.webformatURL,
          });
        });
      });
      userInterface();
    } else {
      //alert('Check your inputs');
      console.log('Failed');
    }
  });
}
