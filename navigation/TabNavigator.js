import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button, View,Text, ScrollView,SafeAreaView,Image,TextComponent,TouchableOpacity,StyleSheet, TextInput } from 'react-native';

import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={signin} />
        <Tab.Screen name="Contact" component={ContactStackNavigator} />
      </Tab.Navigator>
    );
  }
  





export default BottomTabNavigator;