import { FontSize, FontWeight } from "@constants/Fonts";
import { AllFontSizes, AllFontVariations } from "@typings/fonts";
import { TextStyle } from "react-native";

export type GetFontPropKeys = ["variation", "size", "customStyle"];

type GetFontProps = [
  variation: AllFontVariations,
  size: AllFontSizes,
  customStyle?: TextStyle
];

const getFont = (...args: GetFontProps): TextStyle => {
  const [variation, size, customStyle] = args;
  return {
    fontFamily: FontWeight[variation],
    fontSize: FontSize[size],
    ...(customStyle || {}),
  };
};

export default getFont;
