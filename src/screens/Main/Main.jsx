import React, { useEffect, useContext, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import { getAllEvents } from "../../api/event";

import Loading from "../../components/Loading/Loading";
import EventsList from "../../components/EventsList/EventsList";
import Slider from "./Slider/Slider";
import styles from "./styles";

export default function Main({ navigation }) {
  const { loggedInUser } = useContext(loggedInUserContext);

  const [allEvents, setAllEvents] = useState();
  const [sliderEvents, setSliderEvents] = useState();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const fetchAllEvents = async () => {
    const { error, events } = await getAllEvents();
    if (error) return console.log(error);
    setAllEvents(events);

    // slider: leaderboard + upcoming + resultPosted
    let sEvents = [];
    events.map((ev) => {
      if (ev.upcoming || ev.resultPosted.active) {
        sEvents.push(ev);
      }
    });
    setSliderEvents(sEvents);
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  if (!allEvents && !sliderEvents) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{`Hello! ${
          loggedInUser?.displayName.split(" ")[0]
        }`}</Text>

        {sliderEvents && (
          <View style={styles.sliderContainer}>
            <Slider navigation={navigation} data={sliderEvents} />
          </View>
        )}

        <View style={styles.listContainer}>
          <EventsList data={allEvents} navigation={navigation} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
