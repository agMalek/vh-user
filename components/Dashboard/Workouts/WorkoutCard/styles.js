import { Dimensions, StyleSheet } from "react-native";
import { colorsPalette } from "../../../../assets/styles/colorsPalette";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
  whiteTransparentBox: {
    flex: 1,
    paddingVertical: 10,
    width: width * 0.9,
    // margin: 20,
    backgroundColor: "rgba(255,255,255,0.16)",
    borderRadius: 10,
    // overflow: 'hidden',
    flexDirection: "column",
    justifyContent: "space-between",
    // alignItems: "space-evenly"
  },
  videoImage: {
    // alignItems: "center",
    // alignSelf: "center",
    // resizeMode: "cover",
    flex: 1,
    maxWidth: "100%",
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
  titleContainer: {
    flex: 1,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    // marginVertical: 10,
    // justifyContent: "center",
  },
  descriptionContainer: {
    flex: 2,
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
  },
});
