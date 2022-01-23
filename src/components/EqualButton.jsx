import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../ContextProvider";

export default function EqualButton(props) {
  const { states, functions } = useContext(AppContext);
  const { gvbot } = functions;
  const { display, setDisplay} = states

  const handleEqualBtn = () => {
    setDisplay(eval(display).toString())
  }

  return (
    <Button
      {...props}
      display="block"
      w="full"
      h={["60px", "60px", "50px"]}
      bg={gvbot("#CF3F30", "#C75306", "#00DCCE")}
      boxShadow={gvbot("0px 4px #92261C", "0px 4px #843703", "0px 4px #6DF8EF")}
      _hover={{
        bg: gvbot("#DF4F40", "#D76316", "#10ECDE"),
      }}
      _active={{
        boxShadow: "none",
        transition: "all 0.01s",
        transform: "translate(0, 3px)",
      }}
      color={gvbot("white", "white", "black")}
      fontSize="3xl"
      border="none"
      pt="5px"
      onClick={handleEqualBtn}
    >
      {props.text}
    </Button>
  );
}
