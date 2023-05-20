import { Button, FlatList, Text, View, Animated } from "react-native";
import React, { useEffect, useContext, useState, useRef } from "react";
import styles from "./styles";
import { loggedInUserContext } from "../../../hooks/UserContext";
import SliderItem from "../SliderItem/SliderItem";
import Pagination from "../Pagination/Pagination";
import { getEvent } from "../../../api/event";

export default function Slider({ navigation, data }) {
  const { loggedInUser, accessToken, setAccessToken, setLoggedInUser } =
    useContext(loggedInUserContext);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    data.map((ev) => {
      // console.log(ev.title);
      // console.log(ev.upcoming);
      // console.log(ev.resultPosted);
    });
  }, []);

  const scrollX = useRef(new Animated.Value(0)).current;
  const handleOnScroll = (event) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({ viewableItems }) => {
    //console.log(`viewableItems`, viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <FlatList
          data={[
            { type: "Leaderboard", resultPosted: { active: false } },
            ...data,
          ]}
          renderItem={({ item }) => (
            <SliderItem
              navigation={navigation}
              item={item}
              status={
                item.upcoming
                  ? "upcoming"
                  : item.resultPosted.active
                  ? "resultPosted"
                  : "invalid"
              }
            />
          )}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </View>

      <View style={styles.paginationContainer}>
        <Pagination
          data={[
            { type: "Leaderboard", resultPosted: { active: false } },
            ...data,
          ]}
          scrollX={scrollX}
          index={index}
        />
      </View>
    </View>
  );
}
