import { Button, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { loggedInUserContext } from "../../hooks/UserContext";
import styles from "./styles";
import Slider from "./Slider/Slider";
import { getAllEvents } from "../../api/event";

export default function Main({ navigation, route }) {
  const {
    loggedInUser,
    initialEvents,
    accessToken,
    setAccessToken,
    setLoggedInUser,
  } = useContext(loggedInUserContext);

  const [allEvents, setAllEvents] = useState([]);

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
    // console.log(loggedInUser);
  }, [navigation]);

  const fetchAllEvents = async () => {
    const { error, events } = await getAllEvents();
    if (error) return console.log(error);
    setAllEvents(events);
  };

  useEffect(() => {
    //console.log(initialEvents);
    fetchAllEvents();
  }, []);

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
      <Slider data={allEvents} />

      {/* House Points Leaderboard */}

      {/* Events Preview FlatList, use initialEvents and fetchMoreEvents()*/}
    </SafeAreaView>
  );
}
