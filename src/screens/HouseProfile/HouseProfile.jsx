import { View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getHouseByName, getLeaders, getMembers } from "../../api/house";

import { getHouseColor } from "../../helpers/houseColors";
import Loading from "../../components/Loading/Loading";
import ImageButton from "../../components/ImageButton/ImageButton";
import BaseHouseInfo from "./BaseHouseInfo/BaseHouseInfo";
import HouseUsers from "./HouseUsers/HouseUsers";
import styles from "./styles";

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

  if (!house || !leaders || !members) {
    return <Loading />;
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.backButtonContainer}>
          <ImageButton
            source={require("../../../assets/HouseProfile/backButton.png")}
            style={styles.backButton}
            onPress={() => navigation.pop()}
          />
        </View>

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
      </SafeAreaView>
    </ScrollView>
  );
}
