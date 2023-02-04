import { View } from "react-native";

import { Text } from "@components/Text";
import { scaledStylesheet } from "@utils";

const AnalyticsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} />
      <Text>Analytics</Text>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default AnalyticsScreen;
