import React, { useState, useCallback, useRef } from "react";
import { useFocusEffect } from "@react-navigation/native";
import "firebase/auth";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { setterUserAction } from "../../redux/actions/userActions";
import { setVideosAction } from "../../redux/actions/videosActions";
import { assignPoints } from "../../utils/functions/pointsHandler";
import { Alert } from "react-native";

const Login = ({ navigation, user, setUser, setVideos }) => {
  const firebase = useFirebaseApp();

  const db = firebase.firestore();

  const [email, setEmail] = useState("");
  const emailInput = useRef(null);
  const [password, setPassword] = useState("");
  const passInput = useRef(null);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState({
    code: "",
    msg: "",
  });
  const [loading, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      emailInput.current.clear();
    }, [])
  );

  const screenHandlerRegister = () => {
    navigation.navigate("Register");
  };

  const toPassRecovery = () => {
    navigation.navigate("PasswordRecovery");
  };

  const getCurrentUserData = async () => {
    try {
      let usr = firebase.auth().currentUser;
      let doc = await db.collection("users").doc(usr.uid).get();
      let data = doc.data();
      data.id = usr.uid;
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getPosition = async (points) => {
    let rank = 1;
    try {
      const snap = await db
        .collection("users")
        .where("points", ">", points)
        .get();
      snap.forEach(() => {
        rank++;
      });
      return rank;
    } catch (e) {
      console.log(e.message);
    }
  };

  const screenHandlerLanding = async () => {
    try {
      let usr = await getCurrentUserData();
      let role = parseInt(usr.role);
      role === 2 || role === 3
        ? navigation.navigate("BottomTab")
        : navigation.navigate("Landing");
    } catch (error) {
      console.log(error.message);
    }
  };

  const forTesting = () => {
    navigation.navigate("BottomTab");
  };

  const toPayments = () => {
    navigation.navigate("Landing");
  };

  const emailInputHandler = (newValue) => {
    setEmail(newValue);
    setWrongEmail(false);
  };

  const passInputHandler = (newValue) => {
    setPassword(newValue);
    setWrongPassword({ code: "", msg: "" });
  };

  const getAllVideos = async () => {
    try {
      let videosList = [];
      let videos = await db.collection("videos").get();

      videos.forEach((video) => {
        videosList.push(video.data());
      });
      return videosList;
    } catch (error) {
      alert(error);
    }
  };

  const showEarnedPoints = (earnedPoints) => {
    // console.log("muestro earned points?");
    // console.log("los earned points son ", earnedPoints);
    if (earnedPoints > 0) {
      // console.log("si, muestro earned points");
      Alert.alert(
        "Welcome Back!!",
        "You have earned " + earnedPoints + " points!",
        [
          {
            text: "OK",
          },
        ]
      );
    }
  };

  const submitHandler = async () => {
    setLoading(true);
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const data = await getCurrentUserData();
      const position = await getPosition(data.points);
      // const signInDate = firebase.auth().currentUser.metadata.lastSignInTime;
      const previousSignIn = data.lastSignIn;
      const newSignIn = new Date();
      setUser({
        id: data.id,
        email,
        username: data.username,
        role: data.role,
        paymentDate: data.paymentDate,
        lastVideo: data.lastVideoWatched,
        points: data.points,
        lastSignIn: newSignIn,
        position,
      });
      let videosList = await getAllVideos();
      let result;
      result = await assignPoints("Login", data);
      showEarnedPoints(result.earnedPoints);
      setUser({ points: result.updatedPoints });
      try {
        await setNewSignInDate(data.id, newSignIn);
      } catch (e) {
        console.log(e);
      }
      setVideos(videosList);
      screenHandlerLanding();
    } catch (error) {
      if (error.code !== "") {
        setWrongPassword({
          code: "incorrect-data",
          msg: "Invalid email or password. Check your credentials.",
        });
      } else {
        console.log(error);
      }
    }
    setLoading(false);
  };

  const setNewSignInDate = async (id, lastSignIn) => {
    try {
      // console.log("el user id es", id);
      await db.collection("users").doc(id).update({
        lastSignIn,
      });
    } catch (error) {
      console.log(e);
    }
  };

  return (
    <Layout
      emailInputHandler={emailInputHandler}
      passInputHandler={passInputHandler}
      submitHandler={submitHandler}
      screenHandlerLanding={screenHandlerLanding}
      screenHandlerRegister={screenHandlerRegister}
      wrongPassword={wrongPassword}
      forTesting={forTesting}
      toPayments={toPayments}
      loading={loading}
      emailInput={emailInput}
      passInput={passInput}
      toPassRecovery={toPassRecovery}
      setWrongPassword={setWrongPassword}
    />
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos,
  };
};

const actionCreators = {
  setUser: setterUserAction,
  setVideos: setVideosAction,
};

export default connect(mapStateToProps, actionCreators)(Login);
