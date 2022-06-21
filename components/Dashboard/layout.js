import React from "react";
import Video from "./Video/container";
import HomeWork from "./HomeWork/container";

export function Layout({ videoShow, setvideoShow, navigation, nroVideo, setEarnedPoints, earnedPoints }) {
  return (
    <React.Fragment>
      {videoShow ? (
        <Video
          setvideoShow={setvideoShow}
          nroVideo={nroVideo}
          setEarnedPoints={setEarnedPoints}
          earnedPoints={earnedPoints} 
          />
      ) : (
        <HomeWork
          setvideoShow={setvideoShow}
          navigation={navigation}
          earnedPoints={earnedPoints} 
          setEarnedPoints={setEarnedPoints}/>
      )}
    </React.Fragment>
  );
}
