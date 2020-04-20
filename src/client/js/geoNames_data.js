//grab data from geonames api
const geoNamesData = async (url, destination, api) => {
  const response = await fetch(url + destination + api);
  try {
    const data = await response.json();
    //console.log(data.geonames[0]);
    return data.geonames[0];
  } catch (error) {
    console.error(error);
  }
};

export default geoNamesData;
