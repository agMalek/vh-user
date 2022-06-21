import React from "react";
import { Text, View, Image, ScrollView, ActivityIndicator } from "react-native";
import styles from "./styles";
import { Frame } from "../Frame";
import fontStyles from "../../assets/styles/fontStyles";
import { Item } from "./Item/container";
import {colorsPalette} from '../../assets/styles/colorsPalette'

export function Layout({ users, podiumAvatars, defaultAvatar, loading }) {
  return (
    <Frame>
      {loading ? (
        <ActivityIndicator
          size="large"
          animating={true}
          color={colorsPalette.colorOne}
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        />
      ) : (
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.titleContainer}>
            <Text style={fontStyles.leaderboardTitle}>Leaderboard</Text>
          </View>
          <View style={styles.podiumContainer}>
            <View style={styles.leftCircleContainer}>
              <Text style={fontStyles.positionNumber}>2</Text>
              <Image
                style={styles.circleSmall}
                source={{
                  uri: podiumAvatars[1],
                }}
              />
              <Text style={fontStyles.usernameRanking}>
                {users.podium[1].username}
              </Text>
              <Text style={fontStyles.pointsRanking}>
                {users.podium[1].points}
              </Text>
            </View>
            <View style={styles.centerCircleContainer}>
              <Text style={fontStyles.positionNumber}>1</Text>
              <Image
                style={styles.circle}
                source={{
                  uri: podiumAvatars[0],
                }}
              />
              <Text style={fontStyles.usernameRanking}>
                {users.podium[0].username}
              </Text>
              <Text style={fontStyles.pointsRanking}>
                {users.podium[0].points}
              </Text>
            </View>
            <View style={styles.rightCircleContainer}>
              <Text style={fontStyles.positionNumber}>3</Text>
              <Image
                style={styles.circleSmall}
                source={{
                  uri: podiumAvatars[2],
                }}
              />
              <Text style={fontStyles.usernameRanking}>
                {users.podium[2].username}
              </Text>
              <Text style={fontStyles.pointsRanking}>
                {users.podium[2].points}
              </Text>
            </View>
          </View>
          <View style={styles.bottomContainer}>
            {users.others.map((user, index) => (
              <Item
                key={user.username}
                user={user}
                position={index}
                defaultAvatar={defaultAvatar}
              />
            ))}
          </View>
        </ScrollView>
      )}
    </Frame>
  );
}
