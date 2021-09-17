import { extendTheme, withDefaultVariant } from "@chakra-ui/react";

const backgroundColor = "hsl(185, 41%, 84%)";

const defaultInputStyle = {
  variants: {
    filled: {
      field: {
        px: 4,
        py: 3,
        fontWeight: "bold",
        fontSize: "2xl",
        _focus: {
          borderColor: "strongCyan.500",
        },
      },
    },
  },
};

const textLabelVariantStyle = {
  color: "gray.500",
  fontWeight: "semibold",
};

export const customTheme = extendTheme(
  {
    styles: {
      global: {
        html: {
          height: "100%",
        },
        body: {
          height: "100%",
          backgroundColor,
        },
        "#root": {
          boxSizing: "border-box",
          height: "100%",
        },
      },
    },
    fonts: {
      heading: "Space Mono",
      body: "Space Mono",
    },
    colors: {
      brown: {
        50: "#ffe7e7",
        100: "#f4c0c0",
        200: "#e79898",
        300: "#dc7071",
        400: "#d04848",
        500: "#b72f2f",
        600: "#8f2323",
        700: "#671819",
        800: "#400d0e",
        900: "#1d0101",
      },
      grayishCyan: {
        400: "#7c999c",
        500: "#638083",
        600: "#4b6367",
        700: "#34484a",
        800: "#1b2c2e",
      },
      strongCyan: {
        50: "#ddfef9",
        100: "#b8f4ec",
        200: "#91ebde",
        300: "#67e2d1",
        400: "#3fd9c4",
        500: "#26c0ab",
        600: "#169585",
        700: "#086b5f",
        800: "#004139",
        900: "#001814",
      },
      darkCyan: {
        50: "#deffff",
        100: "#b3fbff",
        200: "#86f7fe",
        300: "#5cf5fd",
        400: "#40f2fd",
        500: "#35d9e4",
        600: "#25a8b1",
        700: "#15787f",
        800: "#00494d",
        900: "#00191c",
      },
    },
    components: {
      Input: { ...defaultInputStyle },
      Text: {
        variants: {
          label: { ...textLabelVariantStyle },
        },
      },
    },
  },
  withDefaultVariant({
    variant: "filled",
    components: ["Input"],
  })
);
