import { StackProps } from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

interface CardConfig {
  baseStyle: StyleConfig["baseStyle"];
  defaultProps: StackProps;
}

export const Card: CardConfig = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === "light" ? "monochrome.bg" : "monochrome.ash",
  }),
  defaultProps: {
    align: "center",
    justify: "start",
    p: 6,
    minH: "100vh",
    w: "100%",
  },
};
