import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabScreen } from './navigations';
import { Ionicons } from '@expo/vector-icons';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
     <Tab.Navigator
     screenOptions={({ route }) => ({
       tabBarIcon: ({ focused, color, size }) => {
         let iconName;

         if (route.name === 'Home') {
           iconName = focused
             ? 'ios-information-circle'
             : 'ios-information-circle-outline';
         } else if (route.name === 'Settings') {
           iconName = focused ? 'ios-list' : 'ios-list-outline';
         }

         // You can return any component that you like here!
         return <Ionicons name={iconName} size={size} color={color} />;
       },
       tabBarActiveTintColor: 'tomato',
       tabBarInactiveTintColor: 'gray',
     })}
   >
     <Tab.Screen name="Home" component={Home} />
     <Tab.Screen name="Settings" component={Profile} />
   </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
     <BottomTabScreen/>
    </NavigationContainer>
  );
}

export default App;
