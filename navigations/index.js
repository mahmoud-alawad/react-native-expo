import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import Login from "./screens/login";
import Home from "./screens/Home";
import Signup from "./screens/sign up ";
import Profile from "./screens/Profile";
import Category from "./screens/Category";
import AllProducts from "./screens/AllProducts"



const Stack=createNativeStackNavigator();
const BottomTabs=createBottomTabNavigator();


const BottomTabScreen = () => {
    return (
      <BottomTabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "white",
            height: 80,
          },
          tabBarIcon: ({ focused }) => {
            let iconName;
            if (route.name == "Profile") {
              iconName = "account";
            } else if (route.name == "Home") {
              iconName = "home";
            }
            else if (route.name == "Category") {
                iconName = "view-grid";
              }
  
            return (
              <Icon
                name={iconName}
                color={focused ? "#9649E2" : "black"}
                size={focused ? 30 : 24}
              />
            );
          },
        })}
      >
        <BottomTabs.Screen name="Home" component={Home} />
        <BottomTabs.Screen name="Category" component={Category} />
        <BottomTabs.Screen name="Profile" component={Profile} />
        
      </BottomTabs.Navigator>
    );
  };
const NavComponant =()=>{
    return(
    <NavigationContainer>
        <Stack.Navigator
    screenOptions={{ headerShown: false }}> 
            <Stack.Screen 
            name="Login Screen" component={Login} />
            <Stack.Screen name="Signup Screen" component={Signup} />
            <Stack.Screen name="bottomTabs" component={BottomTabScreen} />
            <Stack.Screen name="AllProducts" component={AllProducts} />

        </Stack.Navigator>
    </NavigationContainer>

    )}
export default NavComponant;