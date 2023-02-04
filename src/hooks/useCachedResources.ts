/* eslint-disable camelcase */
import {
  Inter_100Thin,
  Inter_200ExtraLight,
  Inter_300Light,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
  Inter_900Black,
  useFonts,
} from "@expo-google-fonts/inter";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as NavigationBar from "expo-navigation-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

SplashScreen.preventAutoHideAsync();

const useCachedResources = () => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [fontsLoaded] = useFonts({
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
    ...MaterialIcons.font,
  });

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      if (fontsLoaded) {
        if (Platform.OS === "android") {
          await NavigationBar.setBackgroundColorAsync("white");
        }
        await SplashScreen.hideAsync();
        setLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, [fontsLoaded]);

  return isLoadingComplete;
};

export default useCachedResources;
