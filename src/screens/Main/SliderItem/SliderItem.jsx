import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import LeaderBoardItem from "../../../components/LeaderBoardItem/LeaderBoardItem";
import styles from "./styles";
import StatusDisplay from "../StatusDisplay/StatusDisplay";
import { getEvent } from "../../../api/event";

export default function SliderItem({ navigation, item, status }) {
  const { thumbnail, title, startDate, endDate, id } = item;

  const dateToDurationString = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const day = date.getDate();

    const formattedDate = `${year}/${month}/${day}`;
    return formattedDate;
  };

  const formattedDuration = () => {
    const startDateString = dateToDurationString(startDate);
    const endDateString = dateToDurationString(endDate);

    return startDateString === endDateString
      ? startDateString
      : `${startDateString} ~ ${endDateString}`;
  };

  const handlePreviewPress = async (id) => {
    const { error, event } = await getEvent(id);
    if (error) console.log(error);

    navigation.navigate("EventPage", { event: event });
  };

  if (item?.type === "Leaderboard") {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate("Leaderboard")}
        >
          <LeaderBoardItem navigation={navigation} size="small" />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handlePreviewPress(id)}>
        <Image
          source={{ uri: thumbnail.url }}
          resizeMode="contain"
          style={styles.thumbnail}
        />
      </TouchableOpacity>

      <StatusDisplay status={status} />

      <View style={styles.desc}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{`Date: ${formattedDuration()}`}</Text>
      </View>
    </View>
  );
}
