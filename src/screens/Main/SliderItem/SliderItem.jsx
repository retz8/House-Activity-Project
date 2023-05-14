import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import LeaderBoardItem from "../../../components/LeaderBoardItem/LeaderBoardItem";
import styles from "./styles";
import StatusDisplay from "../StatusDisplay/StatusDisplay";

export default function SliderItem({ item, status }) {
  const { thumbnail, title, startDate, endDate } = item;

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

  useEffect(() => {}, []);

  if (item?.type === "Leaderboard") {
    return (
      <View style={styles.container}>
        <LeaderBoardItem />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: thumbnail.url }}
        resizeMode="contain"
        style={styles.thumbnail}
      />

      <StatusDisplay status={status} />

      <View style={styles.desc}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{`Date: ${formattedDuration()}`}</Text>
      </View>
    </View>
  );
}
