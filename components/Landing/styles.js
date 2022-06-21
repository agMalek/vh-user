import { Dimensions, StyleSheet } from "react-native";
import { colorsPalette } from "../../assets/styles/colorsPalette";

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default StyleSheet.create({

  topContainer: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImagenTitulo: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'flex-start',
    height: 80,
  },
  imagenTitulo: {
    flex: 1,
    width: width*.8,
    height: 80,
    resizeMode: 'contain'
  },  
  containerTextoInicial: {
    alignItems: 'center',
    marginBottom: 20,
  },
  celeste: {
    fontFamily:"Comfortaa_400Regular",
    fontSize: 25,
    color: '#00AEEF',
    lineHeight: 27,
  },
  blanco: {
    fontFamily:"Comfortaa_400Regular",
    fontSize: 25,
    color: '#fff',
    lineHeight: 27,

  },
  containerImagenVideo: {
    margin: 10,
  },
  imagenVideo: {
    width: width*.8,
    height: 200,
    borderRadius: 15
  },
  boton: {
    width: width*.8,
    backgroundColor: '#00AEEF',
    padding: 10,
    borderRadius: 10,
  },
  textoBoton: {
    fontFamily:"Comfortaa_400Regular",
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: "600"
  },
  textoChico: {
    fontFamily:"Comfortaa_400Regular",
    color: '#00AEEF',
    fontSize: 20,
    marginBottom: 25
  },
  textoInfo: {
    fontFamily:"Comfortaa_400Regular",
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 20
  },
  scroll: {
    flex: 1,
  },
  priceContainer: {
    width: width*0.75,
    height: 127,
    backgroundColor: colorsPalette.colorThree,
    marginVertical: 15,
    borderRadius: 8,
    borderColor: colorsPalette.colorTwo,
    borderWidth: 1,
  },
  description: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 70,
    marginTop: 10,
    marginBottom: 15,
  },

});
