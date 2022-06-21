import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard
} from "react-native";
import { Input } from "react-native-elements";
import { Frame } from "../Frame";
import mainLogo from "../../assets/images/mainLogo.png";
import fontStyles from "../../assets/styles/fontStyles";
import commonStyles from "../../assets/styles/commonStyles";

export function Layout({
  wrongEmail,
  sendPasswordResetEmail,
  emailInputHandler,
  toLogin
}) {
  return (
    <Frame>
      <KeyboardAvoidingView
        style={[commonStyles.flexOne, { margin: 20 }]}
        {...(Platform.OS === "ios" && { behavior: "padding" })}
        keyboardVerticalOffset={10}
        enabled
      >
        <TouchableOpacity
          activeOpacity={1}
          style={commonStyles.flexOne}
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={commonStyles.flexOne}>
            <Image
              style={[commonStyles.mainLogo, commonStyles.flexOne]}
              source={mainLogo}
            />
            <Text style={[fontStyles.title]}>Forgot Password</Text>
          </View>
          <View style={commonStyles.mainCredentialContainer}>
            <TouchableOpacity
              pointerEvents="none"
              activeOpacity={1}
              onPress={() => {}}
            >
              <Text style={fontStyles.inputHeader}>EMAIL</Text>
              <Input
                onChangeText={emailInputHandler}
                placeholder="john.doe@example.com"
                style={commonStyles.inputUser}
                autoCompleteType="email"
                errorMessage={wrongEmail.msg}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={sendPasswordResetEmail}
              style={commonStyles.actionButton}
            >
              <Text style={fontStyles.buttonText}>RECOVER</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toLogin}
              style={commonStyles.textTouch}
              accessibilityRole="text"
            >
              <Text style={[fontStyles.smallSize, fontStyles.footerText]}>
                Back to Login
              </Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </Frame>
  );
}
