import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { RootStackParamList } from "../typings/navigation";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      root: {
        screens: {
          home: {
            screens: {
              homeScreen: "home",
            },
          },
          expenses: {
            screens: {
              expensesScreen: "expenses",
            },
          },
        },
      },
      modal: "modal",
      notFound: "*",
    },
  },
};

export default linking;
