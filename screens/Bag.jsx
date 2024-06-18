import { View, Text } from 'react-native'
import React from 'react'

const Bag = () => {
  return (
    <View>
      <Text>Bag</Text>
    </View>

    
  )
}

export default Bag


{/* <Tab.Navigator
id="RootNavigator"
screenOptions={{
  tabBarStyle: {
    backgroundColor: "white",
    paddingBottom: 10,
    paddingTop: 10,
    height: 70
  },
}}
>
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

<Tab.Screen name="Shop" component={Shop} options={{
  headerTitle: "Categories",
  headerTitleAlign: "center",
  headerRight: () => (
    <Button>
      <FontAwesome style={tw`px-3`}  name="search" size={18} color={"black"} />
    </Button>
  ),
  headerLeft: ()=>(
    <Link to={{ screen: 'Home' }}>
      <Ionicons name="chevron-back" size={24} color="black" />
    </Link>
  ),
  headerShown: true,
  tabBarLabel: 'Shop',
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="cart" color={color} size={30} />
  ),
  tabBarActiveTintColor: "red",
}}/>

<Tab.Screen name="Bag" component={Bag} options={{
  headerShown: false,
  tabBarLabel: 'Bag',
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="shopping" color={color} size={30} />
  ),
  tabBarActiveTintColor: "red",
}}/>

<Tab.Screen name="Favourits" component={Favourits} options={{
  headerShown: false,
  tabBarLabel: 'Favourits',
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="heart" color={color} size={30} />
  ),
  tabBarActiveTintColor: "red",
}}/>

<Tab.Screen name="Profile" component={Profile} options={{
  headerShown: false,
  tabBarLabel: 'Profile',
  tabBarIcon: ({color}) => (
    <MaterialCommunityIcons name="account" color={color} size={30} />
  ),
  tabBarActiveTintColor: "red",
}}/>
</Tab.Navigator> */}