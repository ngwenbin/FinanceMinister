import { testIds } from "@utils/tests/testIds";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { buttonStyles as styles } from "./Button.style";

type ButtonSizes = "xs" | "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline" | "white";

interface ButtonProps {
  title: string;
  adornment?: JSX.Element;
  adornmentPosition?: "left" | "right";
  containerStyle?: ViewStyle;
  disabled?: boolean;
  size?: ButtonSizes;
  variant?: ButtonVariant;
  onPressCallback?: () => void;
  onLongPressCallback?: () => void;
}

function Button({
  title,
  adornment,
  adornmentPosition,
  containerStyle,
  disabled,
  size = "sm",
  variant = "solid",
  onPressCallback,
  onLongPressCallback,
}: ButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        styles[size],
        styles[variant],
        { flexDirection: adornmentPosition === "left" ? "row-reverse" : "row" },
        { ...(pressed ? styles[variant]._after : styles[variant]._before) },
        { ...(disabled && styles[variant]._disabled) },
        containerStyle,
      ]}
      disabled={disabled}
      onPress={onPressCallback}
      onLongPress={onLongPressCallback}
    >
      {title ? (
        <Text
          testID={testIds.sharedComponents.button.buttonTitle}
          style={[
            {
              color: styles[variant].color,
              fontFamily: styles[size].fontFamily,
              fontSize: styles[size].fontSize,
            },
            {
              ...(disabled && styles[variant]._disabled),
            },
          ]}
        >
          {title}
        </Text>
      ) : null}
      {adornment ? (
        <View
          testID={testIds.sharedComponents.button.buttonAdornmentContainer}
          style={{
            [adornmentPosition === "left" ? "paddingRight" : "paddingLeft"]:
              styles[size]._flexGap,
          }}
        >
          {adornment}
        </View>
      ) : null}
    </Pressable>
  );
}

export default Button;
