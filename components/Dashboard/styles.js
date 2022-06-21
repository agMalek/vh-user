import { Dimensions, StyleSheet } from "react-native";
import commonStyles from '../../assets/styles/commonStyles'
import { colorsPalette } from "../../assets/styles/colorsPalette";
import fontStyle from '../../assets/styles/fontStyles'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({

  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImagenTitulo: {
    marginTop: 10,
    marginHorizontal: 10,
    justifyContent: 'flex-start',
    height: 80,
  },
  imagenTitulo: {
    flex: 1,
    width: width * .8,
    height: 80,
    resizeMode: 'contain'
  },
  containerImage: {
    marginTop: 10,
    justifyContent: 'flex-start',
    marginBottom: 30
  },
  circle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: colorsPalette.colorOne,
    borderWidth: 4,
  },
  usernameText: {
    ...fontStyle.fontFamily,
    fontSize: 35,
  },
  explanationMessageText: {
    ...fontStyle.fontType,
    textAlign: 'center',
  },

});
