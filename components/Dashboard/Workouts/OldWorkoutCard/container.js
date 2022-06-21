import React, { useState, useEffect } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";
import { getStorage } from "../../../../firebase";

const OldWorkoutCard = ({ navigation, image, nro, setVideoShow, setNroVideo, videos }) => {

  const video = videos.find(v => v.nro === nro)
  const videoDescription = video.description
  const videoTitle = video.title

  const handleOnPress = () => {
    setNroVideo(nro)
    setVideoShow(true)
  }

  return (
    <>
    <Layout
      image={image}
      handleOnPress={handleOnPress}
      videoDescription={videoDescription}
      videoTitle={videoTitle}
    />
    </>
  );
};

const mapStateToProps = (state) => ({
  videos: state.videosReducer.videos
});

export default connect(mapStateToProps, {})(OldWorkoutCard);
