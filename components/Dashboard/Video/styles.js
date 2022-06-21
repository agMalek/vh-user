import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  video: {
    alignSelf: "center",
    display: "none",
  },
  spinner: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  loader: {
    display: "flex",
    alignSelf: "center",
    top: height / 2,
  },
});
