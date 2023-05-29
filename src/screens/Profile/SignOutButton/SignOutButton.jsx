import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function SignOutButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: text === "Signing out..." ? "#CA6464" : "#FFFFFF" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          { color: text === "Signing out..." ? "#F8F7EE" : "#78060C" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
