import { View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Text } from "@components/Text";
import { RootStackScreenProps } from "@typings/navigation";
import { normalize, scaledStylesheet } from "@utils";
import { Button } from "@components/Button";
import { Colors } from "@constants/Colors";

const OnboardingScreen = ({
  navigation,
}: RootStackScreenProps<"onboarding">) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text variant="subhead-large">Welcome to Finance Minister</Text>
      </View>
      <View style={styles.assetContainer}>
        <Image
          style={{ width: 300, height: 250 }}
          source={require("@assets/images/login/sittingreading.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Log in"
          containerStyle={{ width: "100%", marginBottom: normalize(8) }}
          onPressCallback={() => navigation.navigate("login")}
        />
        <Button
          title="Register"
          variant="outline"
          containerStyle={{ width: "100%" }}
          onPressCallback={() => navigation.navigate("register")}
        />
      </View>
      <View>
        <Text
          variant="caption"
          color={Colors.gray[400]}
          style={{ textAlign: "center" }}
        >
          By continuing you agree to Finance Minister's{"\n"}Terms of Service
          and Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = scaledStylesheet({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  assetContainer: {
    flex: 2,
    justifyContent: "flex-end",
    maxWidth: 300,
    marginVertical: 36,
  },
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    marginBottom: 32,
  },
});

export default OnboardingScreen;
