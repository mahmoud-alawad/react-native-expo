import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Home from "../screens/Home";
import Signup from "../screens/sign up ";
import Profile from "../screens/Profile";
import Category from "../screens/Category";
import AllProducts from "../screens/AllProducts"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 80,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Settings') {
            iconName = 'account';
          } else if (route.name === 'Category') {
            iconName = 'view-grid';
          }

          // You can return any component that you like here!
          return <Icon
            name={iconName}
            color={focused ? "#9649E2" : "black"}
            size={focused ? 30 : 24}
          />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Category" component={Category} />
      <Tab.Screen name="Settings" component={Profile} />
    </Tab.Navigator>
  );
};
const NavComponant = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" components={Login} />
        <Stack.Screen name="Signup" components={Signup} />
        <Stack.Screen name="bottomTabs" components={BottomTabScreen} />
        <Stack.Screen name="AllProducts" components={AllProducts} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default NavComponant;