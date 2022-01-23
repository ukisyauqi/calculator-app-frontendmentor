import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import "./style.css";
import { AppProvider } from "./ContextProvider.jsx";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AppProvider>
        <App />
      </AppProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
