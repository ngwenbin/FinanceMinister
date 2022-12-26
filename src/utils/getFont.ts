import { TextStyle } from "react-native";

type getEnumKeys<T> = keyof T;

enum FontSize {
  "2xs" = 10,
  "xs" = 12,
  "sm" = 14,
  "md" = 16,
  "lg" = 18,
  "xl" = 20,
  "2xl" = 24,
  "3xl" = 30,
}

enum FontWeight {
  "light" = "Inter_300Light",
  "regular" = "Inter_400Regular",
  "medium" = "Inter_500Medium",
  "semibold" = "Inter_600SemiBold",
  "bold" = "Inter_700Bold",
  "extrabold" = "Inter_800ExtraBold",
}

const getFont = (
  variation: getEnumKeys<typeof FontWeight>,
  size: getEnumKeys<typeof FontSize>
): TextStyle => {
  return {
    fontFamily: FontWeight[variation],
    fontSize: FontSize[size],
  };
};

export default getFont;
