import { Text } from "react-native";
import React, { useEffect, useState } from "react";
import { getAllEvents } from "../../api/event";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import SearchBar from "./SearchBar/SearchBar";
import Loading from "../../components/Loading/Loading";
import EventsList from "./EventsList/EventsList";

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
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  // remove navigation header
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  // fetch all events [need to optimize]
  const fetchAllEvents = async () => {
    const { error, events } = await getAllEvents();
    if (error) console.log(error);

    setAllEvents(events);
  };

  useEffect(() => {
    fetchAllEvents();
  }, []);

  if (!allEvents) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.searchPageTitle}>Search Events</Text>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <EventsList
        searchPhrase={searchPhrase}
        data={allEvents}
        setClicked={setClicked}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}
