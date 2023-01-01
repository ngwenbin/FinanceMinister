import { Alert, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@components/Text";
import { normalize, scaledStylesheet } from "@utils";
import { Button } from "@components/Button";
import { Colors } from "@constants/Colors";
import { RootStackScreenProps } from "@typings/navigation";
import { TextInput } from "@components/TextInput";
import { useEffect, useState } from "react";
import { useAuth } from "@providers";

const LoginScreen = ({ navigation }: RootStackScreenProps<"login">) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { user, login } = useAuth();

  useEffect(() => {
    if (user != null) {
      navigation.navigate("root");
    }
  }, [user, navigation]);

  const onClickLogIn = async () => {
    console.log("Trying sign in with user: " + email);
    try {
      await login(email, password);
    } catch (error) {
      let err = error as Error;
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
          blurOnSubmit={true}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={Colors.gray[400]}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoComplete="password"
          autoCorrect={false}
          blurOnSubmit={true}
        />
      </View>
      <Button
        title="Log in"
        containerStyle={{ width: "100%", marginBottom: normalize(8) }}
        onPressCallback={onClickLogIn}
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

export default LoginScreen;
