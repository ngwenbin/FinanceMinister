import { Text, Pressable, View, ViewStyle } from "react-native";
import { buttonStyles as styles } from "./Button.style";

type ButtonSizes = "xs" | "sm" | "md" | "lg";
type ButtonVariant = "solid" | "outline" | "white";

interface ButtonProps {
  adornment?: JSX.Element;
  adornmentPosition?: "left" | "right";
  containerStyle?: ViewStyle;
  disabled?: boolean;
  title?: string;
  size?: ButtonSizes;
  variant?: ButtonVariant;
  onPressCallback?: () => void;
  onLongPressCallback?: () => void;
}

const Button = ({
  adornment,
  adornmentPosition,
  containerStyle,
  disabled,
  title,
  size = "sm",
  variant = "solid",
  onPressCallback,
  onLongPressCallback,
}: ButtonProps) => {
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
};

export default Button;
