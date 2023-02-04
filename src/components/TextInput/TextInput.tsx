import { Text } from "@components/Text";
import { Colors } from "@constants/Colors";
import { TextVariantsData } from "@constants/Fonts";
import { getFont, scaledStylesheet } from "@utils";
import { testIds } from "@utils/tests/testIds";
import { useState } from "react";
import {
  ColorValue,
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

interface TextInputProps extends Omit<DefaultTextInputProps, "multiline"> {
  label?: string;
  labelStyle?: TextStyle;
  containerStyle?: ViewStyle;
  required?: boolean;
  subtext?: string; // use it for error message
  subtextStyle?: TextStyle;
  globalColorOverwrite?: ColorValue;
}

function TextInput({
  label,
  labelStyle,
  containerStyle,
  required,
  subtext,
  subtextStyle,
  globalColorOverwrite,
  ...props
}: TextInputProps) {
  const { variation, size } = TextVariantsData["body-small"];

  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <Text
          testID={testIds.sharedComponents.textInput.label}
          style={[styles.label, labelStyle]}
          variant="body-small"
        >
          {label}
          {required ? (
            <Text
              color={Colors.error[500]}
              variant="body-small"
              testID={testIds.sharedComponents.textInput.labelAdornment}
            >
              *
            </Text>
          ) : null}
        </Text>
      ) : null}
      <DefaultTextInput
        testID={testIds.sharedComponents.textInput.input}
        style={[
          getFont(variation, size),
          { borderColor: isFocused ? Colors.primary[500] : Colors.gray[300] },
          styles.textInputContainer,
          props.style,
          ...(globalColorOverwrite
            ? [
                {
                  borderColor: globalColorOverwrite,
                  color: globalColorOverwrite,
                },
              ]
            : []),
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        multiline={false}
        cursorColor={Colors.gray[700]}
      />
      {subtext ? (
        <Text
          testID={testIds.sharedComponents.textInput.subtext}
          style={[
            getFont("light", "xs"),
            styles.subtext,
            subtextStyle,
            ...(globalColorOverwrite
              ? [
                  {
                    color: globalColorOverwrite,
                  },
                ]
              : []),
          ]}
        >
          {subtext}
        </Text>
      ) : null}
    </View>
  );
}

export default TextInput;

const styles = scaledStylesheet({
  container: {
    width: "100%",
  },
  label: {
    color: Colors.gray[900],
    marginBottom: 2,
  },
  textInputContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderRadius: 8,
  },
  subtext: {
    marginTop: 2,
    color: Colors.gray[500],
  },
});
