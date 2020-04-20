export default function checkDestinationAndDate() {
  const destination = document.querySelector('#destination').value;
  const tripDate = new Date(document.getElementById('date').value);
  let returnValue = false;
  const isDestinationFilled = !!destination;
  const isTripDateFilled = !!(tripDate && Date.parse(tripDate));

  if (!isDestinationFilled && !isTripDateFilled) {
    alert('Enter a destination and a date');
  } else if (isDestinationFilled && !isTripDateFilled) {
    alert("You didn't choose a date");
  } else if (!isDestinationFilled && isTripDateFilled) {
    alert("You didn't choose a destination");
  } else if (isDestinationFilled && Date.parse(tripDate) < new Date()) {
    alert('Please pick a future date');
  } else {
    returnValue = true;
    //console.log(destination);
  }

  return returnValue;
}
