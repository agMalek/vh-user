import React, { useState, useEffect, useCallback } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler, Alert } from "react-native";

const Dashboard = ({ navigation, user }) => {
  const [videoShow, setvideoShow] = useState(false);
  const [nroVideo, setNroVideo] = useState("");
  const [earnedPoints, setEarnedPoints] = useState(0);

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

  useEffect(() => {
    const lastVideo = user.lastVideo == 0 ? 1 : user.lastVideo;
    setNroVideo(lastVideo);
  }, [videoShow]);

  return (
    <Layout
      videoShow={videoShow}
      setvideoShow={setvideoShow}
      navigation={navigation}
      nroVideo={nroVideo}
      earnedPoints={earnedPoints}
      setEarnedPoints={setEarnedPoints}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps, {})(Dashboard);
