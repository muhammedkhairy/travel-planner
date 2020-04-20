export default function daysRemaining() {
  const today = new Date(); //today date
  const tripDate = new Date(document.getElementById('date').value); //trip date entered by user
  if (tripDate > today) {
    const isRemaining = Math.ceil(
      Math.abs(tripDate - today) / (1000 * 60 * 60 * 24)
    );
    //console.log(isRemaining);

    return !!isRemaining;
  }

  return false;
}
