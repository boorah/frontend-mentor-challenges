import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Flex
      my={8}
      direction="column"
      justifyContent={[null, null, "center"]}
      color="cyan.800"
      letterSpacing={6}
    >
      <Heading size="lg">SPLI</Heading>
      <Heading size="lg">TTER</Heading>
    </Flex>
  );
}
