import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../components/Login/container";
import { Register } from "../components/Register/container";
import Landing from "../components/Landing/container";
import { BottomTab } from "./bottomTabNavigation";
import Payment from "../components/Payment/container";
import { PasswordRecovery } from "../components/PasswordRecovery/container";

export function LoginStack({ Navigator }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="PasswordRecovery" component={PasswordRecovery} />
    </Stack.Navigator>
  );
}
