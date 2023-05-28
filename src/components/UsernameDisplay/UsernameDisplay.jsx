import { View, Text } from "react-native";
import React from "react";
import styles, { getImageStyle } from "./styles";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function UsernameDisplay({ name, profile, size, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: profile }} style={getImageStyle(size)} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}
