import { StatusBar } from "expo-status-bar";
import { Link, NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./reduxsystem/store/store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bag from "./screens/Bag";
import Favourits from "./screens/Favourits";
import Profile from "./screens/Profile";
import Categoryname from "./screens/Categoryname";
import Shop from "./screens/Shop";
import Mainpage from "./screens/Mainpage";
import { Octicons } from "@expo/vector-icons";
import { Button } from "react-native-paper";



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="Mainpage"
            component={Mainpage}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="Bag" component={Bag} />
          <Stack.Screen name="Favourits" component={Favourits} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Categoryname" component={Categoryname} options={{
            headerShown: true,
            headerRight: () => (
              <Button>
                <Octicons name="search" size={20} color="black" />
              </Button>
            ),
            headerTitleAlign: "center",
          }}/>
        </Stack.Navigator>
        <StatusBar style="auto" />
      </Provider>
    </NavigationContainer>
  );
}
