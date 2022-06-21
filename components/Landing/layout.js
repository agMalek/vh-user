import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
// import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import imagenTitulo from "../../assets/imagenTitulo.png";
import { Frame } from "../Frame";
import fontStyles from "../../assets/styles/fontStyles";
import commonStyles from "../../assets/styles/commonStyles";


export function Layout({
  // size
  //screenHandler
  navigateToPaymentForm,
  signOut,
}) {
  return (
    <Frame>
      <ScrollView>
        <View style={styles.topContainer}>
          <View style={styles.containerImagenTitulo}>
            <Image source={imagenTitulo} style={styles.imagenTitulo}></Image>
          </View>
          <View style={styles.containerTextoInicial}>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.celeste}>TRAIN </Text>
              <Text style={styles.blanco}>ANYWHERE...</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <Text style={styles.celeste}>IMPROVE </Text>
              <Text style={styles.blanco}>EVERYWHERE!</Text>
            </View>
          </View>
          <Text style={fontStyles.trainingProgram}>VIRTUAL HOCKEY BEAST</Text>
          <Text style={fontStyles.trainingProgram}>TRAINING PROGRAM</Text>
          <View style={styles.priceContainer}>
            <Text style={fontStyles.oldPrice}>199.99 CAD</Text>
            <Text style={fontStyles.newPrice}>179.99 CAD</Text>
            <Text style={fontStyles.taxText}>+ HST</Text>
          </View>
          <View style={styles.description}>
            <Text style={fontStyles.descText}>- FREE 1 Day Trial Included</Text>
            <Text style={fontStyles.descText}>
              - 1 Full Year Access to the VH Platform
            </Text>
            <Text style={fontStyles.descText}>
              - First To Be Notified of New Programs
            </Text>
            <Text style={fontStyles.descText}>
              - Master your skills with an NHL Pro
            </Text>
            <Text style={fontStyles.descText}>
              - Multi-Level Skills & Fitness Sessions
            </Text>
            <Text style={fontStyles.descText}>
              - 60 Different Workouts over 3 Levels
            </Text>
            <Text style={fontStyles.descText}>- Less than $3 per workout</Text>
            <Text style={fontStyles.descText}>
              - Earn Points & Redeem prizes
            </Text>
            <Text style={fontStyles.descText}>- Global leaderboard</Text>
            <Text style={fontStyles.descText}>
              - Share your progress on social media
            </Text>
          </View>
          <TouchableOpacity
            style={styles.boton}
            onPress={navigateToPaymentForm}
          >
            <Text style={styles.textoBoton}> START YOUR FREE TRAIL </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={signOut}
            style={[commonStyles.textTouch, {marginBottom: 10}]}
            accessibilityRole="text"
          >
            <Text style={[fontStyles.smallSize, fontStyles.footerText]}>
              Log Out
            </Text>
          </TouchableOpacity>
          {/* <View style={styles.containerimagenVideo}>
                    <Image
                        source={imagenVideo}
                        style={styles.imagenVideo}>
                    </Image>
                </View>
                <TouchableOpacity
                    style={styles.boton}
                    onPress={navigateToPaymentForm}>
                    <Text style={styles.textoBoton}> START YOUR FREE TRAIL </Text>
                </TouchableOpacity>
                <Text style={styles.textoChico}>TAKE A CLOSER LOOK</Text>
                <Text style={styles.textoInfo}>
                    Improve your conditioning and hockey skills with an NHL Veteran. Virtual Hockey Coach, Michael Del Zotto, challenges you to train like a pro.
                </Text> */}
        </View>
      </ScrollView>
    </Frame>
  );
}
