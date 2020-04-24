const pixabayData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const pixabayData = await response.json();
    console.log(pixabayData);
    return pixabayData;
  } catch (error) {
    console.log('error');
  }
};

export default pixabayData;
