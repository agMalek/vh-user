import { Dimensions, StyleSheet } from "react-native";
import { colorsPalette } from "../../assets/styles/colorsPalette";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 20,
  },
  podiumContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 50,
    paddingTop: 10,
  },
  bottomContainer: {
    flex: 1,
  },
  circle: {
    width: 125,
    height: 125,
    borderRadius: 65,
    borderColor: colorsPalette.colorOne,
    borderWidth: 1,
    zIndex: 9,
    marginTop: 6,
    marginBottom: 5,
  },
  circleSmall: {
    width: 100,
    height: 100,
    borderRadius: 65,
    borderColor: colorsPalette.colorOne,
    borderWidth: 1,
    marginTop: 6,
  },
  leftCircleContainer: {
    top: 55,
    marginRight: -25,
  },
  rightCircleContainer: {
    top: 55,
    marginLeft: -25,
  },
  scrollContainer: {
    marginBottom: 81
  },
});
