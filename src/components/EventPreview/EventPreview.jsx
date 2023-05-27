// If user clicks EventPreview Component, it directs to matching EventPage
// event preview: display following
// 1. title
// 2. date (start, end)
// 3. content
// 4. thumbnail

import { Image, Text, TouchableHighlight, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

export default function EventPreview({ event, onPress }) {
  const { title, startDate, endDate, thumbnail } = event;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

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

  // -----------------------------------------------------
  return (
    <TouchableHighlight
      underlayColor="#EDEAEA"
      activeOpacity={0.1}
      onShowUnderlay={handleMouseEnter}
      onHideUnderlay={handleMouseLeave}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image source={{ uri: thumbnail.url }} style={styles.thumbnailImage} />

        <View style={styles.rightContainer}>
          <Text style={styles.eventTitle}>{title}</Text>
          <View style={styles.dateContainer}>
            <Text style={styles.eventLabel}>Date: </Text>
            <Text style={styles.eventText}>{formattedDuration()}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
}
