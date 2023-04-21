// LeaderBoard page
// two components: LeaderBoardItem & FlatList

// filteredEvents: all past & result posted events (array of objects)
// please see "API Documentation" for more details to access values in filteredEvents

import { Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import LeaderBoardItem from "../../components/LeaderBoardItem/LeaderBoardItem";
import { getFilteredEvents } from "../../api/event";
import { loggedInUserContext } from "../../hooks/UserContext";
import Loading from "../../components/Loading/Loading";

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

  const fetchMoreEvents = async () => {
    if (reachedToEnd || busy) return;
    pageNum += 1;

    setBusy(true);
    const { error, events, eventCount } = await getFilteredEvents(
      pageNum,
      limit
    ); // api 요청
    setBusy(false);
    if (error) return console.log(error);
    if (eventCount === filteredEvents.length) return setReachedToEnd(true);

    setFilteredEvents([...filteredEvents, ...events]);
  };

  const fetchMoreEventsMock = () => {
    setReachedToEnd(true);
  };

  useEffect(() => {
    setFilteredEvents(initialFilteredEvents["data"]);
    console.log("------------------------------");
    return () => {
      // cleanup whenever we unmount home component
      pageNo = 1;
      setReachedToEnd(false);
    };
  }, []);

  if (!filteredEvents) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* 1. House Points Visualization (Leaderboard Four houses) */}
      <LeaderBoardItem />
      {/* 2. FlatList rendering all of the events summary */}
      <View style={styles.eventSummariesContainer}>
        {/* { // <FlatList
          // //
          // // for data, pass filteredEvents
          // // for renderItem, render EventSummary component, don't pass onPress now

          // ** THE CODE BELOW IS TO FETCH MORE POSTS WHEN USER SCROLLS DOWN **
          // ** PLEASE LEAVE THE CODE BELOW, IF YOU THINK THE CODE BELOW HAS AN ERROR, **
          // ** LET JIOH KNOW **
          // onEndReached={fetchMoreEventsMock}
          // onEndReachedThreshold={0.1} // only call method when it compeltely ends
          // ListFooterComponent={() => {
          //   return reachedToEnd ? (
          //     <Text
          //       styles={{
          //         fontWeight: "bold",
          //         color: "#383838",
          //         textAlign: "center",
          //         paddingVertical: 15,
          //       }}
          //     >
          //       You reached to the end!
          //     </Text>
          //   ) : null;
          // }}

          // /> } */}
        <Text>FlatList...</Text>
      </View>
    </SafeAreaView>
  );
}
