import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { colorsPalette } from "../../../assets/styles/colorsPalette";
import commonStyles from "../../../assets/styles/commonStyles";
import fontStyles from "../../../assets/styles/fontStyles";
import styles from "./styles";

export function Layout({ user, position, avatarUrl }) {
  return (
    <View
      style={[
        styles.rowContainer,
        { backgroundColor: "rgba(255, 255, 255, 0.21)" },
      ]}
    >
      <View style={styles.positionContainer}>
        <Text
          style={[
            fontStyles.positionNumber
          ]}
        >
          {position}
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: avatarUrl,
          }}
        />
      </View>
      <View style={styles.usernameContainer}>
        <Text style={fontStyles.usernameRanking}>
          {user.username}
        </Text>
      </View>
      <View style={styles.pointsContainer}>
        <Text style={[fontStyles.pointsRanking, {color: colorsPalette.colorTwo}]}>{user.points}</Text>
      </View>
    </View>
  );
}
