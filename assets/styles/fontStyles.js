import color from "color";
import { StyleSheet } from "react-native";
import { colorsPalette } from "../../assets/styles/colorsPalette";

export const fontType = {
  fontFamily: "Comfortaa_400Regular",
};

export const fontTypeBold = {
  fontFamily: "Comfortaa_700Bold",
};

export default StyleSheet.create({
  title: {
    ...fontType,
    fontSize: 38,
    textAlign: "center",
    color: colorsPalette.colorThree,
  },
  subTitle: {
    ...fontType,
    fontSize: 22,
    textAlign: "center",
    color: colorsPalette.colorThree,
  },
  inputHeader: {
    ...fontType,
    position: "relative",
    fontStyle: "normal",
    color: colorsPalette.colorOne,
    fontWeight: "bold",
    marginLeft: 10,
  },
  contentData: {
    ...fontType,
    position: "relative",
    fontStyle: "normal",
    color: colorsPalette.colorThree,
    fontWeight: "bold",
    marginLeft: 10,
  },
  regularText: {
    ...fontType,
    fontSize: 20,
  },
  buttonText: {
    ...fontType,
    fontStyle: "normal",
    color: "white",
    fontWeight: "normal",
    fontSize: 20,
  },
  footerText: {
    ...fontType,
    position: "relative",
    fontStyle: "normal",
    color: colorsPalette.colorOne,
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    // top: 6,
  },
  smallSize: {
    fontSize: 18,
  },
  normalSize: {
    fontSize: 22,
  },
  white: {
    color: colorsPalette.colorThree,
  },
  yellow: {
    color: colorsPalette.colorFour,
  },
  points: {
    color: colorsPalette.colorOne,
    fontSize: 24,
  },
  videoTitle: {
    ...fontType,
    color: colorsPalette.colorThree,
    fontSize: 24,
    fontWeight: "bold",
    // marginVertical: 2,
  },
  videoInfo: {
    ...fontType,
    color: colorsPalette.colorThree,
    fontSize: 14,
    textAlign: "justify",
    // lineHeight: 20,
  },
  oldTitle: {
    ...fontType,
    fontSize: 12,
    color: colorsPalette.colorThree,
    textAlign: "center",
  },
  username: {
    ...fontType,
    fontSize: 30,
    color: colorsPalette.colorThree,
    // marginRight: 'auto',
  },
  leaderboardTitle: {
    ...fontType,
    fontSize: 30,
    color: colorsPalette.colorThree,
    textAlign: "center",
  },
  positionNumber: {
    ...fontTypeBold,
    fontSize: 22,
    color: colorsPalette.colorThree,
    textAlign: "center",
  },
  usernameRanking: {
    ...fontTypeBold,
    fontSize: 16,
    color: colorsPalette.colorThree,
    textAlign: "center",
  },
  pointsRanking: {
    ...fontTypeBold,
    fontSize: 16,
    color: colorsPalette.colorOne,
    textAlign: "center",
  },
  trainingProgram: {
    ...fontTypeBold,
    fontSize: 20,
    color: colorsPalette.colorThree,
    textAlign: "center",
    lineHeight: 22,
  },
  descText: {
    ...fontTypeBold,
    fontSize: 14,
    color: colorsPalette.colorThree,
    textTransform: "uppercase",
    textAlign: "justify",
    lineHeight: 18,
  },
  oldPrice: {
    ...fontTypeBold,
    fontSize: 22,
    color: colorsPalette.specialRed,
    textAlign: "center",
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
  newPrice: {
    ...fontTypeBold,
    fontSize: 32,
    color: colorsPalette.colorFive,
    textAlign: "center",
  },
  taxText: {
    ...fontTypeBold,
    fontSize: 20,
    color: colorsPalette.colorFive,
    textAlign: "center",
  },
});
