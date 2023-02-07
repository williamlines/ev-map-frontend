const formatLngLat = require("./formatLngLat");
// getDirections("-84.518641%2C39.134270", "-84.512023%2C39.102779");
describe("function formatLngLat", () => {
  it("can format a lngLat coordinate correctly for the api", () => {
    const res = formatLngLat("LngLat(-71.19823089390736, 42.39532732213979)");
    expect(res).toEqual("-71.19823089390736%2C42.39532732213979");
  });
});
