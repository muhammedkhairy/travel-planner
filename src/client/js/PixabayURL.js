//get pixabay url with parameters from server-side
const getPixabayURL = async (url) => {
  const response = await fetch(url);
  try {
    const data = await response.text();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default getPixabayURL;
