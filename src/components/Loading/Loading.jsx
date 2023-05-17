import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import ImageButton from "../ImageButton/ImageButton";

export default function Loading() {
  // -----------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.loadingText}>Loading...</Text>
    </SafeAreaView>
  );
}
