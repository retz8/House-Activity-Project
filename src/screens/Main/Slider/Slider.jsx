import { FlatList, View, Animated } from "react-native";
import React, { useState, useRef } from "react";

import SliderItem from "../SliderItem/SliderItem";
import Pagination from "../Pagination/Pagination";
import styles from "./styles";

const maxSlider = 5;

export default function Slider({ navigation, data }) {
  const dataWithLeaderboard = [
    { type: "Leaderboard", resultPosted: { active: false } },
    ...data,
  ].slice(0, maxSlider);
  const [index, setIndex] = useState(0);

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
    setIndex(viewableItems[0].index);
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <FlatList
          data={dataWithLeaderboard}
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
          data={dataWithLeaderboard}
          scrollX={scrollX}
          index={index}
        />
      </View>
    </View>
  );
}
