import React, { useEffect, useState } from "react";
import { StatusBar, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { FirebaseAppProvider } from "reactfire";
import { firebaseConfig } from "./firebase";
import { LoginStack } from "./routes/loginStack";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";
import storeFn from "./redux/store";
import { Provider } from "react-redux";

export default function App() {
  const store = storeFn();

  LogBox.ignoreLogs([
    "Can't perform a React state update on an unmounted component",
    "Setting a timer",
    "Remote debugger",
  ]);

  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <StatusBar
          animated={true}
          backgroundColor="rgba(2, 28, 59, 1)"
          barStyle="light-content"
        />
        <NavigationContainer>
          <LoginStack></LoginStack>
        </NavigationContainer>
      </FirebaseAppProvider>
    </Provider>
  );

}
