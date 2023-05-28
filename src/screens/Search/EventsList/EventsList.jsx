import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { FlashList } from "@shopify/flash-list";

import styles from "./styles";
import EventPreview from "../../../components/EventPreview/EventPreview";
import Separator from "../../../components/Separator";

export default function EventsList({
  searchPhrase = "",
  setClicked = () => {},
  data,
  navigation,
  mode = "normal",
}) {
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    if (searchPhrase !== "") {
      const newData = data.filter((item) => {
        const title = item.title.toUpperCase().trim().replace(/\s/g, "");
        const search = searchPhrase.toUpperCase().trim().replace(/\s/g, "");
        return title.includes(search);
      });
      setDisplayData(newData);
    } else {
      setDisplayData(data);
    }
  }, [searchPhrase]);

  const handlePreviewPress = async (item) => {
    navigation.navigate("EventPage", { event: item });
  };

  const renderItem = ({ item }) => {
    return (
      <EventPreview
        event={item}
        onPress={() => handlePreviewPress(item)}
        mode={mode}
      />
    );
  };

  const ItemSeparatorComponent = () => (
    <Separator
      width="85%"
      style={{ backgroundColor: "#4E3535", opacity: 0.3 }}
    />
  );

  return (
    <View
      style={styles.listContainer}
      onStartShouldSetResponder={() => {
        setClicked(false);
      }}
    >
      <FlashList
        data={displayData}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={renderItem}
        estimatedItemSize={30}
        ListEmptyComponent={() => (
          <Text style={styles.noEventsText}>There's no events...</Text>
        )}
      />
    </View>
  );
}
