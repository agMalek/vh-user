import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";
import Dashboard from "../components/Dashboard/container";
import Workouts from "../components/Dashboard/Workouts/container";
import { LinearGradient } from "expo-linear-gradient";

export function WorkoutsStack({ Navigator }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Workouts" component={Workouts} />
    </Stack.Navigator>
  );
}
