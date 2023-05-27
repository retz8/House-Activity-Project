import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import UsernameDisplay from "../../UsernameDisplay/UsernameDisplay";
import { horizontalScale } from "../../../helpers/responsiveSize";

export default function BaseInfo({
  navigation,
  author,
  host,
  startDate,
  endDate,
  tier,
}) {
  const handleUsernameDisplayPress = async (user) => {
    navigation.navigate("UserProfile", { user });
  };

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

  return (
    <View>
      <View style={styles.textContainer}>
        <Text
          style={{ ...styles.eventLabel, paddingRight: horizontalScale(10) }}
        >
          Author:{" "}
        </Text>
        <UsernameDisplay
          name={author.displayName}
          profile={author.profilePic.url}
          size="medium"
          onPress={() => {
            handleUsernameDisplayPress(author);
          }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text
          style={{ ...styles.eventLabel, paddingRight: horizontalScale(10) }}
        >
          Host:{" "}
        </Text>
        <UsernameDisplay
          name={host.displayName}
          profile={host.profilePic.url}
          size="medium"
          onPress={() => {
            handleUsernameDisplayPress(host);
          }}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.eventLabel}>Date: </Text>
        <Text style={styles.eventText}>{formattedDuration()}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.eventLabel}>Tier: </Text>
        <Text style={styles.eventText}>{tier}</Text>
      </View>
    </View>
  );
}
