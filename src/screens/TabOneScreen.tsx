import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import type { RootTabScreenProps } from "@customTypes/global";
import { getFont } from "@utils";

export default function TabOneScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
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
