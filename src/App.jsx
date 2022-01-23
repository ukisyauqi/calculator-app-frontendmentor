import {
  Box,
  Center,
  Flex,
  Text,
  Spacer,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useContext } from "react";
import Display from "./components/Display";
import EqualButton from "./components/EqualButton";
import NumOperatorButton from "./components/NumOperatorButton";
import ResetDelButton from "./components/ResetDelButton";
import { AppContext } from "./ContextProvider";

export default function App() {
  const { states, functions } = useContext(AppContext);
  const { tema, setTema } = states;
  const { gvbot } = functions;

  const switchTema = () => {
    setTema(tema + 1);
    if (tema > 2) setTema(1);
  };

  return (
    <>
      <Center
        minW="374px"
        h="100vh"
        bg={gvbot("#3A4563", "#E5E5E5", "#170629")}
        fontWeight="bold"
        overflow="hidden"
      >
        <Box
          w={["374px", "374px", "490px"]}
          px="25px"
          py={["20px", "20px", "25px"]}
          color={gvbot("white", "black", "#FAE13C")}
        >
          <Flex>
            <Text fontSize="2xl">calc</Text>
            <Spacer />
            <Text
              fontWeight="light"
              mr="30px"
              fontSize="sm"
              position="relative"
              top="29px"
            >
              THEME
            </Text>
            <Box>
              <Box onClick={switchTema}>
                <Flex gap="15px" justifyContent="center" fontSize="sm">
                  <Text>1</Text>
                  <Text>2</Text>
                  <Text>3</Text>
                </Flex>
                <Box
                  w="70px"
                  h="25px"
                  bg={gvbot("#242C43", "#D2CCCC", "#1D0935")}
                  borderRadius="full"
                  pt="3px"
                  px="3px"
                  userSelect="none"
                >
                  <Box
                    bg="#CF3F30"
                    borderRadius="full"
                    w="19px"
                    h="19px"
                    transform={gvbot(
                      "translate(0px)",
                      "translate(23px)",
                      "translate(44px)"
                    )}
                  ></Box>
                </Box>
              </Box>
            </Box>
          </Flex>

          <Display />

          <Box
            w="full"
            h="400px"
            p="25px"
            bg={gvbot("#242C43", "#D2CCCC", "#1D0935")}
            my={["15px", "15px", "25px"]}
            borderRadius="10px"
          >
            <Grid
              h="full"
              templateRows="repeat(5, 1fr)"
              templateColumns="repeat(4, 1fr)"
              gap={["12px", "12px", "25px"]}
            >
              <NumOperatorButton text="7" />
              <NumOperatorButton text="8" />
              <NumOperatorButton text="9" />
              <ResetDelButton text="DEL" />
              <NumOperatorButton text="4" />
              <NumOperatorButton text="5" />
              <NumOperatorButton text="6" />
              <NumOperatorButton text="+" />
              <NumOperatorButton text="1" />
              <NumOperatorButton text="2" />
              <NumOperatorButton text="3" />
              <NumOperatorButton text="-" />
              <NumOperatorButton text="." />
              <NumOperatorButton text="0" />
              <NumOperatorButton text="/" />
              <NumOperatorButton text="x" />
              <GridItem colSpan={2}>
                <ResetDelButton text="RESET" />
              </GridItem>
              <GridItem colSpan={2}>
                <EqualButton text="=" />
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Center>
    </>
  );
}
