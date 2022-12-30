import {
  PixelRatio,
  Dimensions,
  ViewStyle,
  TextStyle,
  StyleSheet,
  ImageStyle,
} from "react-native";

const ratio = PixelRatio.get();

export const normalize = (size: number): number => {
  const { width, height } = Dimensions.get("window");

  if (ratio >= 2 && ratio < 3) {
    if (width < 360) {
      return size * 0.95;
    } else if (height < 667) {
      return size;
    } else if (height >= 667 && height <= 735) {
      return size * 1.15;
    }

    return size * 1.25;
  } else if (ratio >= 3 && ratio < 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.15;
    } else if (height >= 667 && height <= 735) {
      return size * 1.2;
    }

    return size * 1.27;
  } else if (ratio >= 3.5) {
    if (width < 360) {
      return size;
    } else if (height < 667) {
      return size * 1.2;
    } else if (height >= 667 && height <= 735) {
      return size * 1.25;
    }

    return size * 1.4;
  }

  return size;
};

type AllStyles = ViewStyle | TextStyle | ImageStyle;
type TargetTextProperties = keyof Pick<TextStyle, "fontSize">;
type TargetViewProperties = keyof Pick<
  ViewStyle,
  | "margin"
  | "marginBottom"
  | "marginTop"
  | "marginLeft"
  | "marginRight"
  | "marginHorizontal"
  | "marginVertical"
  | "padding"
  | "paddingTop"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight"
  | "paddingHorizontal"
  | "paddingVertical"
  | "height"
  | "maxHeight"
  | "minHeight"
  | "width"
  | "maxWidth"
  | "minWidth"
>;

const targetProperties: Array<TargetTextProperties | TargetViewProperties> = [
  "fontSize",
  "margin",
  "marginHorizontal",
  "marginVertical",
  "padding",
  "paddingVertical",
  "paddingHorizontal",
  "height",
  "width",
];

export const scaledStylesheet = (styles: Record<string, AllStyles>) => {
  const normalizedStyles = {} as Record<string, AllStyles>;
  Object.keys(styles).forEach((styleKey) => {
    let normalizedStyle = {} as any;
    Object.keys(styles[styleKey]).forEach((property) => {
      let styleProperty = property as
        | TargetTextProperties
        | TargetViewProperties;

      if (targetProperties.includes(styleProperty)) {
        const stylePropertyValue = (styles[styleKey] as ViewStyle & TextStyle)[
          styleProperty
        ];
        if (stylePropertyValue && typeof stylePropertyValue === "number") {
          normalizedStyle[property] = normalize(stylePropertyValue);
        } else {
          normalizedStyle[property] = stylePropertyValue;
        }
      } else {
        normalizedStyle[property] =
          styles[styleKey][property as keyof AllStyles];
      }
    });
    normalizedStyles[styleKey] = normalizedStyle;
  });
  console.log(normalizedStyles);
  return StyleSheet.create(normalizedStyles);
};
