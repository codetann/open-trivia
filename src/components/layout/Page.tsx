import { VStack } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode[] | React.ReactNode;
}

export function Page({ children }: Props) {
  return (
    <VStack
      as="main"
      align="center"
      justify="start"
      p={6}
      minH="100vh"
      w="100%"
    >
      {children}
    </VStack>
  );
}
