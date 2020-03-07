import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";
import MaterialButtonViolet from "./src/components/MaterialButtonViolet";
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
const Stack = createStackNavigator;
import Home from '../Paytrixx_Dev/App.js';
import Regististration from './src/screens/Register.js';
import ScreenDashboard from './src/screens/Dashboard';
import ProfileScrn from './src/screens/Profile.js';
import { createStackNavigator } from "react-navigation-stack";

////agcx

<NavigationContainer>
<Stack.Navigator>
  <Stack.Screen
    name="Profile" component={ProfileScrn}
    name="Register" component={Regististration}
    name="Dashboard" component={ScreenDashboard} 
  />
  <Stack.Screen name="Home" component={Home} />
</Stack.Navigator>
</NavigationContainer>

function App(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/images/logo.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <MaterialButtonViolet
        text1="Register"
        style={styles.materialButtonViolet}
      ></MaterialButtonViolet>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: 250,
    height: 240,
    marginTop: 105,
    alignSelf: "center"
  },
  materialButtonViolet: {
    width: 130,
    height: 36,
    backgroundColor: "rgba(50,187,46,1)",
    marginTop: 180,
    borderRadius: 180,
    alignSelf: "center"
  }
});

export default App;