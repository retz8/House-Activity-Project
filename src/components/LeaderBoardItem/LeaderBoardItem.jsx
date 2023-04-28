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
import { Text, styleSheet, View, Image } from "react-native";
import React, { Component, useState } from "react";
import styles from "./styles";
import { getHouseByName } from "../../api/house";

const houseCrestUrl_Albemarle = "https://res.cloudinary.com/dlhqii3cq/image/upload/v1680716871/ozpjsbvlf5xcxgfczywj.png";
const houseCrestUrl_Ettl = "https://res.cloudinary.com/dlhqii3cq/image/upload/v1680148633/lhb7dwaovqhcdprhqkir.jpg";
const houseCrestUrl_Hobler = "https://res.cloudinary.com/dlhqii3cq/image/upload/v1680148610/eplnqunrpjdkttijvdqc.jpg";
const houseCrestUrl_Lambert = "https://res.cloudinary.com/dlhqii3cq/image/upload/v1680148593/xmhmeifvnmkphom3fouq.jpg";


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

    let housePoints_Albemarle = 1403, housePoints_Ettl = 1285, housePoints_Hobler = 1705, housePoints_Lambert = 1451;

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
                <View style={styles.imageContainer}>
                    <Image source={{uri: houseCrestUrl_Albemarle}} style={styles.image} />
                </View>
                <Text>Albemarle</Text>
                <Text>{housePoints_Albemarle}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: houseCrestUrl_Ettl }} style={styles.image} />
                </View>
                <Text>Ettl</Text>
                <Text>{housePoints_Ettl}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: houseCrestUrl_Hobler }} style={styles.image} />
                </View>
                <Text>Hobler</Text>
                <Text>{housePoints_Hobler}</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: houseCrestUrl_Lambert }} style={styles.image} />
                </View>
                <Text>Lambert</Text>
                <Text>{housePoints_Lambert}</Text>
            </View>
        </View>
  );
}
