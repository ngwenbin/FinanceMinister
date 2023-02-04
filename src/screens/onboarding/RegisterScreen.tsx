import { Button } from "@components/Button";
import { Text } from "@components/Text";
import { TextInput } from "@components/TextInput";
import { Colors } from "@constants/Colors";
import { useAuth } from "@providers";
import { RootStackScreenProps } from "@typings/navigation";
import { normalize, scaledStylesheet } from "@utils";
import { useEffect, useState } from "react";
import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function RegisterScreen({ navigation }: RootStackScreenProps<"register">) {
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
    console.log(`Trying to register with user: ${email}`);
    try {
      await register(email, password);
      login(email, password);
    } catch (error) {
      const err = error as Error;
      const errorMessage = `Failed to sign in: ${err.message}`;
      console.error(errorMessage);
      Alert.alert(errorMessage);
    }
  };

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
          blurOnSubmit
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.gray[400]}
          containerStyle={{ marginBottom: normalize(8) }}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          blurOnSubmit
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
          blurOnSubmit
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
        By joining you agree to Finance Minister&apos;s{"\n"}Terms of Service
        and Privacy Policy
      </Text>
    </SafeAreaView>
  );
}

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
