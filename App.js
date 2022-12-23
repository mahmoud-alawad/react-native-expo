import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabScreen } from "./navigations";

function App() {
  return (
    <NavigationContainer>
      <BottomTabScreen />
    </NavigationContainer>
  );
}

export default App;
