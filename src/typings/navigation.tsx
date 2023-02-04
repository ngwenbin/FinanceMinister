import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    type RootTabGroupList = RootStackParamList;
  }
}

export type RootStackParamList = {
  root: NavigatorScreenParams<RootTabGroupList> | undefined;
  modal: undefined;
  notFound: undefined;
  onboarding: undefined;
  login: undefined;
  register: undefined;
};

export type RootTabGroupList = {
  home: undefined;
  expenses: undefined;
  addExpense: undefined;
  analytics: undefined;
  profile: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootTabGroupList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabGroupList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
