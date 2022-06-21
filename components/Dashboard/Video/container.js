import React, { useEffect, useRef, useState } from "react";
import { Layout } from "./layout";
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform, Alert } from "react-native";
import { connect } from "react-redux";
import { setterUserAction } from "../../../redux/actions/userActions";
import { getFirestore } from "../../../firebase";
import { assignPoints } from "../../../utils/functions/pointsHandler";

const Video = ({
  setvideoShow,
  videos,
  user,
  nroVideo,
  setUser,
  setEarnedPoints,
  earnedPoints,
}) => {
  const video = useRef(null);
  const [urlVideo, setUrlVideo] = useState(undefined);
  const db = getFirestore();
  const [loading, setLoading] = useState(true);
  const [executed, setExecuted] = useState(false);

  useEffect(() => {
    setUrlVideo(videos.find((v) => v.nro === nroVideo).url);
  }, []);

  const loadErrorHandler = () => {
    Alert.alert(
      "Ooops!",
      "An unexpected error has ocurred, please try again later.",
      [
        {
          onPress: () => setvideoShow(false),
        },
      ]
    );
  };

  const onVideoFinish = async (playbackStatus) => {
    if (!executed) {
      let almostFinish = playbackStatus.durationMillis - 8000;
      let actualPosition = playbackStatus.positionMillis;
      let videoFinished = actualPosition >= almostFinish ? true : false;
      if (videoFinished) {
        setExecuted(true);
        if (user.lastVideo < videos.length) {
          nroVideo++;
          try {
            await db.collection("users").doc(user.id).update({
              lastVideoWatched: nroVideo,
            });
            setUser({ lastVideo: nroVideo });
          } catch (error) {}
        }
        let result;
        try {
          result = await assignPoints("Video", user);
          setUser({
            points: result.updatedPoints,
          });
        } catch (e) {
          console.log(e);
        }
        // console.log("result poins es ", result.earnedPoints);
        if (result.earnedPoints > 0) {
          setEarnedPoints(result.earnedPoints);
        }
      }
    }
  };

  const presentFullScreen = () => {
    video.current.presentFullscreenPlayer();
  };
  const playVideo = () => {
    setLoading(false);
    video.current.playAsync();
  };
  const fullScreenHandler = async ({ fullscreenUpdate }) => {
    switch (fullscreenUpdate) {
      case 0:
        if (Platform.OS === "ios" || Platform.OS === "android") {
          await ScreenOrientation.lockAsync(
            ScreenOrientation.OrientationLock.LANDSCAPE
          );
        }
        break;
      case 2:
        await video.current.stopAsync();
        try {
          if (Platform.OS === "ios") {
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.PORTRAIT_UP
            );
          } else if (Platform.OS === "android") {
            await ScreenOrientation.lockAsync(
              ScreenOrientation.OrientationLock.PORTRAIT
            );
          }
        } catch (e) {
          console.log(e);
        }
        setvideoShow(false);
        break;
    }
  };

  return (
    <>
      {urlVideo && (
        <Layout
          urlVideo={urlVideo}
          video={video}
          loadErrorHandler={loadErrorHandler}
          presentFullScreen={presentFullScreen}
          playVideo={playVideo}
          fullScreenHandler={fullScreenHandler}
          onVideoFinish={onVideoFinish}
          loading={loading}
        />
      )}
    </>
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
};

export default connect(mapStateToProps, actionCreators)(Video);
