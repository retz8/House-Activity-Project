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
import React, { useState, useEffect } from "react";
import styles from "./styles";
import Loading from "../Loading/Loading";
import { getHouseByName } from "../../api/house";
import { getHouseColor } from "../../helpers/houseColors";
import PointBar from "./PointBar/PointBar";
import { getBarHeight } from "../../helpers/barHeight";

export default function LeaderBoardItem({ navigation, size = "medium" }) {
  const [houses, setHouses] = useState([]);
  const [topHouseName, setTopHouseName] = useState("Albemarle");
  const [orderResult, setOrderResult] = useState();
  const fetchHouses = async () => {
    let houseArr = [];
    let sortedHouseArr = [];
    const { house, error: aError } = await getHouseByName("Albemarle");
    if (aError) return;
    houseArr.push(house);
    sortedHouseArr.push(house);
    const { house: lHouse, error: lError } = await getHouseByName("Lambert");
    if (aError) return;
    houseArr.push(lHouse);
    sortedHouseArr.push(lHouse);
    const { house: hHouse, error: hError } = await getHouseByName("Hobler");
    if (aError) return;
    houseArr.push(hHouse);
    sortedHouseArr.push(hHouse);
    const { house: eHouse, error: eError } = await getHouseByName("Ettl");
    if (aError) return;
    houseArr.push(eHouse);
    sortedHouseArr.push(eHouse);

    sortedHouseArr.sort((a, b) => b.point - a.point);

    const result = {};
    sortedHouseArr.forEach((house, index) => {
      result[house.name] = index + 1;
    });

    let maxHouse = houseArr[0].name;
    let maxPoint = houseArr[0].point;

    for (let i = 1; i < houseArr.length; i++) {
      if (houseArr[i].point > maxPoint) {
        maxPoint = houseArr[i].point;
        maxHouse = houseArr[i].name;
      }
    }

    setOrderResult(result);
    setHouses(houseArr);
    setTopHouseName(maxHouse);
  };

  useEffect(() => {
    fetchHouses();
  }, []);

  if (houses.length === 0 && orderResult === undefined) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {houses.map((house) => {
        const barH = getBarHeight(orderResult[house.name]);
        return (
          <View style={styles.houseContainer} key={house.name}>
            <PointBar
              name={house.name}
              point={house.point}
              size={size}
              color={getHouseColor(house.name)}
              height={size === "small" ? barH * 0.6 : barH}
              url={house.crest.url}
              topHouse={topHouseName}
              navigation={navigation}
            />
          </View>
        );
      })}
    </View>
  );
}
