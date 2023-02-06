async function getDirections(origin, destination) {
  const res = await fetch(
    `https://q7bxcdafs9.execute-api.eu-west-2.amazonaws.com/prod/directions?origin=${origin}&destination=${destination}`
  );
  const data = await res.json();
  console.log(data);
  console.log(data.message.routes[0].geometry.coordinates);
  return;
}
// getDirections("-84.518641%2C39.134270", "-84.512023%2C39.102779");
module.exports = getDirections()
