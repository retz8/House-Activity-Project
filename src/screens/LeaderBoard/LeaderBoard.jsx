import { Text, View } from "react-native";
import React, { Component } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import LeaderBoardItem from "../../components/LeaderBoardItem/LeaderBoardItem";

export default function LeaderBoard() {
  return (
    <SafeAreaView style={styles.container}>
      <LeaderBoardItem />
    </SafeAreaView>
  );
}
