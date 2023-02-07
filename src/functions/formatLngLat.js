const formatLngLat = (input) => {
  const tempArray = input.split(", ");
  tempArray[0] = tempArray[0].slice(7);
  tempArray[1] = tempArray[1].slice(0, -1);
  return tempArray.join("%2C");
};

module.exports = formatLngLat;
