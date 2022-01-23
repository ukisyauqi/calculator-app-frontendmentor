import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Spartan, sans-serif",
  },
  colors: {
    krem: {
      50: "#f3f1ec",
      100: "#f1eee8",
      200: "#eeebe4",
      300: "#ece9e1",
      400: "#e9e6dd",
      500: "#e7e3d9",
      600: "#d0ccc3",
      700: "#b9b6ae",
      800: "#a29f98",
      900: "#8b8882",
    },
  },
  shadows: {
    outline: "0 0 0 1px blue"
  },
  components: {
    Button: {
      baseStyle: {
        _focus: {
          boxShadow: ""
        }
      },
    }
  }
});

export default theme;
