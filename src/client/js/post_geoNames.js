//store our grabbed data from geonames api
const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  try {
    const extractedData = await response.json();
    //console.log(extractedData);
    return extractedData;
  } catch (error) {
    console.error(error);
  }
};

export default postData;
