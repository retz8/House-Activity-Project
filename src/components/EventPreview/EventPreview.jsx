// If user clicks EventPreview Component, it directs to matching EventPage
// <UserProfileCard>
// user: current user
// please refer to "API Documentation" for more details to access values of user

import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

export default function EventPreview({ event, onPress }) {
  const { title } = event;

  // -----------------------------------------------------
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
