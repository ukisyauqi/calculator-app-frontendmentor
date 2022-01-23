import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../ContextProvider";

export default function NumOperatorButton(props) {
  const { states, functions } = useContext(AppContext);
  const { display, setDisplay } = states;
  const { gvbot } = functions;

  const handleNumBtnClick = () => {
    if (display.length === 0 && "+/x.".includes(props.text)) return;
    if (display.length === 1 && display === "-" && "+/x.".includes(props.text)) return
    if ("+/-*.".includes(display.slice(-1)) && "+/-x.".includes(props.text)) {
      if (props.text === "x") setDisplay(display.slice(0, -1) + "*");
      else setDisplay(display.slice(0, -1) + props.text);
    } else {
      if (props.text === "x") setDisplay(display + "*");
      else setDisplay(display + props.text);
    }
  };

  return (
    <Button
      {...props}
      display="block"
      w={["60px", "60px", "80px"]}
      h={["60px", "60px", "50px"]}
      bg={gvbot("#E9E2DA", "#E5E3E0", "#331B4C")}
      boxShadow={gvbot("0px 4px #B4A499", "0px 4px #A49C92", "0px 4px #851E9A")}
      _hover={{
        bg: gvbot("#F9F2EA", "#F5F3F0", "#432B5C"),
      }}
      _active={{
        boxShadow: "none",
        transition: "all 0.01s",
        transform: "translate(0, 3px)",
      }}
      color={gvbot("#4E5063", "#2C2B25", "#FAE13C")}
      fontSize="3xl"
      border="none"
      pt="5px"
      onClick={handleNumBtnClick}
    >
      {props.text}
    </Button>
  );
}
