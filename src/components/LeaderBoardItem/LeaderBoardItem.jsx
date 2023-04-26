// LeaderBoardItem: House Points Visualization
// LeaderBoardItem: points visualization
// houses: 4 object elements (house)
// house:
// {
//     id: house's id,
//     name: house name,
//     point: house point,
//     crest: house crest,
//     motto: house motto,
//     enMotto: house english Motto,
//     color: house color,
// }
import { Text, styleSheet, View } from "react-native";
import React, { Component, useState } from "react";
import styles from "./styles";
import { getHouseByName } from "../../api/house";

export default function LeaderBoardItem() {
  const [ houses, setHouses ] = useState([]);
  // const fetchHouses = async () => {
  //   let houseArr = [];
  //   const { house, error: aError } = await getHouseByName("Albemarle");
  //   if (aError) return;
  //   houseArr.push(house);
  //   const { house, error: lError } = await getHouseByName("Lambert");
  //   if (aError) return;
  //   houseArr.push(house);
  //   const { house, error: hError } = await getHouseByName("Hobler");
  //   if (aError) return;
  //   houseArr.push(house);
  //   const { house, error: eError } = await getHouseByName("Ettl");
  //   if (aError) return;
  //   houseArr.push(house);


  // }

    // useEffect(() => {
    //   fetchHouses();
    // }, [])

    /*
     * 
     * **************************************************************
     * ***************Provide House points over here*****************
     * **************************************************************
     * 
     */

    let housePoints_a = 1403, housePoints_l = 1451, housePoints_h = 1705, housePoints_e = 1285;

    /* 
     * 
     * **************************************************************
     * ***************Provide House points over here*****************
     * **************************************************************
     * 
     */

    return (
        <View style={[styles.container, { flexDirection: 'row', }, ]}>
        <View style={styles.container}>
                <Text>Albemarle</Text>
                <Text>{housePoints_a}</Text>
        </View>
        <View style={styles.container}>
                <Text>Lambert</Text>
                <Text>{housePoints_l}</Text>
        </View>
        <View style={styles.container}>
                <Text>Hobler</Text>
                <Text>{housePoints_h}</Text>
        </View>
        <View style={styles.container}>
                <Text>Ettl</Text>
                <Text>{housePoints_e}</Text>
        </View>
    </View>
  );
}
