//get weather bit url with parameters from server-side
const getWeatherIoURL = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.text();
    //console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default getWeatherIoURL;
