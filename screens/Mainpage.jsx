import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Shop from "./Shop";
import Bag from "./Bag";
import Favourits from "./Favourits";
import Profile from "./Profile";
import { Button } from "react-native-paper";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";
import tw from "twrnc";

const Tab = createBottomTabNavigator();

const Mainpage = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "white",
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
        },
      }}
    >
      {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />
              ),
              tabBarActiveTintColor: "red"
        }}
      />

      {/* Shop Screen */}
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          headerTitle: "Categories",
          headerTitleAlign: "center",
          headerRight: () => (
            <Button>
              <Octicons name="search" size={20} color="black" />
            </Button>
          ),
          headerLeft: () => (
            <Link to={{ screen: "Home" }} style={tw`pl-2`}>
              <AntDesign name="arrowleft" size={22} color="black" />
            </Link>
          ),
          tabBarLabel: 'Shop',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="cart" color={color} size={30} />
            ),
            tabBarActiveTintColor: "red",
        }}
      />

      {/* Bag Screen */}
      <Tab.Screen name="Bag" component={Bag} options={{
        headerShown: false,
        tabBarLabel: 'Bag',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="shopping" color={color} size={30} />
        ),
        tabBarActiveTintColor: "red",
      }}/>

      {/* Favourits Screen */}
      <Tab.Screen name="Favourits" component={Favourits} options={{
        headerShown: false,
        tabBarLabel: 'Favourits',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="heart" color={color} size={30} />
        ),
        tabBarActiveTintColor: "red",
      }}/>

      {/* Profile Screen */}
      <Tab.Screen name="Profile" component={Profile} options={{
        headerShown: false,
        tabBarLabel: 'Profile',
        tabBarIcon: ({color}) => (
          <MaterialCommunityIcons name="account" color={color} size={30} />
        ),
        tabBarActiveTintColor: "red",
      }}/>
    </Tab.Navigator>
  );
};

export default Mainpage;
