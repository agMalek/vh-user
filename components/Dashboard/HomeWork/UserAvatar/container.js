import React, { useEffect, useState } from "react";
import { Layout } from "./layout";
import "firebase/auth";
import { connect } from "react-redux";
import { setterUserAction } from "../../../../redux/actions/userActions";
import { getStorage } from "../../../../firebase";
import { useIsFocused } from "@react-navigation/native";

const UserAvatar = ({ user }) => {
  const [profileImage, setProfileImage] = useState(undefined);
  const storage = getStorage();
  const storageRef = storage.ref();
  const URL = "images/avatars/" + user.username + ".png";
  const defaultURL = "default/avatar.png";

  const isFocused = useIsFocused();

  useEffect(() => {
    getProfileImage();
  });

  const getProfileImage = async () => {
    let temp, resolve;
    try {
      resolve = await storageRef.child(URL).getDownloadURL();
      temp = resolve;
    } catch (e) {
      // console.log(e.code, e.message);
      temp = await getDefaultImage();
    }
    temp && setProfileImage(temp);
  };

  const getDefaultImage = async () => {
    let resolve;
    try {
      resolve = await storageRef.child(defaultURL).getDownloadURL();
      return resolve;
    } catch (e) {
      console.log(e.code, e.message);
    }
  };

  return isFocused ? (
    <Layout profileImage={profileImage}></Layout>
  ) : (
    <Layout profileImage={null}></Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

const actionCreators = {
  setUserRanking: setterUserAction,
};

export default connect(mapStateToProps, actionCreators)(UserAvatar);
