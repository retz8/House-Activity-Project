import { Text, View } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import { loggedInUserContext } from "../../hooks/UserContext";
import { FlatList } from "react-native";
import EventPreview from "../../components/EventPreview/EventPreview";
import { getEvent, getEvents } from "../../api/event";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import SearchBar from "./SearchBar/SearchBar";
import { verticalScale } from "../../helpers/responsiveSize";

let pageNum = 0;
const limit = 5;

export default function Search({ navigation }) {
  const { loggedInUser, initialEvents } = useContext(loggedInUserContext);
  const [reachedToEnd, setReachedToEnd] = useState(false);
  const [busy, setBusy] = useState(false);
  const [currentEvents, setCurrentEvents] = useState([]);

  // remove navigation header
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  useEffect(() => {
    initialEvents.map((ev) => {
      console.log(ev.title);
    });
    setCurrentEvents(initialEvents);
    return () => {
      // cleanup whenever we unmount home component
      pageNo = 1;
      setReachedToEnd(false);
    };
  }, []);

  const fetchMoreEvents = async () => {
    if (reachedToEnd || busy) return;
    pageNum += 1;

    setBusy(true);
    const { error, events, eventCount } = await getEvents(pageNum, limit); // api 요청
    console.log(eventCount);
    console.log(`current: ${currentEvents.length}`);
    setBusy(false);
    if (error === "No Events Found") {
      return setReachedToEnd(true);
    }
    if (eventCount === currentEvents.length) {
      return setReachedToEnd(true);
    }

    setCurrentEvents([...currentEvents, ...events]);
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

  return (
    <SafeAreaView>
      <Text style={styles.searchPageTitle}>Search Events</Text>
      <SearchBar />
      <View style={styles.container}>
        <FlatList
          data={currentEvents}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            flexGrow: 0,
            flexShrink: 0,
          }}
          removeClippedSubviews={false}
          renderItem={renderItem}
          onEndReached={fetchMoreEvents}
          onEndReachedThreshold={0.1} // only call method when it compeltely ends
          ListFooterComponent={() => {
            return reachedToEnd ? (
              <Text
                styles={{
                  fontWeight: "bold",
                  color: "#383838",
                  textAlign: "center",
                  paddingVertical: 15,
                }}
              >
                You reached to the end!
              </Text>
            ) : null;
          }}
        />
      </View>

      {/* FlatList with initialEvents & fetchMoreEvents */}
    </SafeAreaView>
  );
}
