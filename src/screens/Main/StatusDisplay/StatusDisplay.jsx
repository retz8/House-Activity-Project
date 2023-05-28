import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function StatusDisplay({ status }) {
  const renderStatus =
    status === "upcoming"
      ? "Upcoming!"
      : status === "resultPosted"
      ? "Result!"
      : "";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{renderStatus}</Text>
    </View>
  );
}
