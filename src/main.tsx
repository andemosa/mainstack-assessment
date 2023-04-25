import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const colors = {
  brand: {
    900: "#eff1f6",
    800: "#ff5403",
    700: "#31373d",
    600: "#FFDDCD",
  },
};

const breakpoints = {
  sm: "320px",
  smm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1536px",
};

const fonts = {
  body: "Rubik, sans-serif",
  heading: "Rubik, sans-serif",
};

const theme = extendTheme({ colors, breakpoints, fonts });

const rootElement = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
