import { View } from "react-native";

import { Text } from "@components/Text";
import type { RootTabScreenProps } from "@typings/navigation";
import { getFont, scaledStylesheet } from "@utils";

const HomeScreen = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RootTabScreenProps<"home">) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} />
      <Text>Home</Text>
    </View>
  );
};

const styles = scaledStylesheet({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    ...getFont("regular", "md"),
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default HomeScreen;
