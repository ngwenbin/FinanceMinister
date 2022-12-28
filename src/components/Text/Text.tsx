import {
  Text as DefaultText,
  View,
  TextProps as DefaultTextProps,
} from "react-native";

import type { TextVariants } from "@constants/Fonts";
import { TextVariantsData } from "@constants/Fonts";
import { getFont } from "@utils";

interface TextProps extends DefaultTextProps {
  variant?: TextVariants;
  color?: string;
}

const Text = ({ color, variant = "body-regular", ...props }: TextProps) => {
  const { variation, size, customStyle } = TextVariantsData[variant];

  return (
    <View>
      <DefaultText
        style={[{ color }, getFont(variation, size, customStyle), props]}
      >
        Text
      </DefaultText>
    </View>
  );
};

export default Text;
