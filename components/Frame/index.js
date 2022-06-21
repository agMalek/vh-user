import React, { Children } from "react";
import {
  Text,
  View,
  Platform,
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export function Frame(props) {
  const color1 = "rgba(2, 28, 59, 1)";
  const color2 = "rgba(19, 38, 135, 1)";

  return (
    <LinearGradient style={styles.gradient} colors={[color1, color2]}>
      <View style={styles.statusBar}>
        {Platform.OS === "ios" ? (
          <SafeAreaView style={{flex: 1}}>{props.children}</SafeAreaView>
        ) : (
          <React.Fragment>{props.children}</React.Fragment>
        )}
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    flex: 1,
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // flexWrap: "wrap",
    // flexDirection: "row",
    // margin: 0,
    // padding: 0,
  },
  gradient: {
    flex: 1,
    margin: 0,
    padding: 0,
  },
});
