const userInterface = async () => {
  const tripDate = new Date(document.getElementById('date').value);
  const returnDate = new Date(document.getElementById('r-date').value);
  const destination = document.querySelector('#destination').value;
  const response = await fetch('/all');
  try {
    const HTMLdata = await response.json();
    console.log(HTMLdata);
    document.querySelector('.results__container').style.display = 'block';
    document.querySelector('.results__container').innerHTML = `
    <h2>Your trip results</h2>
    <div class="result">
      <div class="info__photo">
        <img
          src="${HTMLdata.pixabayLink.imageURL}"
          alt="your_destination_${destination}" class="destination">
        <a href= "https://en.wikipedia.org/wiki/${destination}"class="btn" target="_blank">Check your destination</a>
      </div>
      <div class="result__data">
        <p class="bold">You are going to:<span> ${
          HTMLdata.weatherData.cityName
        }, ${HTMLdata.weatherData.countryName}</span></p>
        <p class="bold">you are departing in: ${tripDate.getDate()}/${
      tripDate.getMonth() + 1
    }/${tripDate.getFullYear()}</p>
        <p class="bold">your trip period is : ${Math.ceil(
          Math.abs(returnDate - tripDate) / (1000 * 60 * 60 * 24)
        )} days</p>
        <hr>
        <p>your destination is ${Math.ceil(
          Math.abs(tripDate - new Date()) / (1000 * 60 * 60 * 24)
        )} days away from today </p>
        <p>Typical weather for this time is: 
          <div class="weather_data"> High: ${
            HTMLdata.weatherInfo.highTemperature
          }, Low: ${HTMLdata.weatherInfo.lowTemperature}</div> 
          <div class="weather_data">${
            HTMLdata.weatherInfo.weather
          } through out this day.</div>
        </p>
      </div>
    </div>
    `;
  } catch (error) {
    console.error('error');
  }
};

export default userInterface;
