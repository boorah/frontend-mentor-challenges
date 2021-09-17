import React, { useMemo, useState } from "react";
import {
  Button,
  SimpleGrid,
  Flex,
  Grid,
  Text,
  Box,
  Input,
  InputLeftElement,
  InputGroup,
  VStack,
} from "@chakra-ui/react";
import { BiDollar } from "react-icons/bi";
import { MdPerson } from "react-icons/md";

import SelectButton from "./SelectButton";

const tipValues = [5, 10, 15, 25, 50];

export default function CalculatorCard() {
  const [billAmount, setBillAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [peopleCount, setPeopleCount] = useState(0);
  const [selectedTipIndex, setSelectedTipIndex] = useState();

  const tipAmountPerPerson = useMemo(() => {
    const tipInt = customTip ? Number(customTip) : Number(tip);
    const billAmountInt = Number(billAmount);
    const peopleCountInt = Number(peopleCount);

    if (peopleCountInt === 0) {
      return 0;
    }

    const tipAmount = (tipInt / 100) * billAmountInt;
    const perPerson = tipAmount / peopleCountInt;

    return perPerson;
  }, [billAmount, tip, customTip, peopleCount]);

  const totalPerPerson = useMemo(() => {
    const billAmountInt = Number(billAmount);
    const peopleCountInt = Number(peopleCount);

    if (peopleCountInt === 0) {
      return 0;
    }

    const perPerson = billAmountInt / peopleCountInt;

    return perPerson;
  }, [billAmount, peopleCount]);

  function resetValues() {
    setBillAmount(0);
    setSelectedTipIndex();
    setTip(0);
    setPeopleCount(0);
    setCustomTip(0);
  }

  function onBillAmountChange(event) {
    setBillAmount(event.target.value);
  }

  function onCustomTipChange(event) {
    setCustomTip(event.target.value);
  }

  function onPeopleCountChange(event) {
    setPeopleCount(event.target.value);
  }

  return (
    <Grid
      maxW="container.md"
      width="full"
      flexGrow={[1, 1, 0]}
      roundedTop="3xl"
      roundedBottom={[null, null, "3xl"]}
      padding={8}
      templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]}
      bgColor="white"
      gap={8}
    >
      <VStack alignItems="stretch" spacing={6}>
        <Box>
          <Text variant="label">Bill</Text>
          <InputGroup mt={2}>
            <InputLeftElement fontSize="xl">
              <BiDollar color="gray" />
            </InputLeftElement>
            <Input
              textAlign="right"
              type="number"
              value={billAmount}
              onChange={onBillAmountChange}
            />
          </InputGroup>
        </Box>

        <Box>
          <Text variant="label">Select Tip %</Text>
          <SimpleGrid mt={4} columns={[2, 2, 3]} gap={4}>
            {tipValues.map((value, index) => (
              <SelectButton
                key={index}
                index={index}
                value={value}
                setTip={setTip}
                selectedTipIndex={selectedTipIndex}
                setSelectedTipIndex={setSelectedTipIndex}
              />
            ))}
            <Input
              value={customTip}
              onChange={onCustomTipChange}
              textAlign="right"
              type="number"
              p={6}
              placeholder="Custom"
              _placeholder={{ fontSize: "sm" }}
            />
          </SimpleGrid>
        </Box>

        <Box>
          <Flex justifyContent="space-between">
            <Text variant="label">Number of People</Text>
            {peopleCount === "0" && (
              <Text color="brown.300" fontSize="sm" fontWeight="semibold">
                Can't be Zero
              </Text>
            )}
          </Flex>
          <InputGroup mt={2}>
            <InputLeftElement fontSize="xl">
              <MdPerson color="gray" />
            </InputLeftElement>
            <Input
              textAlign="right"
              type="number"
              value={peopleCount}
              onChange={onPeopleCountChange}
              errorBorderColor="brown.300"
              isInvalid={peopleCount === "0"}
            />
          </InputGroup>
        </Box>
      </VStack>

      <VStack
        rounded="2xl"
        pt={8}
        px={[4, 4, 8]}
        pb={[4, 4, 8]}
        bgColor="darkCyan.800"
        alignItems="stretch"
        justifyContent="space-between"
        spacing={6}
      >
        <VStack alignItems="stretch" spacing={8}>
          <Flex justifyContent="space-between">
            <Box>
              <Text color="strongCyan.50" fontWeight="semibold">
                Tip Amount
              </Text>
              <Text fontSize="sm" fontWeight="semibold" color="grayishCyan.500">
                / person
              </Text>
            </Box>
            <Text
              color="strongCyan.400"
              fontSize="3xl"
              fontWeight="semibold"
              isTruncated
            >
              ${tipAmountPerPerson.toFixed(2)}
            </Text>
          </Flex>

          <Flex justifyContent="space-between">
            <Box>
              <Text fontSize="sm" color="strongCyan.50" fontWeight="semibold">
                Total
              </Text>
              <Text fontSize="sm" fontWeight="semibold" color="grayishCyan.500">
                / person
              </Text>
            </Box>
            <Text color="strongCyan.400" fontSize="3xl" fontWeight="semibold">
              ${totalPerPerson.toFixed(2)}
            </Text>
          </Flex>
        </VStack>

        <Button
          onClick={resetValues}
          bgColor="strongCyan.400"
          color="darkcyan.800"
        >
          RESET
        </Button>
      </VStack>
    </Grid>
  );
}
