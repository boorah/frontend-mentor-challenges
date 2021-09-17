import React from "react";
import { Flex } from "@chakra-ui/react";

import Logo from "./components/Logo";
import CalculatorCard from "./components/CalculatorCard";

export default function App() {
  return (
    <Flex
      px={[null, null, 4]}
      direction="column"
      height="full"
      alignItems="center"
      justifyContent={[null, null, "space-around"]}
    >
      <Logo />
      <CalculatorCard />
    </Flex>
  );
}
