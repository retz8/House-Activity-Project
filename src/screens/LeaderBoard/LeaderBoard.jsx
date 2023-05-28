// LeaderBoard page
// two components: LeaderBoardItem & FlatList

// filteredEvents: all past & result posted events (array of objects)
// please see "API Documentation" for more details to access values in filteredEvents

import { FlatList, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import LeaderBoardItem from "../../components/LeaderBoardItem/LeaderBoardItem";
import { getAllEvents, getFilteredEvents } from "../../api/event";
import { loggedInUserContext } from "../../hooks/UserContext";
import Loading from "../../components/Loading/Loading";
import EventSummary from "./EventSummary/EventSummary";
import EventsList from "../Search/EventsList/EventsList";

let pageNum = 1;
const limit = 5;

export default function LeaderBoard({ navigation }) {
  const [reachedToEnd, setReachedToEnd] = useState(false);
  const [busy, setBusy] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState();
  const { loggedInUser, initialFilteredEvents } =
    useContext(loggedInUserContext);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const fetchAllEvents = async () => {
    const { error, events } = await getAllEvents();
    if (error) return console.log(error);

    const resultPostedEvents = events.filter(
      (event) => event.resultPosted.waitingResult === false
    );
    setFilteredEvents(resultPostedEvents);
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  if (!filteredEvents) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. House Points Visualization (Leaderboard Four houses) */}
      <View style={styles.leaderboardItemContainer}>
        <LeaderBoardItem navigation={navigation} />
      </View>

      {/* 2. FlatList rendering all of the events summary */}
      <View style={styles.eventSummariesContainer}>
        <EventsList
          data={filteredEvents}
          navigation={navigation}
          mode="showResult"
        />
      </View>
    </SafeAreaView>
  );
}
