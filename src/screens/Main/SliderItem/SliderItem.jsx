import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import LeaderBoardItem from "../../../components/LeaderBoardItem/LeaderBoardItem";
import styles from "./styles";
import StatusDisplay from "../StatusDisplay/StatusDisplay";
import { getEvent } from "../../../api/event";
import { formattedDuration } from "../../../helpers/dateFormatter";

export default function SliderItem({ navigation, item, status }) {
  const { thumbnail, title, startDate, endDate, id } = item;

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
        <Text style={styles.date}>{`Date: ${formattedDuration(
          startDate,
          endDate
        )}`}</Text>
      </View>
    </View>
  );
}
