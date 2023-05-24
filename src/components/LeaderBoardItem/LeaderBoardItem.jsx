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
import { Text, View, Image, TouchableOpacity } from "react-native";
import React, { Component, useState } from "react";
import styles from "./styles";

const houseCrestUrl_Albemarle = "https://res.cloudinary.com/dlhqii3cq/image/upload/v1680716871/ozpjsbvlf5xcxgfczywj.png";
const houseCrestUrl_Ettl = "https://res.cloudinary.com/dlhqii3cq/image/upload/v1680148633/lhb7dwaovqhcdprhqkir.jpg";
const houseCrestUrl_Hobler = "https://res.cloudinary.com/dlhqii3cq/image/upload/v1680148610/eplnqunrpjdkttijvdqc.jpg";
const houseCrestUrl_Lambert = "https://res.cloudinary.com/dlhqii3cq/image/upload/v1680148593/xmhmeifvnmkphom3fouq.jpg";


export default function LeaderBoardItem({navigation}) {
  // const [ houses, setHouses ] = useState([]);
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
    let maximumPoint = Math.max(housePoints_Albemarle, housePoints_Ettl, housePoints_Hobler, housePoints_Lambert)
    let maximunHeight = 280
    /* 
     * 
     * **************************************************************
     * ***************Provide House points over here*****************
     * **************************************************************
     * 
     */
    return (
        <View style={[styles.container, { flexDirection: 'row', },]}>
            <View style={[styles.houseContainer, { backgroundColor: "#FFCE30", borderColor: "#FFCE30", height: maximunHeight * housePoints_Albemarle / maximumPoint * housePoints_Albemarle / maximumPoint }]}>
                <View style={[styles.contents, {top: housePoints_Albemarle < maximumPoint ? -60 : -100}]}>
                    {
                        housePoints_Albemarle === maximumPoint && <View style={styles.crown}/>
                    }
                    <TouchableOpacity style={styles.buttonCrestStyle} activeOpacity={0.5} onPress={() => navigation.navigate("HouseProfile", { houseName: "Albemarle" })}>
                        <Image source={{ uri: houseCrestUrl_Albemarle }} style={styles.image} />
                    </TouchableOpacity>
                    <View style={styles.scoreReporterContainer}>
                        <Text style={styles.houseNameText}>Albemarle</Text>
                        <Text style={styles.scoreText}>{housePoints_Albemarle}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.houseContainer, { backgroundColor: "#8BC34A", borderColor: "#8BC34A", height: maximunHeight * housePoints_Ettl / maximumPoint * housePoints_Ettl / maximumPoint }]}>
                <View style={[styles.contents, { top: housePoints_Ettl < maximumPoint ? -60 : -100 }]}>
                    {
                        housePoints_Ettl === maximumPoint && <View style={styles.crown} />
                    }
                    <TouchableOpacity style={styles.buttonCrestStyle} activeOpacity={0.5} onPress={() => navigation.navigate("HouseProfile", { houseName: "Ettl" })}>
                        <Image source={{ uri: houseCrestUrl_Ettl }} style={styles.image} />
                    </TouchableOpacity>
                    <View style={styles.scoreReporterContainer}>
                        <Text style={styles.houseNameText}>Ettl</Text>
                        <Text style={styles.scoreText}>{housePoints_Ettl}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.houseContainer, { backgroundColor: "#E54E4E", borderColor: "#E54E4E", height: maximunHeight * housePoints_Hobler / maximumPoint * housePoints_Hobler / maximumPoint }]}>
                <View style={[styles.contents, { top: housePoints_Hobler < maximumPoint ? -60 : -100 }]}>
                    {
                        housePoints_Hobler === maximumPoint && <View style={styles.crown} />
                    }
                    <TouchableOpacity style={styles.buttonCrestStyle} activeOpacity={0.5} onPress={() => navigation.navigate("HouseProfile", { houseName: "Hobler" })}>
                        <Image source={{ uri: houseCrestUrl_Hobler }} style={styles.image} />
                    </TouchableOpacity>
                    <View style={styles.scoreReporterContainer}>
                        <Text style={styles.houseNameText}>Hobler</Text>
                        <Text style={styles.scoreText}>{housePoints_Hobler}</Text>
                    </View>
                </View>
            </View>
            <View style={[styles.houseContainer, { backgroundColor: "#55B0F9", borderColor: "#55B0F9", height: maximunHeight * housePoints_Lambert / maximumPoint * housePoints_Lambert / maximumPoint }]}>
                <View style={[styles.contents, { top: housePoints_Lambert < maximumPoint ? -60 : -100 }]}>
                    {
                        housePoints_Lambert === maximumPoint && <View style={styles.crown} />
                    }
                    <TouchableOpacity style={styles.buttonCrestStyle} activeOpacity={0.5} onPress={() => navigation.navigate("HouseProfile", { houseName: "Lambert" })}>
                        <Image source={{ uri: houseCrestUrl_Lambert }} style={styles.image} />
                    </TouchableOpacity>
                    <Text style={styles.houseNameText}>Lambert</Text>
                    <Text style={styles.scoreText}>{housePoints_Lambert}</Text>
                </View>
            </View>
        </View>
  );
}
