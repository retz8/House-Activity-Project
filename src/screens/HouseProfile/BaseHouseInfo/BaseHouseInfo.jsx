import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles";

export default function BaseHouseInfo({ crest, name, point, color }) {
  return (
    // <View style={styles.container}>
    // <Image style={styles.crest} source={{ uri: crest.url }} alt="" />
    // <Text style={styles.houseName}>{name}</Text>

    // <Text style={styles.points}>{point}</Text>
    // </View>
    <View style={styles.container}>
      <View style={styles.image}>
        <Image style={styles.crest} source={{ uri: crest.url }} alt="" />
      </View>

      <Text style={styles.houseName}>{name}</Text>

      <Text style={[styles.points, { color: color }]}>{point}</Text>
    </View>
  );
}
