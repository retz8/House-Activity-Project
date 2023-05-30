import "dotenv/config";

const apiURL = process.env.API_URL;
const expoClientId = process.env.EXPO_CLIENT_ID;
const iosClientId = process.env.IOS_CLIENT_ID;
const androidClientId = process.env.ANDROID_CLIENT_ID;

export default {
  expo: {
    name: "Pig Says Oink",
    slug: "house-app",
    version: "1.0.3",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    scheme: "com.retz8.pigsaysoink",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#5D0E23",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.retz8.pigsaysoink",
    },
    android: {
      package: "com.retz8.pigsaysoink",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#5D0E23",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      [
        "expo-screen-orientation",
        {
          initialOrientation: "PORTRAIT",
        },
      ],
    ],
    extra: {
      eas: {
        projectId: "49724e9e-0186-4224-b476-10fbea1c021b",
      },
      API_URL: apiURL,
      EXPO_CLIENT_ID: expoClientId,
      IOS_CLIENT_ID: iosClientId,
      ANDROID_CLIENT_ID: androidClientId,
    },
  },
};
