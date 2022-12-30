import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@components/Text";
import { normalize, scaledStylesheet } from "@utils";
import { Button } from "@components/Button";
import { Colors } from "@constants/Colors";
import { RootStackScreenProps } from "@typings/navigation";
import { TextInput } from "@components/TextInput";

const LoginScreen = ({ ..._props }: RootStackScreenProps<"login">) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor={Colors.gray[400]}
          containerStyle={{ marginBottom: normalize(8) }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.gray[400]}
        />
      </View>
      <Button
        title="Log in"
        containerStyle={{ width: "100%", marginBottom: normalize(8) }}
      />
      <Text
        variant="body-regular"
        color={Colors.info[500]}
        style={{ marginTop: 2 }}
      >
        Forgot your password?
      </Text>
    </SafeAreaView>
  );
};

const styles = scaledStylesheet({
  container: {
    // flex: 1,
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    marginBottom: normalize(36),
    marginTop: normalize(12),
  },
  assetContainer: {
    // height: 100,
    // width: 200,
    // aspectRatio: 1,
    marginVertical: 36,
  },
});

export default LoginScreen;
