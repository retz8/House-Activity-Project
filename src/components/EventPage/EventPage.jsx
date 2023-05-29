// called from "EventPreview" (Main, Search page) or "EventSummary" (LeaderBoard page)

// Event Page
// 1. Thumbnail
// 2. Title
// 3. Sign up (if upcoming && Sign up link exists)
// 4. Author, Host, Date, Tier, Results(result posted , past events), participants, content

import { Image, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import ImageButton from "../ImageButton/ImageButton";
import { getUser } from "../../api/user";
import Loading from "../Loading/Loading";
import BaseInfo from "./BaseInfo/BaseInfo";
import SignUpButton from "./SignUpButton/SignUpButton";
import ResultDisplay from "./ResultDisplay/ResultDisplay";
import ParticipantsDisplay from "./ParticipantsDisplay/ParticipantsDisplay";
import ContentDisplay from "./ContentDisplay/ContentDisplay";
import { ScrollView } from "react-native";
import UpcomingMark from "../UpcomingMark/UpcomingMark";

export default function EventPage({ navigation, route }) {
  const { event } = route.params;
  const [author, setAuthor] = useState();
  const [host, setHost] = useState();

  const upcomingTest = true;

  const fetchAuthor = async () => {
    const { user, error } = await getUser(event.author);
    if (error) {
      console.log(error);
    }
    setAuthor(user);
  };
  const fetchHost = async () => {
    const { user, error } = await getUser(event.host[0]);
    if (error) {
      console.log(error);
    }

    setHost(user);
  };

  useEffect(() => {
    fetchAuthor();
    fetchHost();
  }, []);

  if (!author || !host) {
    return <Loading />;
  }

  // -----------------------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: event.thumbnail.url }} style={styles.thumbnail} />
        <View style={styles.buttonContainer}>
          <ImageButton
            source={require("../../../assets/EventPage/backButton.png")}
            style={styles.backButton}
            onPress={() => navigation.pop()}
          />
        </View>
        {event.upcoming && (
          <View style={styles.markContainer}>
            <UpcomingMark />
          </View>
        )}
      </View>

      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>{event.title}</Text>

        {event.upcoming && event.signUpLink && event.isForAll === false && (
          <SignUpButton link={event.signUpLink} />
        )}

        <BaseInfo
          navigation={navigation}
          author={author}
          host={host}
          startDate={event.startDate}
          endDate={event.endDate}
          tier={event.tier}
        />

        {!event.upcoming && (
          <ResultDisplay
            waiting={event.resultPosted.waitingResult}
            result={event.result}
          />
        )}

        <ParticipantsDisplay isForAll={event.isForAll} />

        <ContentDisplay content={event.content} />
      </ScrollView>
    </SafeAreaView>
  );
}
