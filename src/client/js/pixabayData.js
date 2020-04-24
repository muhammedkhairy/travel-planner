//grab weather forecast
const exposePixabayData = async (url) => {
  const response = await fetch(url);
  try {
    const pixabayData = await response.json();
    //console.log(pixabayData.hits[0]);
    return pixabayData.hits[0];
  } catch (error) {
    console.error(error);
  }
};

export default exposePixabayData;
