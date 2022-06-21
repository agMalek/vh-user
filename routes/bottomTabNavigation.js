import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Dashboard } from "../components/Dashboard/container";
import Profile from "../components/Profile/container";
import { Leaderboard } from "../components/Leaderboard/container";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";
import { WorkoutsStack } from "./WorkoutsStack";

export function BottomTab({ Navigator }) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Workouts") iconName = "book";
          else if (route.name === "Profile") iconName = "person";
          else if (route.name === "Leaderboard") iconName = "trophy";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#BD0938",
        inactiveTintColor: "#333333",
        style: styles.bottomTab,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name="Workouts" component={WorkoutsStack} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Leaderboard" component={Leaderboard} />
    </Tab.Navigator>
  );
}
