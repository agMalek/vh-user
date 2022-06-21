import React from "react";
import styles from "./styles";
import { LineDotsLoader } from "react-native-indicator";
import { Frame } from "../../Frame";
import { Video } from "expo-av";
import { View } from "react-native";

export function Layout({
  urlVideo,
  video,
  presentFullScreen,
  playVideo,
  fullScreenHandler,
  onVideoFinish,
  loadErrorHandler,
  loading,
}) {
  return (
    <Frame>
      <View style={styles.loader}>
        <LineDotsLoader
          visible={loading}
          color="white"
          barNumber={9}
          barHeight={100}
          barWidth={6}
        />
      </View>

      <Video
        ref={video}
        // style={styles.video}
        source={{ uri: urlVideo }}
        useNativeControls
        resizeMode="contain"
        onLoadStart={presentFullScreen}
        onReadyForDisplay={playVideo}
        onFullscreenUpdate={fullScreenHandler}
        onPlaybackStatusUpdate={(status) => onVideoFinish(status)}
        onError={loadErrorHandler}
      />
    </Frame>
  );
}
