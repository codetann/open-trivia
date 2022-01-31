import { StackProps } from "@chakra-ui/react";
import { StyleConfig } from "@chakra-ui/theme-tools";

interface PageConfig {
  baseStyle: StyleConfig["baseStyle"];
  defaultProps: StackProps;
}

export const Page: PageConfig = {
  baseStyle: ({ colorMode }) => ({
    bg: colorMode === "light" ? "monochrome.off-white" : "monochrome.off-black",
  }),
  defaultProps: {
    align: "center",
    justify: "start",
    p: 6,
    minH: "100vh",
    w: "100%",
  },
};
