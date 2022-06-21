import React, { useState } from "react";
import { Layout } from "./layout";
import { connect } from "react-redux";

const Workouts = ({ navigation }) => {
  const [videoShow, setVideoShow] = useState(false);
  const [nroVideo, setNroVideo] = useState("");
  const [earnedPoints, setEarnedPoints] = useState(0);
  /*
  useEffect(() => { 
  }, [videoShow]);
 */

  return (
    <>
      <Layout
        videoShow={videoShow}
        setVideoShow={setVideoShow}
        navigation={navigation}
        nroVideo={nroVideo}
        setNroVideo={setNroVideo}
        setEarnedPoints={setEarnedPoints}
        earnedPoints={earnedPoints}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    videos: state.videosReducer.videos,
  };
};
export default connect(mapStateToProps, {})(Workouts);
