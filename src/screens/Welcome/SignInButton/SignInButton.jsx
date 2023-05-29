import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";

export default function SignInButton({ text, onPress }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: text === "Sign in" ? "#CA6464" : "#FFFFFF" },
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          { color: text === "Sign in" ? "#F8F7EE" : "#4E3535" },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
