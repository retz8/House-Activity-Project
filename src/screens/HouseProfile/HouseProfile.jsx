// House Profile Page
// house = current house [Object]
// Please refer to "API Documentation" for more details to access values in house

import { Button, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { getHouseByName, getLeaders, getMembers } from "../../api/house";
import ImageButton from "../../components/ImageButton/ImageButton";

export default function HouseProfile({ navigation, route }) {
  const { houseName } = route.params;
  const [house, setHouse] = useState(); // house information
  const [members, setMembers] = useState([]); // members
  const [leaders, setLeaders] = useState(); // leaders

  const fetchHouse = async () => {
    const { error, house } = await getHouseByName(houseName);
    if (error) {
      console.log(error);
    }
    setHouse(house);
  };

  const fetchMembers = async () => {
    const { error, users } = await getMembers(houseName);
    if (error) {
      console.log(error);
    }
    setMembers(users);
  };

  const fetchLeaders = async () => {
    const { error, leaders } = await getLeaders(houseName);
    if (error) {
      console.log(error);
    }
    setLeaders(leaders);
  };

  useEffect(() => {
    fetchHouse();
    fetchMembers();
    fetchLeaders();
  }, []);

  // -----------------------------------------------------

  return (
    <SafeAreaView style={styles.container}>
      {/* You don't need to worry about this go back button */}
      <View style={styles.backButtonContainer}>
        <ImageButton
          source={require("../../../assets/HouseProfile/backButton.png")}
          style={styles.backButton}
          onPress={() => navigation.pop()}
        />
      </View>

      {house && leaders && members ? (
        <View style={styles.contentsContainer}>
          <Text>{house.name}</Text>
          <Text>{house.point}</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </SafeAreaView>
  );
}
