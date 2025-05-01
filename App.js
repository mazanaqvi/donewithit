import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import DetailsScreen from "./app/screens/PortfolioScreen";
import PortfolioDetailScreen from "./app/screens/PortfolioDetailScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        options={{
          headerShown: false, // We're handling the header in the component
        }}
      >
        <Stack.Screen
          name="PortfolioDetail"
          component={PortfolioDetailScreen}
          options={{
            headerShown: false, // We're handling the header in the component
          }}
        />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            headerShown: false, // We're handling the header in the component
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
