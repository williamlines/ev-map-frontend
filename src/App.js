import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
// import OriginDestinationBox from "./components/OriginDestinationBox";
import {
  ChakraProvider,
  Box,
  Button,
  ButtonGroup,
  HStack,
  Text,
} from "@chakra-ui/react";

const token = require("./token.js");

mapboxgl.accessToken = token;
function App() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);
  const [clickLngLat, setClickLngLat] = useState(null);
  const [originSelect, setOriginSelect] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destinationSelect, setDestinationSelect] = useState(false);
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    map.current.on("click", (e) => {
      setClickLngLat(e.lngLat);
      if (originSelect) {
        setOrigin(clickLngLat);
        setOriginSelect(false);
      }
      if (destinationSelect) {
        setDestination(clickLngLat);
        setDestinationSelect(false);
      }
    });
    console.log(`lngLat is ${clickLngLat}`);
  });

  const handleOriginButton = () => {
    setOriginSelect(true);
    setDestinationSelect(false);
  };

  const handleDestinationButton = () => {
    setDestinationSelect(true);
    setOriginSelect(false);
  };

  const seeStates = () => {
    console.log(`originSelect is ${originSelect}`);
    console.log(`destinationSelect is ${destinationSelect}`);
  };

  const OriginDestinationBox = () => {
    return (
      <Box p={4} borderRadius="lg" bgColor="tomato">
        <HStack>
          <Button colorScheme="blue" onClick={handleOriginButton}>
            Select Origin
          </Button>
          <Text> {`Origin is ${origin}`} </Text>
        </HStack>
        <HStack>
          <Button colorScheme="green" onClick={handleDestinationButton}>
            Select Destination
          </Button>
          <Text> {`Destination is ${destination}`} </Text>
          <Button colorScheme="yellow" onClick={seeStates}>
            See States Debug
          </Button>
        </HStack>
      </Box>
    );
  };

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
