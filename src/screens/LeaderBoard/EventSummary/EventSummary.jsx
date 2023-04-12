// event: current event
// please refer to "API Documentation" for more details to access values of event

import { Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";
import styles from "./styles";

export default function LeaderBoardItem({ event, onPress }) {
  // ignore onPress right now

  return (
    <TouchableOpacity>
      {/* Add things here */}
      <Text>HelloWorld</Text>
    </TouchableOpacity>
  );
}
