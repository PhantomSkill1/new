import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
//import { Button } from "native-base";
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import test_try from '../screens/Register'

const StackButTest = createStackNavigator;
<NavigationContainer>

<StackButTest.Navigator>
  <StackButTest.Screen
name="Test" component={test_try}
  />  <StackButTest.Screen />
</StackButTest.Navigator>
</NavigationContainer>


function MaterialButtonViolet(props) {

  return (
    <TouchableOpacity onPress={() => props.navigate.navigation('Test')}
    style={[styles.container, props.style]}
   
    >
      <Text style={styles.caption}>{props.text1 || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "roboto-regular"
  }
});

export default MaterialButtonViolet;