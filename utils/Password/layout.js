import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";
import fontStyles from "../../assets/styles/fontStyles";
import commonStyles from "../../assets/styles/commonStyles";

export function Layout({
  tag,
  passInputHandler,
  wrongPassword,
  showPassword,
  showPasswordHandler,
  passInput,
}) {
  return (
    <React.Fragment>
      <Text style={fontStyles.inputHeader}>{tag}</Text>
      <Input
        ref={passInput}
        onChangeText={passInputHandler}
        // onChangeText={() => {
        //   console.log(textInput.clear);
        //   textInput.clear();
        // }}
        errorMessage={wrongPassword ? wrongPassword.msg : ""}
        // onKeyPress={(e) => {
        //   handleKeyDown(e);
        // }}
        rightIcon={
          <Icon
            name={showPassword ? "eye-slash" : "eye"}
            size={22}
            color="white"
            onPress={() => showPasswordHandler(!showPassword)}
          />
        }
        rightIconContainerStyle={commonStyles.inputIcon}
        placeholder="********"
        secureTextEntry={!showPassword}
        autoCompleteType="password"
        style={commonStyles.inputPassword}
      />
    </React.Fragment>
  );
}
