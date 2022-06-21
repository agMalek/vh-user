import color from "color";
import { Dimensions, StyleSheet } from "react-native";
import { colorsPalette } from "../../../assets/styles/colorsPalette";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  rowContainer: {
    flex: 1,
    height: 67,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  avatar: {
    flex: 1,
    minHeight: 50,
    maxHeight: 50,
    width: 50,
    borderColor: colorsPalette.colorOne,
    borderRadius: 50,
  },
  positionContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: -5,
  },
  avatarContainer: {
    flex: 1.05,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  usernameContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  pointsContainer: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
