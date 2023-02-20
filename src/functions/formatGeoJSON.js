const formatGeoJSON = (route) => {
  const geoJSON = {
    type: "Feature",
    properties: {},
    geometry: route.geometry,
  };
  return geoJSON;
};

module.exports = formatGeoJSON;
