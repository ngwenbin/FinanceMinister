import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { registerRootComponent } from "expo";

import useCachedResources from "@hooks/useCachedResources";
import Navigation from "@navigation/index";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="dark" backgroundColor="white" />
      </SafeAreaProvider>
    );
  }
}

registerRootComponent(App);
