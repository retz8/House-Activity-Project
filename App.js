import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/Welcome/Welcome";
import MainStack from "./src/screens/Main/MainStack";
import UserContext from "./src/hooks/UserContext";
import { useFonts } from "expo-font";
import UserProfile from "./src/components/UserProfile/UserProfile";
import HouseProfile from "./src/components/HouseProfile/HouseProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  // custom fonts: BalooBhaijaan
  const [fontsLoaded] = useFonts({
    "BalooBhaijaan2-Regular": require("./assets/fonts/BalooBhaijaan2-Regular.ttf"),
    "BalooBhaijaan2-Bold": require("./assets/fonts/BalooBhaijaan2-Bold.ttf"),
    "BalooBhaijaan2-ExtraBold": require("./assets/fonts/BalooBhaijaan2-ExtraBold.ttf"),
    "BalooBhaijaan2-Medium": require("./assets/fonts/BalooBhaijaan2-Medium.ttf"),
    "BalooBhaijaan2-SemiBold": require("./assets/fonts/BalooBhaijaan2-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserContext>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="MainStack" component={MainStack} />
          <Stack.Screen name="HouseProfile" component={HouseProfile} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext>
  );
}
