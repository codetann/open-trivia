import { VStack, useStyleConfig } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

export function Page({ children }: Props) {
  const styles = useStyleConfig("Page");

  return (
    <VStack as="main" sx={styles}>
      {children}
    </VStack>
  );
}

{
  /* <VStack
as="main"
sx={styles}
align="center"
justify="start"
p={6}
minH="100vh"
w="100%"
>
{children}
</VStack> */
}
