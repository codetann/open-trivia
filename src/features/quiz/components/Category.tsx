import { useState } from "react";
import { motion } from "framer-motion";
import { VStack, Text } from "@chakra-ui/react";
/**
 * @component
 *
 * @description
 *   Component used to display a quiz category.
 *   When clicked, it will navigate to the quiz setup page.
 *
 * TODO: decide how info is passed to the setup page. (store or url)
 */

interface Props {
  onClick: () => void;
  title: string;
  code: number;
  icon?: JSX.Element;
}

export function Category({ title, onClick, code, icon }: Props) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      animate={{ scale: isHovered ? 0.95 : 1, x: isHovered ? -50 : 0 }}
    >
      <VStack
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        borderRadius="md"
        bg="whiteAlpha.100"
        w="10rem"
        h="10rem"
      >
        <Text>{title}</Text>
      </VStack>
    </motion.div>
  );
}
