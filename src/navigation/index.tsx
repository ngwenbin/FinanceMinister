import { Colors } from "@constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddExpenseScreen,
  AnalyticsScreen,
  ExpensesScreen,
  HomeScreen,
  LoginScreen,
  ModalScreen,
  NotFoundScreen,
  OnboardingScreen,
  ProfileScreen,
  RegisterScreen,
} from "@screens/index";
import { RootStackParamList, RootTabGroupList } from "@typings/navigation";
import { getFont, normalize } from "@utils";
import * as React from "react";
import LinkingConfiguration from "./LinkingConfiguration";

const CustomTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.white,
  },
};

function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={CustomTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          ...getFont("semibold", "lg"),
          color: Colors.gray[900],
        },
      }}
    >
      <Stack.Screen
        name="onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerTitle: "Log in" }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ headerTitle: "Register" }}
      />
      <Stack.Screen
        name="root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="notFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabGroupList>();

function TabBarIcon(
  name: React.ComponentProps<typeof MaterialIcons>["name"],
  color: string
): JSX.Element {
  return <MaterialIcons size={normalize(20)} name={name} color={color} />;
}

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: Colors.gray[800],
        tabBarInactiveTintColor: Colors.gray[400],
        tabBarLabelStyle: {
          ...getFont("medium", "2xs"),
        },
        tabBarStyle: {
          padding: normalize(4),
        },
      }}
    >
      <BottomTab.Screen
        name="home"
        component={HomeScreen}
        options={() => ({
          title: "Home",
          tabBarIcon: ({ color }) => TabBarIcon("home", color),
        })}
      />
      <BottomTab.Screen
        name="expenses"
        component={ExpensesScreen}
        options={{
          title: "Expenses",
          tabBarIcon: ({ color }) => TabBarIcon("article", color),
        }}
      />
      <BottomTab.Screen
        name="addExpense"
        component={AddExpenseScreen}
        options={{
          title: "Add Expense",
          tabBarIcon: () => TabBarIcon("add-box", Colors.primary[500]),
          tabBarLabelStyle: {
            color: Colors.primary[500],
            ...getFont("medium", "2xs"),
          },
        }}
      />
      <BottomTab.Screen
        name="analytics"
        component={AnalyticsScreen}
        options={{
          title: "Analytics",
          tabBarIcon: ({ color }) => TabBarIcon("trending-up", color),
        }}
      />
      <BottomTab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => TabBarIcon("person", color),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default Navigation;
