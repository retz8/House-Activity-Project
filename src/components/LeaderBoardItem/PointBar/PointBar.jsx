import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import styles from "./styles";

export default function PointBar({
  name,
  point,
  color,
  height,
  url,
  navigation,
  topHouse,
  size = "medium",
}) {
  return (
    <View
      style={[
        size === "small" ? styles.smallContainer : styles.container,
        { height: height, backgroundColor: color },
      ]}
    >
      <View style={styles.contents}>
        <View style={styles.pointBarContents}>
          {topHouse === name && (
            <Image
              source={require("../../../../assets/Leaderboard/crown.png")}
              style={styles.crown}
            />
          )}
          <TouchableOpacity
            style={styles.buttonCrestStyle}
            activeOpacity={0.5}
            onPress={() =>
              navigation.navigate("HouseProfile", { houseName: "Albemarle" })
            }
          >
            <Image
              source={{ uri: url }}
              style={
                size === "small" ? styles.smallCrestImage : styles.crestImage
              }
            />
          </TouchableOpacity>

          <View style={styles.scoreReporterContainer}>
            <Text
              style={
                size === "small"
                  ? styles.smallHouseNameText
                  : styles.houseNameText
              }
            >
              {name}
            </Text>
            <Text
              style={
                size === "small" ? styles.smallScoreText : styles.scoreText
              }
            >
              {point}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
