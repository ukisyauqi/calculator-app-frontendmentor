import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../ContextProvider";

export default function Display(props) {
  const { states, functions } = useContext(AppContext);
  const { display } = states;
  const { gvbot } = functions;

  const [fontSizeDisplay, setFontSizeDisplay] = useState("4xl");

  const displayComp = useRef();

  useEffect(() => {
    if (displayComp.current.offsetWidth > "254") setFontSizeDisplay("3xl");
  }, [display]);

  return (
    <Box
      {...props}
      w="full"
      h="100px"
      bg={gvbot("#171E31", "#EDEDED", "#1D0935")}
      mt={["15px", "15px", "25px"]}
      borderRadius="10px"
      px="25px"
      py="5px"
    >
      <Flex h="full" justifyContent="flex-end" alignItems="center">
        <Text
          fontSize={fontSizeDisplay}
          maxW="full"
          maxH="full"
          overflow="hidden"
          ref={displayComp}
        >
          {display}
        </Text>
      </Flex>
    </Box>
  );
}
