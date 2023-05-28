import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function ParticipantsDisplay({ isForAll }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.eventLabel}>Participants: </Text>
      {isForAll ? (
        <Text style={styles.eventText}>All</Text>
      ) : (
        <Text style={styles.eventText}>Sign Up</Text>
      )}
    </View>
  );
}
