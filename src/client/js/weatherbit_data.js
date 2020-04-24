//grab weather forecast
const exposeWeatherIoForecast = async (url) => {
  const response = await fetch(url);
  try {
    const weatherForecast = await response.json();
    const tripDate = new Date(document.getElementById('date').value);
    const lastDayForecast =weatherForecast.data[15].datetime;
    const dayData = weatherForecast.data.find(day => {
      if (Date.parse(day.datetime) == Date.parse(tripDate)){
        return Date.parse(day.datetime);
      }
    })
    //console.log (dayData);
    if (Date.parse(lastDayForecast) < Date.parse(tripDate)){
      return (weatherForecast.data[15]);
    } else {
      return dayData;
    }

    //return dayData;
  } catch (error) {
    console.error(error);
  }
};

export default exposeWeatherIoForecast;
