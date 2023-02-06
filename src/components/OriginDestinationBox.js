import { useState } from "react";
import { Box, Button, ButtonGroup, HStack, Text } from "@chakra-ui/react";

const OriginDestinationBox = () => {
  const [originSelect, setOriginSelect] = useState(false);
  const [origin, setOrigin] = useState(null);
  const [destinationSelect, setdestinationSelect] = useState(false);
  const [destination, setDestination] = useState(null);
  return (
    <Box p={4} borderRadius="lg" bgColor="tomato">
      <HStack>
        <Button colorScheme="blue">Select Origin</Button>
        <Text> {`Origin is ${origin}`} </Text>
      </HStack>
      <HStack>
        <Button colorScheme="green">Select Destination</Button>
        <Text> {`Destination is ${destination}`} </Text>
      </HStack>
    </Box>
  );
};

export default OriginDestinationBox;
