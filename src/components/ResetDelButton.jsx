import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../ContextProvider";

export default function ResetDelButton(props) {
  const { states, functions } = useContext(AppContext);
  const { gvbot } = functions;
  const { display, setDisplay } = states
  
  const handleResetDelBtn = () => {
    if (props.text === "DEL") setDisplay(display.slice(0,-1))
    else setDisplay("")
  }

  return (
    <Button
      {...props}
      display="block"
      w="full"
      minH={["60px", "60px", "50px"]}
      bg={gvbot("#525C7C", "#2E6B70", "#560A7A")}
      boxShadow={gvbot("0px 4px #424E72", "0px 4px #1B5F66", "0px 4px #C01CF3")}
      _hover={{
        bg: gvbot("#626C8C", "#3E7B80", "#661A8A"),
      }}
      _active={{
        boxShadow: "none",
        transition: "all 0.01s",
        transform: "translate(0, 3px)",
      }}
      color="white"
      border="none"
      pt="5px"
      onClick={handleResetDelBtn}
    >
      {props.text}
    </Button>
  );
}
