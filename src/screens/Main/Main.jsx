import { Button, ScrollView, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import styles from "./styles";
import Slider from "./Slider/Slider";
import { getAllEvents, getEvent } from "../../api/event";
import EventPreview from "../../components/EventPreview/EventPreview";
import { FlashList } from "@shopify/flash-list";
import Loading from "../../components/Loading/Loading";
import EventsList from "../Search/EventsList/EventsList";

export default function Main({ navigation, route }) {
  const {
    loggedInUser,
    initialEvents,
    accessToken,
    setAccessToken,
    setLoggedInUser,
  } = useContext(loggedInUserContext);

  const [allEvents, setAllEvents] = useState();
  const [sliderEvents, setSliderEvents] = useState();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    // console.log(loggedInUser);
  }, [navigation]);

  const fetchAllEvents = async () => {
    const { error, events } = await getAllEvents();
    if (error) return console.log(error);
    setAllEvents(events);

    let sEvents = [];
    events.map((ev) => {
      if (ev.upcoming || ev.resultPosted.active) {
        sEvents.push(ev);
      }
    });
    //console.log(sEvents);
    setSliderEvents(sEvents);
  };

  useEffect(() => {
    //console.log(initialEvents);
    fetchAllEvents();
  }, []);

  const handlePreviewPress = async (id) => {
    const { error, event } = await getEvent(id);
    if (error) console.log(error);

    navigation.navigate("EventPage", { event: event });
  };

  if (!allEvents) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Hello!</Text>

        {/* Please Uncomment below when you add to repo */}

        <Button
          title="go to user profile"
          onPress={() =>
            navigation.navigate("UserProfile", { user: loggedInUser })
          }
        />
        <Button
          title="go to Albemarle house profile"
          onPress={() =>
            navigation.navigate("HouseProfile", { houseName: "Albemarle" })
          }
        />
        <Button
          title="go to Lambert house profile"
          onPress={() =>
            navigation.navigate("HouseProfile", { houseName: "Lambert" })
          }
        />
        {sliderEvents && (
          <View style={styles.sliderContainer}>
            <Slider data={sliderEvents} />
          </View>
        )}

        <View style={styles.listContainer}>
          <EventsList data={allEvents} navigation={navigation} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
