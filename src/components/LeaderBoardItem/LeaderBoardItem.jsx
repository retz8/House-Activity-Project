// LeaderBoardItem: House Points Visualization
// LeaderBoardItem: points visualization
// houses: 4 object elements (house)
// house:
// {
//     id: house's id,
//     name: house name,
//     point: house point,
//     crest: house crest,
//     motto: house motto,
//     enMotto: house english Motto,
//     color: house color,
// }
import { Text, View } from "react-native";
import React, { Component } from "react";
import styles from "./styles";

export default function LeaderBoardItem() {
  return (
    <View style={styles.container}>
      <Text>LeaderBoard</Text>
    </View>
  );
}
