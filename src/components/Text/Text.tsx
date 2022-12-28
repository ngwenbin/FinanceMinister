import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
} from "react-native";

import type { TextVariants } from "@constants/Fonts";
import { TextVariantsData } from "@constants/Fonts";
import { getFont } from "@utils";
import { testIds } from "@utils/tests/testIds";

interface TextProps extends DefaultTextProps {
  children: React.ReactNode;
  variant?: TextVariants;
  color?: string;
}

const Text = ({
  children,
  color,
  variant = "body-regular",
  ...props
}: TextProps) => {
  const { variation, size, customStyle } = TextVariantsData[variant];

  return (
    <DefaultText
      testID={testIds.sharedComponents.text}
      style={[{ color }, getFont(variation, size, customStyle), props]}
    >
      {children}
    </DefaultText>
  );
};

export default Text;
