async function getDirections(origin, destination) {
  const res = await fetch(
    `https://q7bxcdafs9.execute-api.eu-west-2.amazonaws.com/prod/directions?origin=${origin}&destination=${destination}`
  );
  const data = await res.json();
  console.log(data);
  console.log(data.message.routes[0].geometry.coordinates);
  return;
}
module.exports = getDirections();
