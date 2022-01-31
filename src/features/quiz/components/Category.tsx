import { useState } from "react";
import { motion } from "framer-motion";
import { VStack, Text, useStyleConfig } from "@chakra-ui/react";
import * as icons from "react-icons/fa";
/**
 * @component
 *
 * @description
 *  Component used to display a quiz category.
 *  When clicked, it will navigate to the quiz setup page.
 *
 * @return {JSX.Element}
 *
 * TODO: decide how info is passed to the setup page. (store or url).
 * TODO: implement unused props.
 */

interface Props {
  onClick: () => void;
  title: string;
  code: number;
  icon: any;
}

export function Category({ title, onClick, code, icon: Icon }: Props) {
  const [isHovered, setHovered] = useState(false);
  const styles = useStyleConfig("Card");

  return (
    <motion.div
      animate={{ scale: isHovered ? 0.95 : 1, x: isHovered ? -50 : 0 }}
    >
      <VStack
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        borderRadius="md"
        sx={styles}
        w="10rem"
        h="10rem"
      >
        <Text>{title}</Text>
        <Icon />
      </VStack>
    </motion.div>
  );
}
