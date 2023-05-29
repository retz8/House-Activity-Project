import "dotenv/config";

const apiURL = process.env.API_URL;
const expoClientId = process.env.EXPO_CLIENT_ID;
const iosClientId = process.env.IOS_CLIENT_ID;
const androidClientId = process.env.ANDROID_CLIENT_ID;

export default {
  expo: {
    name: "house-app",
    slug: "house-app",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    scheme: "com.retz8.houseapp",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.retz8.houseapp",
    },
    android: {
      package: "com.retz8.houseapp",
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
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
