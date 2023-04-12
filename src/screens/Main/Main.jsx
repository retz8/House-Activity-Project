import { Button, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import styles from "./styles";
import Slider from "./Slider/Slider";
import { getAllEvents, getEvent } from "../../api/event";
import EventPreview from "../../components/EventPreview/EventPreview";
import { FlashList } from "@shopify/flash-list";
import Loading from "../../components/Loading/Loading";

export default function Main({ navigation, route }) {
  const {
    loggedInUser,
    initialEvents,
    accessToken,
    setAccessToken,
    setLoggedInUser,
  } = useContext(loggedInUserContext);

  const [allEvents, setAllEvents] = useState();
  const [sliderEvents, setSliderEvents] = useState([]);

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
    console.log(sEvents);
    setSliderEvents(sEvents);
  };

  useEffect(() => {
    //console.log(initialEvents);
    fetchAllEvents();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.renderItemContainer}>
        <EventPreview
          event={item}
          onPress={() => handlePreviewPress(item.id)}
        />
      </View>
    );
  };

  const handlePreviewPress = async (id) => {
    const { error, event } = await getEvent(id);
    if (error) console.log(error);

    navigation.navigate("EventPage", { event: event });
  };

  if (!allEvents) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.testText}>This is a main page</Text>
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

      <Slider data={sliderEvents} />

      <View style={styles.listContainer}>
        <FlashList
          data={allEvents}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          estimatedItemSize={30}
          ListEmptyComponent={() => (
            <Text style={styles.noEventsText}>There's no events...</Text>
          )}
          ListFooterComponent={() => {
            return (
              <Text style={styles.noEventsText}>You reached to the end!</Text>
            );
          }}
        />
      </View>

      {/* House Points Leaderboard */}

      {/* Events Preview FlatList, use initialEvents and fetchMoreEvents()*/}
    </SafeAreaView>
  );
}
