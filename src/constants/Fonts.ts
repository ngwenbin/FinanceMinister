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

type CustomTextStyleProps<T extends string> = Record<
  T,
  TupleToObjectInheritKeyNames<Parameters<typeof getFont>, GetFontPropKeys>
>;

const textHeadings: CustomTextStyleProps<"h3"> = {
  h3: {
    variation: "semibold",
    size: "lg",
  },
};

const textDisplays: CustomTextStyleProps<"display-small" | "display-large"> = {
  "display-small": {
    variation: "semibold",
    size: "md",
  },
  "display-large": {
    variation: "semibold",
    size: "2xl",
  },
};

const textSubHeadings: CustomTextStyleProps<
  "subhead-small" | "subhead-regular"
> = {
  "subhead-small": {
    variation: "medium",
    size: "xs",
  },
  "subhead-regular": {
    variation: "medium",
    size: "sm",
  },
};

const textBody: CustomTextStyleProps<
  "body-regular" | "body-small" | "body-medium"
> = {
  "body-regular": {
    variation: "regular",
    size: "xs",
  },
  "body-small": {
    variation: "regular",
    size: "sm",
  },
  "body-medium": {
    variation: "regular",
    size: "md",
  },
};

const textOther: CustomTextStyleProps<"caption"> = {
  caption: {
    variation: "regular",
    size: "2xs",
  },
};

export const TextVariantsData = {
  ...textOther,
  ...textDisplays,
  ...textHeadings,
  ...textSubHeadings,
  ...textBody,
};

export type TextVariants = keyof typeof TextVariantsData;
