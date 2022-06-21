import React, { useRef, useState, useCallback } from "react";
import { Layout } from "./layout";
import { useFocusEffect } from "@react-navigation/native";

export const Password = ({
  tag,
  passInputHandler,
  wrongPassword,
  setWrongPassword = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const passInput = useRef();
  const showPasswordHandler = (newValue) => {
    setShowPassword(newValue);
  };

  // useEffect(() => {
  //   console.log("entre al coso");
  //   passInput.current.clear();
  //   setWrongPassword && setWrongPassword(false)
  // }, []);

  useFocusEffect(
    useCallback(() => {
      passInput.current.clear();
      setWrongPassword && setWrongPassword(false);
    }, [])
  );

  return (
    <Layout
      tag={tag}
      passInputHandler={passInputHandler}
      wrongPassword={wrongPassword}
      showPassword={showPassword}
      showPasswordHandler={showPasswordHandler}
      passInput={passInput}
    />
  );
};
