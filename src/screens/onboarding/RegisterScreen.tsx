import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@components/Text";
import { normalize, scaledStylesheet } from "@utils";
import { Button } from "@components/Button";
import { Colors } from "@constants/Colors";
import { RootStackScreenProps } from "@typings/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@providers";
import { TextInput } from "@components/TextInput";

const RegisterScreen = ({ navigation }: RootStackScreenProps<"register">) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const { user, login, register } = useAuth();

  useEffect(() => {
    if (user != null) {
      navigation.navigate("root");
    }
  }, [user, navigation]);

  const onClickLogIn = async () => {
    console.log("Trying to register with user: " + email);
    try {
      await register(email, password);
      login(email, password);
    } catch (error) {
      let err = error as Error;
      const errorMessage = `Failed to sign in: ${err.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor={Colors.gray[400]}
          containerStyle={{ marginBottom: normalize(8) }}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect={false}
          blurOnSubmit={true}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.gray[400]}
          containerStyle={{ marginBottom: normalize(8) }}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          blurOnSubmit={true}
        />
        <TextInput
          placeholder="Re-enter password"
          placeholderTextColor={Colors.gray[400]}
          onChangeText={(value) => {
            if (value !== password) {
              setErrMsg("Password mismatch");
            } else {
              setErrMsg("");
            }
          }}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          blurOnSubmit={true}
        />
      </View>
      <Button
        title="Register"
        containerStyle={{ width: "100%", marginBottom: normalize(24) }}
        onPressCallback={onClickLogIn}
        disabled={Boolean(errMsg || !password || !email)}
      />
      <Text
        variant="caption"
        color={Colors.gray[400]}
        style={{ textAlign: "center" }}
      >
        By joining you agree to Finance Minister's{"\n"}Terms of Service and
        Privacy Policy
      </Text>
    </SafeAreaView>
  );
};

const styles = scaledStylesheet({
  container: {
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
    marginVertical: 36,
  },
});

export default RegisterScreen;
