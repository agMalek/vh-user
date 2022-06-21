import { Dimensions, StyleSheet } from "react-native";
import commonStyles from "../../../../assets/styles/commonStyles";
import { colorsPalette } from "../../../../assets/styles/colorsPalette";
import fontStyle from "../../../../assets/styles/fontStyles";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  containerImage: {
    marginTop: 20,
    justifyContent: "flex-start",
    marginBottom: 30,
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: colorsPalette.colorOne,
    borderWidth: 4,
  },
});
