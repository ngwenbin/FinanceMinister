import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import { Colors } from "@constants/Colors";

import {
  HomeScreen,
  ExpensesScreen,
  NotFoundScreen,
  ModalScreen,
  ProfileScreen,
  AnalyticsScreen,
  AddExpenseScreen,
} from "@screens/index";
import { RootStackParamList, RootTabParamList } from "@customTypes/navigation";
import LinkingConfiguration from "./LinkingConfiguration";
import { getFont } from "@utils";

const Navigation = () => {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
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
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const TabBarIcon = (
  name: React.ComponentProps<typeof MaterialIcons>["name"],
  color: string
): JSX.Element => {
  return (
    <MaterialIcons
      size={24}
      style={{ marginBottom: -6 }}
      name={name}
      color={color}
    />
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.gray[800],
        tabBarInactiveTintColor: Colors.gray[400],
        tabBarLabelStyle: {
          ...getFont("medium", "2xs"),
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
};

export default Navigation;
