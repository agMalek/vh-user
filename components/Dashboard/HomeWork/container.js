import React, { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Layout } from "./layout";
import profileImage from "../../../assets/images/user.jpg";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { connect } from "react-redux";
import { setterUserAction } from "../../../redux/actions/userActions";
import { Alert } from "react-native";

const HomeWork = ({
  navigation,
  setvideoShow,
  user,
  setUser,
  earnedPoints,
  setEarnedPoints,
}) => {
  const firebase = useFirebaseApp();
  const db = firebase.firestore();
  const [position, setPosition] = useState(user.position);
  const [points, setPoints] = useState(user.points);

  useEffect(() => {
    fixPosition();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      fixPosition();
    }, [])
  );
  const fixPosition = async () => {
    let temp = await getPosition();
    // console.log(temp);
    setPosition(temp);
  };
  const getPosition = async () => {
    let _points;
    let rank = 1;
    try {
      let usr = firebase.auth().currentUser;
      let doc = await db.collection("users").doc(usr.uid).get();
      let data = doc.data();
      _points = data.points ? data.points : user.points;
      setPoints(_points);
    } catch (e) {
      console.log(e);
    }
    // console.log("voy a buscar a la base con puntos", _points);
    try {
      const snap = await db
        .collection("users")
        .where("points", ">", _points)
        .get();
      snap.forEach(() => {
        // console.log("rank es", rank);
        rank = parseInt(rank) + 1;
      });
      setUser({ position: rank });
      return rank;
      // console.log(rank);
    } catch (e) {
      console.log(e.message);
    }
  };

  const navigateToWorkouts = () => {
    navigation.navigate("Workouts");
  };
  const getProfileImage = () => {
    return profileImage;
  };

  useEffect(() => {
    // console.log("los earnedpoints son ", earnedPoints);
    if (earnedPoints > 0) displayAlert(earnedPoints);
    setEarnedPoints(0)
  }, [earnedPoints]);

  const displayAlert = (_points) => {
    Alert.alert("Congrats!!", "You have earned " + _points + " points!", [
      {
        text: "OK",
      },
    ]);
  };

  return (
    <Layout
      getProfileImage={getProfileImage}
      navigateToWorkouts={navigateToWorkouts}
      userName={user.username}
      userPoints={points}
      userPosition={position}
      setvideoShow={setvideoShow}
    ></Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  videos: state.videosReducer.videos,
});

const actionCreators = {
  setUser: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(HomeWork);
