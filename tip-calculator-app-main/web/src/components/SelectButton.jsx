import { useMemo } from "react";
import { Button } from "@chakra-ui/react";

export default function SelectButton({
  index,
  value,
  setTip,
  selectedTipIndex,
  setSelectedTipIndex,
}) {
  const isSelected = useMemo(
    () => selectedTipIndex === index,
    [selectedTipIndex, index]
  );

  function handleClick() {
    if (isSelected) {
      setSelectedTipIndex();
      setTip(0);
    } else {
      setSelectedTipIndex(index);
      setTip(value);
    }
  }

  return (
    <Button
      p={6}
      onClick={handleClick}
      fontSize="2xl"
      color={isSelected ? "darkCyan.800" : "white"}
      bgColor={isSelected ? "strongCyan.400" : "darkCyan.800"}
      width="full"
      _active={{
        color: "darkCyan.800",
        bgColor: "strongCyan.400",
      }}
      _hover={{
        color: "darkCyan.800",
        bgColor: "strongCyan.400",
      }}
    >
      {value}%
    </Button>
  );
}
