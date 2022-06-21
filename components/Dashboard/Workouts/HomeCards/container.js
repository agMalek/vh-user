import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { getStorage } from "../../../../firebase";
import { Alert } from "react-native";


function HomeCards({ user, setVideoShow, setNroVideo, earnedPoints }) {
  const storage = getStorage();
  const storageRef = storage.ref();

  const [videoImages, setVideoImages] = useState([]);
  const lastVideo = user.lastVideo
  useEffect(() => {
      videosList()
  }, []);


  const videosList = async () => {
    let arrayVideos = [];
    try {
      for (let i = lastVideo - 1; i > 0; i--) {
        let resolve = await storageRef
          .child("images/videoImages/" + i + ".png")
          .getDownloadURL();
        arrayVideos[lastVideo - i] = {
          url: resolve,
          id: i,
        };
      }
      setVideoImages(arrayVideos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showEarnedPoints()
  },[earnedPoints]);

  const showEarnedPoints = () => {
    if (earnedPoints > 0) {
      Alert.alert(
        "Congrats!!",
        "You have earned " + earnedPoints + " points!",
        [
          {
            text: "OK",
          }
        ],
      )
    }
  };

  return (
    <>
      <Layout
        username={user.username}
        points={user.points}
        videoImages={videoImages}
        setVideoShow={setVideoShow}
        setNroVideo={setNroVideo}
      />
    </>
  );
}
const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, {})(HomeCards);
