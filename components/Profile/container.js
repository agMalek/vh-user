import React, { useState } from "react";
import "firebase/auth";
import { Alert } from "react-native";
import { getStorage } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";
import * as ImagePicker from "expo-image-picker";
import { connect } from "react-redux";
import { signOutAction } from "../../redux/actions/userActions";

const Profile = ({ navigation, user, signOutUser }) => {
  const storage = getStorage();
  const firebase = useFirebaseApp();
  const db = firebase.firestore();
  const [image, setImage] = useState(null);
  const [points, setPoints] = useState(user.points ? user.points : 0);
  const [email, setEmail] = useState(user.email ? user.email : "no@email.com");
  const [username, setUsername] = useState(
    user.username ? user.username : "noLog"
  );
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [changed, setChanged] = useState(true);
  changed;

  const [promptVisibility, setPromptVisibility] = useState(false);

  const [newWrongPassword, setNewWrongPassword] = useState("");
  const [repeatWrongPassword, setRepeatWrongPassword] = useState("");
  const [oldWrongPassword, setOldWrongPassword] = useState("");

  // let textInput;

  // const [usernameExists, setUsernameExists] = useState(0);
  const uploadImage = async (image) => {
    const response = await fetch(image);
    const blob = await response.blob();
    var ref =
      user.username &&
      firebase
        .storage()
        .ref()
        .child("/images/avatars/" + user.username + ".png");
    return ref.put(blob);
  };

  const askPermissions = async () => {
    try {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need media library permissions to make this work!");
      } else {
        return true;
      }
    } catch (e) {
      console.log(e);
    }
    // }
  };
  // NOT WORKING ON IOS SIMULATOR, MIGHT BE RELATED TO A BUG ON IOS
  const changeAvatar = async () => {
    if (await askPermissions()) {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      });
      if (!result.cancelled) {
        await uploadImage(result.uri);
        setImage(result.uri);
      }
    }
  };

  const cancelPrompt = () => {
    setPromptVisibility(false);
  };

  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action can not be undone.",
      [
        {
          text: "Yes",
          onPress: async () => {
            setPromptVisibility(true);
          },
        },

        {
          text: "No",
        },
      ]
    );
  };

  const deleteCurrentAccount = async (pass) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(
        user.email ? user.email : "",
        pass ? pass : ""
      )
      .then((creds) => {
        db.collection("users")
          .doc(user.id)
          .delete()
          .then((data) => {
            firebase.auth().currentUser.delete();
          })
          .then((data) => navigation.navigate("Login"));
      })
      .catch((error) => {
        Alert.alert("Error!", "Invalid password");
      });
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

  const oldPassInputHandler = (newValue) => {
    setOldPassword(newValue);
    // setInvalidPassword(false);
  };
  const newPassInputHandler = (newValue) => {
    setNewPassword(newValue);
    // setInvalidPassword(false);
  };
  const repeatPassInputHandler = (newValue) => {
    setRepeatPassword(newValue);
    // setInvalidPassword(false);
  };

  const showPasswordHandler = (newValue) => {
    setShowPassword(newValue);
  };

  const changePassword = async () => {
    var user = firebase.auth().currentUser;
    try {
      await user.updatePassword(newPassword);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const checkOldPassword = async () => {
    let result = false;
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(
          user.email ? user.email : "",
          oldPassword ? oldPassword : ""
        );
      result = true;
    } catch (e) {
      // throw e;
      // console.log(e);
    }
    return result;
  };

  const submitHandler = async () => {
    // console.log("aprete el boton");
    setNewWrongPassword("");
    setRepeatWrongPassword("");
    let result;

    try {
      const tryCheck = await checkOldPassword();
      if (tryCheck) {
        setOldWrongPassword("");
        validatePassword();
        checkSamePass();
        comparePasswords();

        result = await changePassword();
        if (result) {
          setOldPassword("");
          setNewPassword("");
          setRepeatPassword("");
          Alert.alert("The password has been changed");
          setChanged(false);
          setChanged(true);
        }
      } else {
        setOldWrongPassword({ msg: "The password is invalid." });
      }
    } catch (e) {
      if (e.code === "pass/invalid-pass" || e.code === "pass/same-pass")
        setNewWrongPassword({
          msg: e.message,
        });
      else if (e.code === "pass/no-match")
        setRepeatWrongPassword({
          msg: e.message,
        });
    }
  };

  const comparePasswords = () => {
    if (newPassword !== repeatPassword) {
      throw { code: "pass/no-match", message: "Passwords must match" };
    }
  };

  const checkSamePass = () => {
    if (oldPassword === newPassword) {
      throw {
        code: "pass/same-pass",
        message: "Password can't be the same as before",
      };
    }
  };

  const validatePassword = () => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    if (!strongRegex.test(newPassword)) {
      throw {
        code: "pass/invalid-pass",
        message:
          "Password must have at least 8 characters, 1 upper, 1 lower and 1 number",
      };
    }
  };
  return (
    <Layout
      oldPassInputHandler={oldPassInputHandler}
      newPassInputHandler={newPassInputHandler}
      repeatPassInputHandler={repeatPassInputHandler}
      submitHandler={submitHandler}
      showPasswordHandler={showPasswordHandler}
      username={user.username}
      changeAvatar={changeAvatar}
      email={email}
      points={user.points ? user.points : 0}
      image={image}
      signOut={signOut}
      newPassword={newPassword}
      oldPassword={oldPassword}
      newWrongPassword={newWrongPassword}
      repeatWrongPassword={repeatWrongPassword}
      oldWrongPassword={oldWrongPassword}
      changed={changed}
      deleteAccount={deleteAccount}
      deleteCurrentAccount={deleteCurrentAccount}
      cancelPrompt={cancelPrompt}
      promptVisibility={promptVisibility}
      // textInput={textInput}
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
  signOutUser: signOutAction,
};

export default connect(mapStateToProps, actionCreators)(Profile);
