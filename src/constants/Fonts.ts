import { getFont, GetFontPropKeys } from "@utils";
import { TupleToObjectInheritKeyNames } from "@utils/tsHelpers";

export enum FontSize {
  "2xs" = 10,
  "xs" = 12,
  "sm" = 14,
  "md" = 16,
  "lg" = 18,
  "xl" = 20,
  "2xl" = 24,
  "3xl" = 30,
}

export enum FontWeight {
  "light" = "Inter_300Light",
  "regular" = "Inter_400Regular",
  "medium" = "Inter_500Medium",
  "semibold" = "Inter_600SemiBold",
  "bold" = "Inter_700Bold",
  "extrabold" = "Inter_800ExtraBold",
}

type CustomTextStyleProps = Record<
  string,
  TupleToObjectInheritKeyNames<Parameters<typeof getFont>, GetFontPropKeys>
>;

const textHeadings: CustomTextStyleProps = {
  h3: {
    variation: "semibold",
    size: "lg",
  },
};

const textDisplays: CustomTextStyleProps = {
  "display-small": {
    variation: "semibold",
    size: "md",
  },
  "display-large": {
    variation: "semibold",
    size: "2xl",
  },
};

const textSubHeadings: CustomTextStyleProps = {
  "subhead-small": {
    variation: "medium",
    size: "xs",
  },
};

const textBody: CustomTextStyleProps = {
  "body-regular": {
    variation: "regular",
    size: "xs",
  },
};

export const TextVariantsData: CustomTextStyleProps = {
  caption: {
    variation: "regular",
    size: "2xs",
  },
  ...textDisplays,
  ...textHeadings,
  ...textSubHeadings,
  ...textBody,
};

export type TextVariants = keyof typeof TextVariantsData;
