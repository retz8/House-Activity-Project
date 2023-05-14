import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import { getHouseColor } from "../../../helpers/houseColors";

export default function ResultDisplay({ waiting, result }) {
  return (
    <View style={styles.container}>
      <Text style={styles.eventLabel}>Results: </Text>
      {waiting ? (
        <Text>Waiting for result...</Text>
      ) : (
        Object.keys(result).map((key) => {
          return (
            <View style={styles.houseResult} key={key}>
              <View
                style={{
                  ...styles.circle,
                  backgroundColor: getHouseColor(key),
                }}
              ></View>
              <Text style={styles.point}>{result[key]}</Text>
            </View>
          );
        })
      )}
    </View>
  );
}
