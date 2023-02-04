import useCachedResources from "@hooks/useCachedResources";
import Navigation from "@navigation/index";
import { AuthProvider } from "@providers/index";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Navigation />
        <StatusBar style="dark" backgroundColor="white" />
      </SafeAreaProvider>
    </AuthProvider>
  );
}
