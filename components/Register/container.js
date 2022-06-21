import React, { useState, useEffect } from "react";
import "firebase/auth";
import { getStorage, getFirestore } from "../../firebase";
import { useFirebaseApp } from "reactfire";
import { Layout } from "./layout";

export function Register({ navigation }) {
  const storage = getStorage();
  const firebase = useFirebaseApp();
  const storageRef = storage.ref();

  const db = firebase.firestore();

  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [emailExists, setEmailExists] = useState({ exists: false, msg: "" });
  // const [usernameExists, setUsernameExists] = useState(0);

  const [usernameExists, setUsernameExists] = useState({
    exists: false,
    msg: ""
  });
  const [invalidPassword, setInvalidPassword] = useState({
    invalid: false,
    msg: ""
  });

  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [invalidConfirmedPassword, setInvalidConfirmedPassword] = useState({
    invalid: false,
    msg: ""
  });

  const [logoUrl, setLogoUrl] = useState();

  const sendMail = async () => {
    let user = {
      email,
      username
    };

    try {
      await fetch(
        "https://us-central1-virtualhockey.cloudfunctions.net/app/api/email",
        //"http://192.168.0.26:3000/api/email",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify({ user })
        }
      );
    } catch (error) {
      Alert.alert(
        "Oops!",
        `An error has occurred! Please try again or contact administrator :(`
      );
    }
  };

  const screenHandler = () => {
    navigation.navigate("Login");
  };

  const handleKeyDown = e => {
    if (e.nativeEvent.key == "Enter") {
      // CURRENTLY NOT WORKING
    }
  };

  const emailInputHandler = newValue => {
    setEmail(newValue);
    setEmailExists({ exists: false });
  };

  const userInputHandler = newValue => {
    setUsername(newValue);
    setUsernameExists({ exists: false });
  };

  const passInputHandler = newValue => {
    setPassword(newValue);
    setInvalidPassword(false);
  };

  const confirmPassInputHandler = newValue => {
    setConfirmedPassword(newValue);
    setInvalidConfirmedPassword(false);
  };

  const validatePasswordConfirmation = () => {
    // console.log(confirmedPassword);
    if (password !== confirmedPassword) {
      throw { code: "pass/no-match", message: "Passwords must match" };
    }
  };

  const validatePassword = () => {
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    if (!strongRegex.test(password)) {
      throw {
        code: "pass/invalid-pass",
        message:
          "Password must have at least 8 characters, 1 upper, 1 lower and 1 number"
      };
    }
  };

  const validateUsername = () => {
    if (username.length >= 3 && username.length <= 10) {
      return true;
    } else {
      console.log(username);
      throw {
        code: "invalid-username",
        message: "Username must be between 3 and 10 characters long"
      };
    }
  };

  const submitHandler = async () => {
    setLoading(true);
    setInvalidConfirmedPassword({
      invalid: false,
      msg: ""
    });
    try {
      validatePassword();
      validatePasswordConfirmation();

      validateUsername();

      const temp = await checkIfUsernameExists();

      if (!temp) {
        await createUser();
        sendMail();
        screenHandler();
      }
    } catch (error) {
      if (
        error.code === "username-exists" ||
        error.code === "empty-username" ||
        error.code === "invalid-username"
      ) {
        setUsernameExists({ exists: true, msg: error.message });
      } else if (
        error.code === "auth/email-already-in-use" ||
        error.code === "auth/invalid-email"
      ) {
        setEmailExists({ exists: true, msg: error.message });
      } else if (
        error.code === "auth/weak-password" ||
        error.code === "pass/invalid-pass"
      ) {
        setInvalidPassword({ invalid: true, msg: error.message });
      } else if (error.code === "pass/no-match") {
        setInvalidConfirmedPassword({ invalid: true, msg: error.message });
      }
    }
    setLoading(false);
  };

  const checkIfUsernameExists = async () => {
    if (username.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/))
      throw {
        code: "empty-username",
        message: "Username cannot contain white spaces or special characters"
      };
    if (username.trim() === "")
      throw {
        code: "empty-username",
        message: "You must enter a valid username"
      };

    try {
      const db = getFirestore();
      let querySnapshot = await db
        .collection("users")
        .where("username", "==", username)
        .get();
      if (querySnapshot.docs[0] != undefined) {
        throw {
          code: "username-exists",
          message: `The username ${username} is already in use`
        };
      }
    } catch (error) {
      throw error;
    }
  };

  const createUser = async () => {
    try {
      const userCreds = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      db.collection("users")
        .doc(userCreds.user.uid)
        .set({
          username,
          role: 1,
          paymentDate: null,
          lastVideoWatched: 1,
          points: 250,
          lastSignIn: ""
        });

      return { code: null };
    } catch (error) {
      console.log(error.code);

      throw { code: error.code, message: error.message };
    }
  };

  return (
    <Layout
      confirmPassInputHandler={confirmPassInputHandler}
      confirmedPassword={invalidConfirmedPassword}
      userInputHandler={userInputHandler}
      passInputHandler={passInputHandler}
      submitHandler={submitHandler}
      invalidPassword={invalidPassword}
      screenHandler={screenHandler}
      emailInputHandler={emailInputHandler}
      usernameExists={usernameExists}
      emailExists={emailExists}
      handleKeyDown={handleKeyDown}
      loading={loading}
      setInvalidConfirmedPassword={setInvalidConfirmedPassword}
      setInvalidPassword={setInvalidPassword}
    />
  );
}
