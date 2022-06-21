import { Dimensions, StyleSheet } from "react-native";
import { colorsPalette } from "../../../../assets/styles/colorsPalette";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  whiteTransparentBox: {
    flex: 1,
    padding: 0,
    // width: width * 0.85,
    marginRight: 20,
    backgroundColor: "rgba(255,255,255,0.16)",
    borderRadius: 10,
    // overflow: 'hidden',
  },
  videoImage: {
    // alignItems: "center",
    // alignSelf: "center",
    // resizeMode: "cover",
    flex: 1,
    minWidth: width * 0.7,
    width: "100%",
    // minHeight: 200,
    overflow: "hidden",
  },
  cardContainer: { flex: 1 },
  textoInfo: {
    fontFamily: "Comfortaa_400Regular",
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    marginBottom: 25,
    paddingHorizontal: 20,
  },
  
  descriptionContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },

});
