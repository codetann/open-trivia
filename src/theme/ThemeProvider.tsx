import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { components } from "./components";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components,
  colors: {
    monochrome: {
      "off-black": "#14142B",
      ash: "#262338",
      body: "#4E4B66",
      label: "#6E7191",
      placehold: "#A0A3BD",
      line: "#D9DBE9",
      input: "#EFF0F6",
      bg: "#F7F7FC",
      "off-white": "#FCFCFC",
    },
    primary: {
      bg: "#EBECFE",
      light: "#BFBEFC",
      darkMode: "#A996FF",
      default: "#610BEF",
      dark: "#4700AB",
    },
    success: {
      bg: "#CBFFAE",
      light: "#EAF9DE",
      darkMode: "#A6F787",
      default: "#008A00",
      dark: "#067306",
    },
    warning: {
      bg: "#FFE6B0",
      light: "#FFF8E9",
      darkMode: "#FFDF9A",
      default: "#EAAC30",
      dark: "#946300",
    },

    dark: {
      primary: "#14142B",
      body: "#4E4B66",
      label: "#6E7191",
    },

    bg: {
      dark: {
        default: "#100F10",
      },
    },
  },
});

export function ThemeProvider({ children }: any) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
