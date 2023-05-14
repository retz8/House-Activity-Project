import { View, Text, Animated } from "react-native";
import React from "react";
import styles from "./styles";

export default function Pagination({ data, scrollX, index }) {
  //console.log(data.length);
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.singleBar, idx === index && styles.activeBar]}
          />
        );
      })}
    </View>
  );
}
