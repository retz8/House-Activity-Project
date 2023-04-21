import { Text, View } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import EventPreview from "../../components/EventPreview/EventPreview";
import { getAllEvents, getEvent, getEvents } from "../../api/event";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import SearchBar from "./SearchBar/SearchBar";
import { FlashList } from "@shopify/flash-list";
import Loading from "../../components/Loading/Loading";
import { loggedInUserContext } from "../../hooks/UserContext";

export default function Search({ navigation }) {
  const {
    setLoggedInUser,
    setAccessToken,
    initialEvents,
    setInitialEvents,
    initialFilteredEvents,
    setInitialFilteredEvents,
  } = useContext(loggedInUserContext);
  const [allEvents, setAllEvents] = useState();

  // remove navigation header
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    fetchAllEventsMock();
  }, []);

  const fetchAllEvents = async () => {
    const { error, events } = await getAllEvents();
    if (error) console.log(error);

    setAllEvents(events);
  };

  const fetchAllEventsMock = () => {
    setAllEvents(initialEvents["data"]);
  };

  const handlePreviewPress = async (id) => {
    const { error, event } = await getEvent(id);
    if (error) console.log(error);

    navigation.navigate("EventPage", { event: event });
  };

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

  if (!allEvents) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.searchPageTitle}>Search Events</Text>
      <SearchBar />
      {/* All of the events list */}
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

      {/* FlatList with initialEvents & fetchMoreEvents */}
    </SafeAreaView>
  );
}
