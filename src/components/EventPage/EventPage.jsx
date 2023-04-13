// called from "EventPreview" (Main, Search page) or "EventSummary" (LeaderBoard page)

import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import ImageButton from "../ImageButton/ImageButton";

export default function EventPage({ navigation, route }) {
  const { event } = route.params;
  // -----------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <ImageButton
          source={require("../../../assets/UserProfile/backButton.png")}
          style={styles.backButton}
          onPress={() => navigation.pop()}
        />
      </View>
      <Text>{event.title}</Text>
    </SafeAreaView>
  );
}
