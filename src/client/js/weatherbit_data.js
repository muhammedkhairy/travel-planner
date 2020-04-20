//grab weather forecast
const exposeWeatherIoForecast = async (url) => {
  const response = await fetch(url);
  try {
    const weatherForecast = await response.json();
    console.log(weatherForecast.data[0]);
    return weatherForecast.data[0]
  } catch (error) {
    console.error(error);
  }
};

export default exposeWeatherIoForecast;
