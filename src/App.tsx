import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "@hooks/useCachedResources";
import Navigation from "@navigation/index";
import { AuthProvider } from "@providers/index";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthProvider>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="dark" backgroundColor="white" />
        </SafeAreaProvider>
      </AuthProvider>
    );
  }
}
