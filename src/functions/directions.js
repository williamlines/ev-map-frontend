async function getDirections(origin, destination) {
  const res = await fetch(
    `https://r81mcfhivb.execute-api.eu-west-2.amazonaws.com/directions?origin=${origin}&destination=${destination}`
  );
  const data = await res.json();
  console.log(data);
  console.log(data.message.routes[0]);
  return data.message.routes[0]
}
// getDirections(
//   "-84.51864178349586%2C39.13427034692385",
//   "-84.512023%2C39.102779"
// );

module.exports = getDirections;
