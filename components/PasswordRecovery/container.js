import React, { useState } from "react";
import { Layout } from "./layout";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { Alert } from "react-native";

export function PasswordRecovery({ navigation }) {
  const firebase = useFirebaseApp();
  const [email, setEmail] = useState("");
  const [wrongEmail, setWrongEmail] = useState({
    msg: "",
  });

  const emailInputHandler = (newValue) => {
    setEmail(newValue);
  };
  const sendPasswordResetEmail = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (error) {
    } finally {
      Alert.alert(
        "Password Recovery Sent",
        "If you are a registered user, you'll get a new email to find a recovery link. Check spam.",
        [
          {
            text: "OK",
          },
        ]
      );
      toLogin();
    }
  };
  const toLogin = () => {
    navigation.navigate("Login");
  };
  return (
    <Layout
      sendPasswordResetEmail={sendPasswordResetEmail}
      emailInputHandler={emailInputHandler}
      toLogin={toLogin}
      wrongEmail={wrongEmail}
    />
  );
}
