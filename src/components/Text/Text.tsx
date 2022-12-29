import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
} from "react-native";

import type { TextVariants } from "@constants/Fonts";
import { TextVariantsData } from "@constants/Fonts";
import { getFont } from "@utils";
import { testIds } from "@utils/tests/testIds";
import { Colors } from "@constants/Colors";

interface TextProps extends DefaultTextProps {
  children: React.ReactNode;
  variant?: TextVariants;
  color?: string;
}

const Text = ({
  children,
  color = Colors.gray[900],
  variant = "body-regular",
  ...props
}: TextProps) => {
  const { variation, size, customStyle } = TextVariantsData[variant];

  return (
    <DefaultText
      testID={testIds.sharedComponents.text}
      {...props}
      style={[{ color }, getFont(variation, size, customStyle), props.style]}
    >
      {children}
    </DefaultText>
  );
};

export default Text;
