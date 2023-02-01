import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import OriginDestinationBox from "./components/OriginDestinationBox";

import { ChakraProvider, Box } from "@chakra-ui/react";

const token = require("./token.js");

mapboxgl.accessToken = token;
function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <ChakraProvider>
      <Box position="absolute" left={0} top={0} h="calc(100vh)" w="100%" z="-1">
        <OriginDestinationBox></OriginDestinationBox>
        <div z="-1" ref={mapContainer} className="map-container" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
