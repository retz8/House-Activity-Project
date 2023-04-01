import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/Welcome/Welcome";
import MainStack from "./src/screens/Main/MainStack";
import UserContext from "./src/hooks/UserContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserContext>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="MainStack" component={MainStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext>
  );
}
