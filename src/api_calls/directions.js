async function getDirections(lat, lng) {
  const res = await fetch(
    "https://q7bxcdafs9.execute-api.eu-west-2.amazonaws.com/prod/hello"
  );
  const data = await res.json();
  console.log(data);
  return;
}

getDirections(1, 2);
