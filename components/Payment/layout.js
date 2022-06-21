import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
  TextInput,
  ActivityIndicator
} from "react-native";
import { Input } from "react-native-elements";
import { Frame } from "../Frame/index";
import commonStyles from "../../assets/styles/commonStyles";
import fontStyles from "../../assets/styles/fontStyles";
import mainLogo from "../../assets/images/mainLogo.png";
import { useFirestoreDocData } from "reactfire";
import { colorsPalette } from "../../assets/styles/colorsPalette";

export const Layout = ({
  handlePayment,
  inputHandler,
  formCompleteMessage,
  loading
}) => {

  return (
    <Frame>
      <ScrollView>
        <KeyboardAvoidingView
          style={[commonStyles.flexOne, { margin: 20 }]}
          {...(Platform.OS === "ios" && { behavior: "padding" })}
          // behavior="height"
          // keyboardVerticalOffset={0}
          enabled
        >
          
          <TouchableOpacity
            activeOpacity={1}
            style={commonStyles.flexOne}
            onPress={() => {
              Keyboard.dismiss();
            }}
          >
            <View style={(commonStyles.flexOne, { marginBottom: 20 })}>
              <Image
                style={[commonStyles.mainLogo, commonStyles.flexOne]}
                source={mainLogo}
              />
              <Text style={[fontStyles.title]}>Buy Now</Text>
            </View>
            <Text style={fontStyles.inputHeader}>NAME</Text>
            <Input
              onChangeText={(evt) => inputHandler("name", evt)}
              //  errorMessage={wrongName ? "Invalid Name" : ""}
              placeholder="John Doe"
              style={commonStyles.inputUser}
              autoCompleteType="name"
            />
            <Text style={fontStyles.inputHeader}>COUNTRY</Text>
            <Input
              onChangeText={(evt) => inputHandler("country", evt)}
              //  errorMessage={wrongCountry ? "Invalid Country" : ""}
              placeholder="Canada"
              style={commonStyles.inputUser}
              autoCompleteType="name"
            />
            <Text style={fontStyles.inputHeader}>CITY</Text>
            <Input
              onChangeText={(evt) => inputHandler("city", evt)}
              //  errorMessage={wrongCity ? "Invalid City" : ""}
              placeholder="Toronto"
              style={commonStyles.inputUser}
              autoCompleteType="name"
            />
            <Text style={fontStyles.inputHeader}>ADDRESS</Text>
            <Input
              onChangeText={(evt) => inputHandler("address", evt)}
              //  errorMessage={wrongAddress ? "Invalid Adress" : ""}
              placeholder="Evergreen 714"
              style={commonStyles.inputUser}
              autoCompleteType="name"
            />
            <View style={commonStyles.flexOne}>
              <TouchableOpacity
                onPress={handlePayment}
                style={commonStyles.actionButton}
              >
                <Text style={fontStyles.buttonText}>
                {loading ? <ActivityIndicator size="large" color="#fff"/> : "PAY NOW"}   
                
                </Text>
              </TouchableOpacity>
              {formCompleteMessage && (
                <View style={[commonStyles.centeredAligned, { marginTop: 20 }]}>
                  <Text style={{ color: colorsPalette.red }}>
                    You need to complete all fields before paying!
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </ScrollView>
    </Frame>
  );
};
