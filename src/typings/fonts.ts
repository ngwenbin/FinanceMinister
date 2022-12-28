import { FontSize, FontWeight } from "@constants/Fonts";
import { getEnumKeys } from "@utils/tsHelpers";

export type AllFontVariations = getEnumKeys<typeof FontWeight>;
export type AllFontSizes = getEnumKeys<typeof FontSize>;
