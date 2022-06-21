import React from "react";
import { View, Image } from "react-native";
import styles from "./styles";


export function Layout({
  profileImage,
}) {
  return (
      <View style={styles.containerImage}>
        <Image style={styles.circle} source={{uri:profileImage}} />
      </View>
  );
}
