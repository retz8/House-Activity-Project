// event: current event
// please refer to "API Documentation" for more details to access values of event

import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { Component } from "react";
import styles from "./styles";

// ***************************
// get event details over here
// ***************************
const eventImage = "https://lightwidget.com/wp-content/uploads/local-file-not-found.png";
const eventTitle = "House Olympics - Day 1";
const point_Albemarle = 91;
const point_Ettl = 108;
const point_Hobler = 104;
const point_Lambert = 85;

export default function EventSummary({ event, onPress }) {
  // ignore onPress right now
    // event.title

    return (
        <TouchableOpacity style={styles.eventContainer}>
            <Image source={{ uri: eventImage }} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{eventTitle}</Text>
                <View style={styles.scoresContainer}>
                    <View style={styles.oneHouse}>
                        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: "#FFCE30",  }}/>
                        <Text style={styles.score}>{point_Albemarle}</Text>
                    </View>
                    <View style={styles.oneHouse}>
                        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: "#8BC34A", }} />
                        <Text style={styles.score}>{point_Ettl}</Text>
                    </View>
                    <View style={styles.oneHouse}>
                        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: "#E54E4E", }} />
                        <Text style={styles.score}>{point_Hobler}</Text>
                    </View>
                    <View style={styles.oneHouse}>
                        <View style={{ width: 20, height: 20, borderRadius: 10, backgroundColor: "#55B0F9", }} />
                        <Text style={styles.score}>{point_Lambert}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
