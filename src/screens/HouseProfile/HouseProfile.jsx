// House Profile Page
// house = current house [Object]
// Please refer to "API Documentation" for more details to access values in house

import {
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";
import { getHouseByName, getLeaders, getMembers } from "../../api/house";
import ImageButton from "../../components/ImageButton/ImageButton";
import BaseHouseInfo from "./BaseHouseInfo/BaseHouseInfo";
import HouseUsers from "./HouseUsers/HouseUsers";
import { getHouseColor } from "../../helpers/houseColors";
import Loading from "../../components/Loading/Loading";

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
    console.log(house);
    setHouse(house);
  };

  const fetchMembers = async () => {
    const { error, users } = await getMembers(houseName);
    if (error) {
      console.log(error);
    }
    console.log(users);
    setMembers(users);
  };

  const fetchLeaders = async () => {
    const { error, leaders } = await getLeaders(houseName);
    if (error) {
      console.log(error);
    }
    console.log(leaders);
    setLeaders(leaders);
  };

  const fetchMockHouse = () => {
    const mockHouse = require("../../../data/house/house.json");
    const mockMembers = require("../../../data/house/users.js");
    const mockLeaders = require("../../../data/house/leaders.json");

    setHouse(mockHouse);
    setMembers(mockMembers);
    setLeaders(mockLeaders);
  };

  useEffect(() => {
    // fetchHouse();
    // fetchMembers();
    // fetchLeaders();
    fetchMockHouse();
  }, []);

  // -----------------------------------------------------

  return (
    <ScrollView>
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
            <View style={styles.baseHouseInfo}>
              <BaseHouseInfo
                crest={house.crest}
                name={house.name}
                point={house.point}
                color={getHouseColor(house.name)}
              />
            </View>

            <View style={styles.houseUsers}>
              <HouseUsers
                navigation={navigation}
                leaders={leaders}
                members={members}
              />
            </View>
          </View>
        ) : (
          <Loading />
        )}
      </SafeAreaView>
    </ScrollView>
  );
}
