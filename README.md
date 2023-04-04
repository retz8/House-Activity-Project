# PRISMS-house-events-app

Developing mobile Application for PRISMS's (Princeton Int'l School of Math and Science) House Events

## About the project

<p align="center"><img src="https://user-images.githubusercontent.com/54821805/229265377-0f1ef712-fa24-4b94-b6e8-cb1d321a7848.png"></p>

Intramural activty in PRISMS is called House activity (event). School is divided into four houses: Albemarle, Lambert, Hobler, and Ettl.
22-23 CS club developed this application to integrate and manage all of the house events and points. Key functions are following.

- View house points leaderboard
- View upcoming & past house events with results
- User profile page with customization

This project is a MERN (MongoDB, Express, React/React Native, Node) full stack project led by Jioh In (@retz8) with Valentine L, Edward T, Jerry G, Ariv B, Diya R, and Sophia Z. React Native application is based on Expo Go.
Backend api and Admin source codes can be found at following repositories.

Backend api: https://github.com/retz8/PRISMS-house-events-api

Admin: https://github.com/retz8/PRISMS-house-events-admin

## Getting Started

### Step 1. Install Node.js and npm

Before you can start developing a React Native Expo app, you need to make sure you have Node.js and npm installed on your machine. If you don't have them installed, you can download them from the official Node.js website.

### Step 2. Install the Expo CLI

To create a new React Native Expo app, you need to install the Expo CLI. You can do this by running the following command in your terminal:

    npm install -g expo-cli

### Step 3. Clone GitHub Repository

    git clone <github repository url>

### Step 4. Install node_modules

    npm install

### Step 5. Configure .env file for Google Login

    ANDRIOD_CLIENT_ID = <YOUR_GOOGLE_CONSOLE_ANDROID_CLIENT_ID>
    IOS_CLIENT_ID = <YOUR_GOOGLE_CONSOLE_IOS_CLIENT_ID>
    EXPO_CLIENT_ID = <YOUR_GOOGLE_CONSOLE_EXPO_CLIENT_ID>

For more details to get client Ids, please refer to official documentation from Expo. https://docs.expo.dev/guides/google-authentication/

### Step 6. Start the app

Start the app by running the following command. Make sure to install emulator (Android Studio / XCode) to run virtually.

    expo start // or npm start
