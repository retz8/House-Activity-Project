// Bottom Tab Navigator
// all of the assets are at assets/TabNavigator
// please use separate "styles.jsx" file for styling
// Don't directly write style here

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LeaderBoard from "../../screens/LeaderBoard/LeaderBoard";
import Search from "../../screens/Search/Search";
import Profile from "../../screens/Profile/Profile";
import Main from "../../screens/Main/Main";
import styles from "./styles";
import { View, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: styles.activeTabLabel.color,
        tabBarInactiveTintColor: styles.inactiveTabLabel.color,
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.tabBarItem,
                  {
                    backgroundColor: color === "#fff" ? "#93373C" : "#fff",
                    borderColor: color === "#fff" ? "#78060C" : "#fff",
                  },
                ]}
              >
                <AntDesign
                  name="home"
                  size={styles.tabBarIcon.height}
                  color={color}
                />
                <Text style={[styles.tabBarLabel, { color: color }]}>Home</Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderBoard}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                styles.tabBarItem,
                {
                  backgroundColor: color === "#fff" ? "#93373C" : "#fff",
                  borderColor: color === "#fff" ? "#78060C" : "#fff",
                },
              ]}
            >
              <Feather name="grid" size={size} color={color} />
              <Text style={[styles.tabBarLabel, { color: color }]}>
                Leaderboard
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                styles.tabBarItem,
                {
                  backgroundColor: color === "#fff" ? "#93373C" : "#fff",
                  borderColor: color === "#fff" ? "#78060C" : "#fff",
                },
              ]}
            >
              <AntDesign name="search1" size={size} color={color} />
              <Text style={[styles.tabBarLabel, { color: color }]}>Search</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={[
                styles.tabBarItem,
                {
                  backgroundColor: color === "#fff" ? "#93373C" : "#fff",
                  borderColor: color === "#fff" ? "#78060C" : "#fff",
                },
              ]}
            >
              <FontAwesome5 name="user-circle" size={size} color={color} />
              <Text style={[styles.tabBarLabel, { color: color }]}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
