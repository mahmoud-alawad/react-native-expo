import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabScreen } from './navigations';
import { Ionicons } from '@expo/vector-icons';
import Profile from './screens/Profile';

function App() {
  return (
    <NavigationContainer>
     <BottomTabScreen/>
    </NavigationContainer>
  );
}

export default App;
