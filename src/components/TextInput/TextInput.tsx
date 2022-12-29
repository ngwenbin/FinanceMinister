import {
  StyleSheet,
  View,
  TextStyle,
  TextInput as DefaultTextInput,
  TextInputProps as DefaultTextInputProps,
} from "react-native";
import { useState } from "react";

import { Text } from "@components/Text";
import { TextVariantsData } from "@constants/Fonts";
import { Colors } from "@constants/Colors";
import { getFont } from "@utils";
import { testIds } from "@utils/tests/testIds";
import { ColorValue } from "react-native";

interface TextInputProps extends Omit<DefaultTextInputProps, "multiline"> {
  label: string;
  labelStyle?: TextStyle;
  required?: boolean;
  subtext?: string; // use it for error message
  subtextStyle?: TextStyle;
  globalColorOverwrite?: ColorValue;
}

const TextInput = ({
  label,
  labelStyle,
  required,
  subtext,
  subtextStyle,
  globalColorOverwrite,
  ...props
}: TextInputProps) => {
  const { variation, size } = TextVariantsData["body-small"];

  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <View style={styles.container}>
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
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    maxWidth: 320,
    width: "100%",
    margin: 4,
  },
  label: {
    color: Colors.gray[900],
  },
  textInputContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 6,
    marginBottom: 2,
  },
  subtext: {
    color: Colors.gray[500],
  },
});
