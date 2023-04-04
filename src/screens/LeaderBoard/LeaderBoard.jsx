// LeaderBoard page
// two components: LeaderBoardItem & FlatList

// filteredEvents: all past & result posted events (array of objects)
// please see "API Documentation" for more details to access values in filteredEvents

import { Text, View } from "react-native";
import React, { Component, useEffect, useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import LeaderBoardItem from "../../components/LeaderBoardItem/LeaderBoardItem";
import { getAllEvents } from "../../api/event";

export default function LeaderBoard({ navigation }) {
  const [filteredEvents, setFilteredEvents] = useState([]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const fetchAllEvents = async () => {
    // api request to get all events
    const { error, events } = await getAllEvents();
    if (error) return console.log(error);
    const filteredEvents = events.filter(
      (event) => event.upcoming === false && event.waitingResult === false
    );
    setFilteredEvents(filteredEvents);
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. House Points Visualization (Leaderboard Four houses) */}
      <LeaderBoardItem />

      {/* 2. FlatList rendering all of the events summary */}
      {filteredEvents ? (
        // <FlatList
        // //
        // // for data, pass filteredEvents
        // // for renderItem, render EventSummary component, don't pass onPress now
        // />
        <Text>FlatList...</Text>
      ) : (
        <Text>Loading..</Text>
      )}
    </SafeAreaView>
  );
}
