import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { getHouseColor } from "../../../helpers/houseColors";

export default function ResultDisplay({ result }) {
  return (
    <View style={styles.container}>
      {Object.keys(result).map((key, index) => {
        const ballColor = getHouseColor(key);

        return (
          <View key={key} style={styles.content}>
            <View
              style={[styles.ball, { backgroundColor: ballColor }]}
              key={index}
            />
            <Text style={styles.text}>{result[key]}</Text>
          </View>
        );
      })}
    </View>
  );
}
