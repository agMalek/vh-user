import { Dimensions, StyleSheet, Platform, StatusBar } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const availableHeight = height - 105;

export default StyleSheet.create({
  container: {
    flex: 1,
    minHeight: availableHeight,
    maxHeight: availableHeight,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  superior: {
    margin: 20,
    flex: 2,
    flexDirection: "row",
    paddingLeft: 12,
    paddingRight: 30,
  },
  middle: {
    flex: 9,
    marginBottom: 0,
    // marginHorizontal: 20,
    alignItems: "center",
  },
  inferior: {
    flex: 6,
  },

  leftHeader: {
    justifyContent: "center",
  },
  rightHeader: {
    marginLeft: "auto",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 10,
  },
  trophy: {
    width: 29,
    height: 29,
    marginBottom: 2,
  },
  workOutCard: {},
  horizontalScroll: {
    margin: 0,
    width,
  },
});
