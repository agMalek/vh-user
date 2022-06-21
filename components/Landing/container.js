import React, { useCallback } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { useFirebaseApp } from "reactfire";
import { signOutAction } from "../../redux/actions/userActions";
import { BackHandler, Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

function Landing({ navigation, signOutUser }) {
  const firebase = useFirebaseApp();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        Alert.alert("Hold on!", "Are you sure you want to Exit?", [
          {
            text: "Cancel",
            onPress: () => null,
            style: "cancel",
          },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };
      BackHandler.addEventListener("hardwareBackPress", onBackPress);
      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const navigateToPaymentForm = () => {
    navigation.navigate("Payment");
  };

  const signOut = () => {
    // console.log("signing out");
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.log(error);
    }
    signOutUser();
    navigation.navigate("Login");
  };

  return (
    <Layout
      // size={size}
      navigateToPaymentForm={navigateToPaymentForm}
      signOut={signOut}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos,
  };
};

const actionCreators = {
  signOutUser: signOutAction,
};

export default connect(mapStateToProps, actionCreators)(Landing);
