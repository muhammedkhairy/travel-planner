const weatherBitData = async(url= '', data = {}) => {
  const response = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  try {
    const weatherData = await response.json();
    console.log(weatherData);
    return weatherData;
  } catch (error) {
    console.log('error');
  }
};

export default weatherBitData